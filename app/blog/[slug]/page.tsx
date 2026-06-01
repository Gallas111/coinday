import { Fragment } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllSlugs, getRelatedPosts } from "@/lib/posts";
import { extractToc } from "@/lib/toc";
import imageDims from "@/lib/image-dims.json";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import InlineToolCTA from "@/components/InlineToolCTA";
import TableOfContents from "@/components/TableOfContents";
import ShareButtons from "@/components/ShareButtons";
import BlogCard from "@/components/BlogCard";
import AuthorCard from "@/components/AuthorCard";
import Disclaimer from "@/components/Disclaimer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: [
      post.keywords.primary,
      ...post.keywords.secondary,
      ...post.tags,
    ],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
    ...(post.noindex && {
      robots: { index: false, follow: true },
    }),
  };
}

function addHeadingIds(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w가-힣\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const toc = extractToc(post.content);
  const related = getRelatedPosts(slug, 3);
  const postUrl = `https://www.coindaynow.com/blog/${slug}`;

  const articleSchema = generateArticleSchema(post, postUrl);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "홈", url: "https://www.coindaynow.com" },
    {
      name: post.category,
      url: `https://www.coindaynow.com/category/${encodeURIComponent(post.category)}`,
    },
    { name: post.title, url: postUrl },
  ]);

  // Extract FAQ from content
  const faqSection = post.content.match(
    /## 자주 묻는 질문[\s\S]*$/
  );
  const faqs: { question: string; answer: string }[] = [];
  if (faqSection) {
    const faqRegex = /### (.+?)\n\n([\s\S]*?)(?=###|$)/g;
    let match;
    while ((match = faqRegex.exec(faqSection[0])) !== null) {
      faqs.push({
        question: match[1].trim(),
        answer: match[2].trim(),
      });
    }
  }

  return (
    <>
      <Header />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      <main className="max-w-3xl mx-auto px-4 py-8 flex-1">
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--muted)] mb-6" aria-label="breadcrumb">
          <a href="/" className="hover:text-[var(--accent)] transition-colors">
            홈
          </a>
          <span className="mx-2">›</span>
          <a
            href={`/category/${encodeURIComponent(post.category)}`}
            className="hover:text-[var(--accent)] transition-colors"
          >
            {post.category}
          </a>
          <span className="mx-2">›</span>
          <span className="text-[var(--foreground)]">{post.title}</span>
        </nav>

        {/* Post header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs bg-[var(--accent-soft)] text-[var(--accent-strong)] border border-[var(--accent)]/20 px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <span className="text-sm text-[var(--muted)]">{post.date}</span>
            <span className="text-sm text-[var(--muted)]">
              {post.readingTime}분 읽기
            </span>
          </div>
          <h1 className="display text-2xl md:text-3xl font-bold text-[var(--foreground)] leading-tight mb-4">
            {post.icon} {post.title}
          </h1>
          <p className="text-[var(--muted-strong)] leading-relaxed">{post.description}</p>
        </header>

        {/* Author Card - E-E-A-T */}
        <AuthorCard date={post.date} readingTime={`${post.readingTime}분`} />

        {/* Table of Contents */}
        <TableOfContents items={toc} />

        {/* Post content - split by H2, inject InlineToolCTA after 2nd H2 section */}
        <article className="prose">
          {(() => {
            const markdownComponents = {
              h2: ({ children }: { children?: React.ReactNode }) => {
                const text = String(children);
                const id = addHeadingIds(text);
                return <h2 id={id}>{children}</h2>;
              },
              h3: ({ children }: { children?: React.ReactNode }) => {
                const text = String(children);
                const id = addHeadingIds(text);
                return <h3 id={id}>{children}</h3>;
              },
              h4: ({ children }: { children?: React.ReactNode }) => {
                const text = String(children);
                const id = addHeadingIds(text);
                return <h4 id={id}>{children}</h4>;
              },
              // Inject intrinsic width/height (+ lazy) for body images to
              // reserve aspect-ratio box and eliminate CLS. Falls back to
              // the bare img (no dims) when the src is not in the dims map.
              img: (
                props: React.ImgHTMLAttributes<HTMLImageElement> & {
                  node?: unknown;
                }
              ) => {
                // Strip react-markdown's internal `node` prop so it does not
                // leak into the rendered HTML.
                const { src, alt, node: _node, ...rest } = props;
                void _node;
                const key = typeof src === "string" ? src : "";
                const dim = (imageDims as Record<string, number[]>)[key];
                const sizeProps =
                  dim && dim.length >= 2
                    ? { width: dim[0], height: dim[1] }
                    : {};
                return (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    {...rest}
                    src={typeof src === "string" ? src : undefined}
                    alt={alt ?? ""}
                    {...sizeProps}
                    loading="lazy"
                    decoding="async"
                  />
                );
              },
            };

            const sections = post.content.split(/(?=^## )/gm);
            const injectAfter = sections.length >= 5 ? 2 : 1;
            const midPoint =
              sections.length >= 7 ? Math.floor(sections.length / 2) : -1;

            return sections.map((section, i) => (
              <Fragment key={i}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={markdownComponents}
                >
                  {section}
                </ReactMarkdown>
                {i === injectAfter && (
                  <InlineToolCTA category={post.category} />
                )}
                {i === midPoint && i !== injectAfter && (
                  <InlineToolCTA category={post.category} />
                )}
              </Fragment>
            ));
          })()}
        </article>

        {/* Disclaimer & Ad Disclosure */}
        <Disclaimer />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 my-8">
          {post.tags.map((tag) => (
            <a
              key={tag}
              href={`/tag/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, "-"))}`}
              className="text-xs bg-[var(--surface)] border border-[var(--border)] px-3 py-1.5 rounded-full text-[var(--muted-strong)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            >
              #{tag}
            </a>
          ))}
        </div>

        {/* Share */}
        <div className="border-t border-[var(--border)] pt-6 mb-8">
          <ShareButtons url={postUrl} title={post.title} />
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4">
              📚 관련 글
            </h2>
            <div className="grid gap-4">
              {related.map((relPost) => (
                <BlogCard key={relPost.slug} post={relPost} />
              ))}
            </div>
          </section>
        )}

        {/* CTA Banner - placed last to maximize internal page views */}
        <CTABanner
          label={post.relatedService.label}
          href={post.relatedService.href}
          category={post.category}
        />
      </main>
      <Footer />
    </>
  );
}
