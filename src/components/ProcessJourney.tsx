"use client";

import { useEffect, useRef, useState } from "react";
import { Photo } from "@/components/Photo";
import type { Img } from "@/lib/site";

// Theo QT.04 "Kiểm soát quá trình sản xuất" và tổng hợp hồ sơ ISO (doc/ho-so-iso-tong-hop.md)
const STEPS: { title: string; desc: string; points: string[]; img: Img }[] = [
  {
    title: "Tiếp nhận & kiểm tra nguyên liệu",
    desc: "Gỗ tấm, thép, dây sắt, hạt nhựa được kiểm tra đầu vào theo hồ sơ ISO trước khi nhập kho sản xuất.",
    points: ["Kiểm tra đầu vào", "Lưu hồ sơ nhà cung cấp"],
    img: { src: "/images/bua/image5.webp", alt: "Nguyên liệu đầu vào" },
  },
  {
    title: "Xử lý nguyên liệu & làm khuôn",
    desc: "Cưa, ghép phôi gỗ; cắt liệu kim loại; trộn – xay liệu nhựa. Khuôn được thiết kế và chế tạo ngay tại xưởng.",
    points: ["Cưa · ghép phôi", "Bắn điện · cắt dây khuôn"],
    img: { src: "/images/lanbot/phoi-go.webp", alt: "Phôi gỗ sau khi cắt liệu" },
  },
  {
    title: "Gia công định hình",
    desc: "Dập kim loại, hàn chập dây sắt, ép phun nhựa, CNC phay – tiện – khoan chi tiết gỗ theo bản vẽ khách hàng.",
    points: ["40+ máy dập", "35 máy hàn · CNC"],
    img: { src: "/images/vi/han-luoi.webp", alt: "Hàn lưới trên khuôn" },
  },
  {
    title: "Xử lý bề mặt & lắp ráp",
    desc: "Nhám thùng, bo cạnh, nhám băng, đánh bóng, sơn bóng; lắp ráp lưỡi và tay cầm thành sản phẩm hoàn chỉnh.",
    points: ["Đánh bóng · sơn bóng", "Lắp ráp"],
    img: { src: "/images/lanbot/than-lan.webp", alt: "Thân lăn bột sau chà nhám" },
  },
  {
    title: "Kiểm tra chất lượng",
    desc: "QC tại từng công đoạn: test lực kéo ≥15kg, test nén, test máy rửa chén, đo kích thước bằng thiết bị hiệu chuẩn ISO/IEC 17025.",
    points: ["Test kéo ≥15kg", "Test máy rửa chén"],
    img: { src: "/images/dao/image11.webp", alt: "Test máy rửa chén" },
  },
  {
    title: "In logo, dán tem & đóng gói",
    desc: "Khắc / in logo, dán tem mã vạch, ép túi và đóng thùng theo quy cách của từng nhà nhập khẩu.",
    points: ["Theo quy cách khách", "Tem mã vạch"],
    img: { src: "/images/bua/image10.webp", alt: "Đóng gói" },
  },
  {
    title: "Nhập kho & xuất khẩu",
    desc: "Thành phẩm được quản lý kho theo ISO và xuất container đi châu Âu, Mỹ, châu Á đúng tiến độ.",
    points: ["Quản lý kho ISO", "Xuất container"],
    img: { src: "/images/kho.webp", alt: "Khu kho và văn phòng Top Win" },
  },
];

/**
 * Một con đường liền mạch uốn lượn rộng sang hai bên, đi qua tâm từng ô ảnh.
 * Tọa độ đo từ DOM thật nên luôn khớp khi đổi kích thước màn hình.
 */
function buildRoad(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return "";
  // đường chữ S trơn: vào và ra mỗi ô theo phương dọc nên không có góc gãy
  const first = pts[0];
  let d = `M ${first.x} ${first.y}`; // bắt đầu ngay dưới ô đầu tiên, không đè lên tiêu đề
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i];
    const b = pts[i + 1];
    const k = (b.y - a.y) * 0.6;
    d += ` C ${a.x} ${a.y + k}, ${b.x} ${b.y - k}, ${b.x} ${b.y}`;
  }
  // kết thúc ngay tại ô cuối để không đè lên nội dung bên dưới
  return d;
}

export function ProcessJourney() {
  const wrap = useRef<HTMLDivElement>(null);
  const tiles = useRef<(HTMLDivElement | null)[]>([]);
  const [road, setRoad] = useState({ d: "", w: 0, h: 0 });
  const pathRef = useRef<SVGPathElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const steps = useRef<(HTMLDivElement | null)[]>([]);

  // cuộn tới đâu, bước quy trình hiện ra tới đó
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          // chỉ ẩn lại khi bước nằm phía dưới màn hình (cuộn ngược lên)
          if (e.isIntersecting) el.dataset.shown = "true";
          else if (e.boundingClientRect.top > 0) el.dataset.shown = "false";
        }),
      { rootMargin: "0px 0px -15% 0px", threshold: 0.2 },
    );
    steps.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // xe chạy dọc con đường theo tiến độ cuộn trang
  useEffect(() => {
    const el = wrap.current;
    const path = pathRef.current;
    const car = carRef.current;
    if (!el || !path || !car || !road.d) return;
    const total = path.getTotalLength();
    let frame = 0;
    let current = -1; // vị trí xe hiện tại (0..1), đuổi theo vị trí cuộn bằng nội suy cho mượt và chậm
    const target = () => {
      const r = el.getBoundingClientRect();
      return Math.min(1, Math.max(0, (window.innerHeight * 0.55 - r.top) / r.height));
    };
    let backward = false;
    const draw = (t: number) => {
      const len = t * total;
      const p = path.getPointAtLength(len);
      const q = path.getPointAtLength(Math.min(total, len + 1));
      // cuộn ngược thì quay đầu xe theo hướng di chuyển
      const angle = (Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI + (backward ? 180 : 0);
      car.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%) rotate(${angle}deg)`;
    };
    const tick = () => {
      const goal = target();
      if (current < 0) current = goal;
      if (Math.abs(goal - current) > 0.001) backward = goal < current;
      current += (goal - current) * 0.06;
      draw(current);
      frame = Math.abs(goal - current) > 0.0005 ? requestAnimationFrame(tick) : 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [road.d]);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const measure = () => {
      const box = el.getBoundingClientRect();
      const pts = tiles.current.filter(Boolean).map((t) => {
        const r = t!.getBoundingClientRect();
        return { x: r.left - box.left + r.width / 2, y: r.top - box.top + r.height / 2 };
      });
      setRoad({ d: buildRoad(pts), w: box.width, h: box.height });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrap} className="relative mt-14 space-y-6 lg:space-y-10">
      {road.d && (
        <svg
          className="pointer-events-none absolute inset-0 z-0 hidden overflow-visible lg:block"
          width={road.w}
          height={road.h}
          viewBox={`0 0 ${road.w} ${road.h}`}
          aria-hidden
        >
          <path d={road.d} fill="none" stroke="#2b3a4e" strokeWidth="72" strokeLinecap="round" strokeLinejoin="round" />
          <path d={road.d} fill="none" stroke="#17305a" strokeWidth="62" strokeLinecap="round" strokeLinejoin="round" />
          <path ref={pathRef} d={road.d} fill="none" stroke="#f26b1d" strokeWidth="4" strokeDasharray="22 18" strokeLinecap="round" />
        </svg>
      )}
      {road.d && (
        <div
          ref={carRef}
          className="pointer-events-none absolute left-0 top-0 z-[5] hidden drop-shadow-[0_6px_10px_rgb(0_0_0/0.45)] lg:block"
          aria-hidden
        >
          {/* xe tải nhìn từ trên xuống, đầu xe hướng sang phải */}
          <svg width="74" height="38" viewBox="0 0 74 38">
            <rect x="1" y="3" width="48" height="32" rx="3" fill="#eef1f5" stroke="#0a1628" strokeWidth="2" />
            <rect x="6" y="9" width="38" height="20" rx="1" fill="none" stroke="#b5c0ce" strokeWidth="1.5" />
            <text x="25" y="23" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f26b1d" fontFamily="Arial">TOP WIN</text>
            <rect x="51" y="5" width="21" height="28" rx="5" fill="#f26b1d" stroke="#0a1628" strokeWidth="2" />
            <rect x="62" y="9" width="7" height="20" rx="2" fill="#17305a" />
            <rect x="70" y="7" width="3" height="5" rx="1" fill="#fff6c2" />
            <rect x="70" y="26" width="3" height="5" rx="1" fill="#fff6c2" />
          </svg>
        </div>
      )}
      {STEPS.map((s, i) => {
        const right = i % 2 === 1;
        return (
          <div
            key={s.title}
            ref={(el) => {
              steps.current[i] = el;
            }}
            className="step-reveal"
          >
            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              {/* ô ảnh isometric */}
              <div className={`flex justify-center ${right ? "lg:order-2" : ""}`}>
                <div
                  ref={(el) => {
                    tiles.current[i] = el;
                  }}
                  className="iso-tile relative w-full max-w-md lg:max-w-[340px]"
                >
                  <Photo img={s.img} sizes="(min-width: 1024px) 340px, 100vw" className="aspect-[4/3] lg:aspect-square" />
                  <span className="absolute left-3 top-3 grid h-10 w-10 place-items-center bg-accent font-display text-lg font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* nội dung — nền trắng mờ để chữ luôn đọc rõ khi đường chạy phía sau */}
              <div className={right ? "lg:flex lg:justify-end" : ""}>
                <div className={`relative lg:max-w-lg lg:rounded-lg lg:bg-navy-950/70 lg:p-6 lg:shadow-lg lg:ring-1 lg:ring-white/10 lg:backdrop-blur-sm ${right ? "lg:text-right" : ""}`}>
                  <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-accent">Bước {i + 1}</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-steel-300">{s.desc}</p>
                  <ul className={`mt-4 flex flex-wrap gap-2 ${right ? "lg:justify-end" : ""}`}>
                    {s.points.map((p) => (
                      <li key={p} className="bg-white/10 px-3 py-1 text-xs font-semibold text-steel-200">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {i < STEPS.length - 1 && <div className="mx-auto my-6 h-10 w-px bg-white/20 lg:hidden" aria-hidden />}
          </div>
        );
      })}
    </div>
  );
}
