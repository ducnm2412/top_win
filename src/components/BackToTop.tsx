"use client";

import { useEffect, useState } from "react";

/** Nút cuộn lên đầu trang — chỉ hiện khi đã cuộn xuống quá một màn hình. */
export function BackToTop({ className }: { className: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Lên đầu trang"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`${className} bg-navy-900 ring-1 ring-white/20 ${show ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="m6 15 6-6 6 6" />
      </svg>
    </button>
  );
}
