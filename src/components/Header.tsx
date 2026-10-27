"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, NAV } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);

  // khóa cuộn nền khi menu mở
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-40 text-white transition-all duration-300 ${
        scrolled || open ? "border-b border-white/10 bg-navy-950/95 shadow-lg backdrop-blur" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 transition-all duration-300 sm:px-6 ${scrolled ? "h-16" : "h-20"}`}>
        <Link href="/" className="flex items-center" aria-label="Top Win — Trang chủ">
          <Image
            src="/images/logo.webp"
            alt="Top Win"
            width={379}
            height={240}
            preload
            className={`w-auto transition-all duration-300 ${scrolled ? "h-11" : "h-14"}`}
          />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-steel-200 lg:flex">
          {NAV.map((n) =>
            n.children ? (
              <div key={n.href} className="group relative">
                <Link href={n.href} className="flex items-center gap-1 py-6 transition hover:text-white">
                  {n.label}
                  <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Link>
                <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 translate-y-2 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="overflow-hidden rounded-lg border-t-4 border-accent bg-white p-2 shadow-2xl">
                    {n.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block rounded-md px-4 py-3 transition hover:bg-steel-100">
                          <span className="block text-sm font-semibold text-navy-950">{c.label}</span>
                          {c.desc && <span className="mt-0.5 block text-xs text-steel-600">{c.desc}</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link key={n.href} href={n.href} className="transition hover:text-white">
                {n.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-3">
          <a href={`tel:${CONTACT.phoneRaw}`} className="hidden text-sm text-steel-200 md:block">
            {CONTACT.phone}
          </a>
          <Link
            href="/lien-he"
            className="hidden bg-accent px-4 py-2 text-sm font-semibold uppercase tracking-wide transition hover:bg-accent-600 sm:block"
          >
            Yêu cầu báo giá
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center lg:hidden"
          >
            <span className="relative block h-4 w-6">
              <span className={`absolute left-0 h-0.5 w-6 bg-white transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-6 bg-white transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

    </header>
      {/* menu điện thoại */}
      <div
        className={`fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-navy-950 px-4 text-white pb-10 transition duration-300 lg:hidden ${
          open ? "visible translate-x-0 opacity-100" : "invisible translate-x-full opacity-0"
        }`}
      >
        <ul className="divide-y divide-white/10">
          {NAV.map((n) => (
            <li key={n.href}>
              <div className="flex items-center justify-between">
                <Link href={n.href} onClick={() => setOpen(false)} className="flex-1 py-4 text-lg font-semibold">
                  {n.label}
                </Link>
                {n.children && (
                  <button
                    type="button"
                    aria-label={`Mở ${n.label}`}
                    onClick={() => setSub(sub === n.href ? null : n.href)}
                    className="grid h-10 w-10 place-items-center"
                  >
                    <svg viewBox="0 0 24 24" className={`h-5 w-5 transition ${sub === n.href ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                )}
              </div>
              {n.children && sub === n.href && (
                <ul className="mb-3 space-y-1 border-l-2 border-accent pl-4">
                  {n.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} onClick={() => setOpen(false)} className="block py-2 text-steel-200">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <a href={`tel:${CONTACT.phoneRaw}`} className="mt-6 block text-center text-steel-200">
          Tel / Zalo: {CONTACT.phone}
        </a>
      </div>
    </>
  );
}
