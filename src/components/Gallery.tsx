"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

/** Lưới ảnh bấm để phóng to; xem tiếp bằng nút trái/phải hoặc phím mũi tên, Esc để đóng. */
export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + images.length) % images.length)), [images.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, go]);

  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Xem ảnh ${i + 1}`}
            className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-lg bg-steel-100"
          >
            <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
            <span className="absolute inset-0 grid place-items-center bg-navy-950/0 transition group-hover:bg-navy-950/30">
              <svg viewBox="0 0 24 24" className="h-10 w-10 text-white opacity-0 transition group-hover:opacity-100" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4M11 8v6M8 11h6" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/95 p-4" onClick={() => setOpen(null)}>
          <div className="relative h-[85vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image src={images[open]} alt={alt} fill unoptimized sizes="100vw" className="object-contain" />
          </div>
          <button type="button" aria-label="Đóng" onClick={() => setOpen(null)} className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl text-white hover:bg-accent">
            ✕
          </button>
          {images.length > 1 && (
            <>
              <button type="button" aria-label="Ảnh trước" onClick={(e) => { e.stopPropagation(); go(-1); }} className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-2xl text-white hover:bg-accent">
                ‹
              </button>
              <button type="button" aria-label="Ảnh sau" onClick={(e) => { e.stopPropagation(); go(1); }} className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-2xl text-white hover:bg-accent">
                ›
              </button>
            </>
          )}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-steel-300">
            {open + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
