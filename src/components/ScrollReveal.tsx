"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Hiện dần các khối nội dung khi cuộn tới, áp dụng cho mọi section trong <main>.
 * Bỏ qua banner đầu trang (data-noreveal) và section quy trình (đã có hiệu ứng riêng).
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // chỉ lấy section của trang đang hiển thị (trang cũ có thể còn trong DOM ở dạng ẩn),
    // bỏ qua banner đầu trang và các khối đã xử lý
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section:not([data-noreveal]):not([data-revealed])")).filter(
      (sec) => sec.offsetParent !== null && !sec.parentElement?.closest("section"),
    );
    sections.forEach((sec) => (sec.dataset.revealed = "true"));
    const items: HTMLElement[] = [];
    sections.forEach((sec) => {
      if (sec.id === "quy-trinh") {
        // chỉ hiện dần tiêu đề và phần tab sản phẩm, không đụng tới timeline
        sec.querySelectorAll<HTMLElement>(":scope > div > :not(:has(.step-reveal))").forEach((el) => items.push(el));
        return;
      }
      const inner = sec.querySelector<HTMLElement>(":scope > div:not([class*='absolute'])") ?? sec;
      // khối con trực tiếp; nếu là lưới thì hiện lần lượt từng ô
      Array.from(inner.children).forEach((child) => {
        const el = child as HTMLElement;
        const grid = el.matches("[class*='grid']") && el.children.length > 1 ? Array.from(el.children) : [el];
        grid.forEach((g, i) => {
          (g as HTMLElement).style.transitionDelay = `${Math.min(i, 6) * 0.08}s`;
          items.push(g as HTMLElement);
        });
      });
    });

    items.forEach((el) => el.classList.add("reveal"));
    // theo dõi cả các khối của lần vào trước chưa kịp hiện (khi quay lại trang cũ)
    const pending = Array.from(document.querySelectorAll<HTMLElement>("main .reveal:not(.is-visible)"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    pending.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
