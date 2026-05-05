import type { Metadata } from "next";
import { Suspense } from "react";
import SearchClient from "./SearchClient";

export const metadata: Metadata = {
  title: "검색",
  description: "Coinday에서 원하는 코인 정보·시세·뉴스를 검색하세요.",
  robots: { index: false, follow: false },
};

export default function SearchPage() {
  return (
    <Suspense>
      <SearchClient />
    </Suspense>
  );
}
