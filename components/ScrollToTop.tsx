"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="맨 위로 이동"
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 md:w-12 md:h-12 rounded-full border border-[var(--accent)]/30 bg-[var(--surface)]/90 backdrop-blur-md text-[var(--accent)] hover:text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200 flex items-center justify-center shadow-[0_4px_18px_rgba(79,139,255,0.25)] ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
