import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://www.coindaynow.com";
const postsDir = path.join(process.cwd(), "content", "posts");

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));
  const results: Post[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
    const { data } = matter(raw);
    if (!data.published) continue;
    results.push({
      slug: data.slug ?? file.replace(/\.mdx$/, ""),
      title: data.title ?? "",
      description: data.description ?? "",
      date: data.date ?? "",
      category: data.category ?? "",
    });
  }

  return results.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

const posts = getAllPosts();

const items = posts
  .slice(0, 50)
  .map((post) => {
    const link = `${SITE_URL}/blog/${post.slug}`;
    return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description><![CDATA[${post.description}]]></description>
      <category>${post.category}</category>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Coinday — 오늘의 코인, 한 눈에</title>
    <link>${SITE_URL}</link>
    <description>비트코인·이더리움부터 알트코인·DeFi·NFT까지 매일 정리되는 코인 시세·뉴스·전략 매체. 시세·전망, 알트코인, 거래소, 코인뉴스, 트레이딩전략, DeFi·NFT 카테고리. 정보 제공 목적이며 매매 권유가 아닙니다.</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

fs.writeFileSync(path.join(process.cwd(), "public", "feed.xml"), xml);
console.log(`feed.xml generated (${Math.min(posts.length, 50)} items)`);
