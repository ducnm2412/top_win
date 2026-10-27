"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/** Mỗi panel một bộ ảnh, chuyển lệch thời gian để tạo hiệu ứng nháy lần lượt. */
const PANELS = [
  [
    { src: "/images/bua/image3.webp", alt: "Nhà xưởng Top Win" },
    { src: "/images/bua/image5.webp", alt: "Khu vực sản xuất" },
    { src: "/images/bua/image9.webp", alt: "Dây chuyền lắp ráp" },
  ],
  [
    { src: "/images/bua/image4.webp", alt: "Lắp ráp búa đập thịt" },
    { src: "/images/bua/image13.webp", alt: "Kiểm tra sản phẩm" },
    { src: "/images/bua/image10.webp", alt: "Đóng gói xuất khẩu" },
  ],
  [
    { src: "/images/bua/image6.webp", alt: "Bắn tem đóng gói" },
    { src: "/images/bua/image7.webp", alt: "Vận hành máy" },
    { src: "/images/bua/image8.webp", alt: "Đóng gói" },
  ],
];

const INTERVAL = 4500;
const STAGGER = 600;
export const SKEW = 12;

function Panel({ slides, index }: { slides: (typeof PANELS)[number]; index: number }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let id: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      id = setInterval(() => setActive((i) => (i + 1) % slides.length), INTERVAL);
    }, index * STAGGER);
    return () => {
      clearTimeout(start);
      clearInterval(id);
    };
  }, [index, slides.length]);

  return (
    <div className={`hero-panel relative flex-1 overflow-hidden ${index > 0 ? "border-l-2 border-accent" : ""}`} style={{ animationDelay: `${0.25 + index * 0.18}s` }}>
      {/* bù lại góc nghiêng để ảnh đứng thẳng */}
      <div className="absolute inset-y-0 -inset-x-1/3" style={{ transform: `skewX(${SKEW}deg)` }}>
        {slides.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            fill
            preload={index === 0 && i === 0}
            unoptimized
            sizes="(min-width: 1024px) 30vw, 50vw"
            className={`object-cover transition-opacity duration-1000 ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-navy-950/25" />
      </div>
    </div>
  );
}

export function HeroSlider() {
  return (
    <div className="absolute inset-0 flex origin-bottom-left lg:left-[4%] lg:right-0" style={{ transform: `skewX(-${SKEW}deg)` }}>
      <div className="hero-stripe hidden w-[7%] bg-accent lg:block" />
      {PANELS.map((slides, i) => (
        <Panel key={i} slides={slides} index={i} />
      ))}
    </div>
  );
}
