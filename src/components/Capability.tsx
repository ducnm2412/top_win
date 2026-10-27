import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const script = Dancing_Script({ subsets: ["latin", "vietnamese"], weight: ["700"] });

const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

// 7 bộ phận sản xuất khép kín
const DEPTS = [
  { name: "Gỗ", icon: <path d="M4 20h16M6 20V9l6-5 6 5v11M10 20v-6h4v6" /> },
  { name: "Dây sắt", icon: <path d="M4 4h16v16H4zM4 9h16M4 14h16M9 4v16M14 4v16" /> },
  { name: "Nhựa", icon: <path d="M9 3h6v4l3 4v10H6V11l3-4z" /> },
  { name: "Khuôn", icon: <path d="M4 6h16v4H4zM4 14h16v4H4zM8 10v4M16 10v4" /> },
  { name: "Dập", icon: <path d="M8 3h8v6H8zM12 9v6M5 15h14v3H5zM4 21h16" /> },
  { name: "Đánh bóng", icon: <><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="2" /><path d="M12 2v3M22 12h-3" /></> },
  { name: "Đóng gói", icon: <path d="M3 8l9-5 9 5v9l-9 5-9-5zM3 8l9 5 9-5M12 13v9" /> },
];

export function Capability() {
  return (
    <section id="nang-luc" className="relative isolate overflow-hidden bg-white">
      {/* ảnh trải cả section, phía chữ chỉ phủ mờ chứ không trắng hẳn */}
      <Image src="/images/nha-may.webp" alt="" fill sizes="100vw" unoptimized className="-z-20 hidden object-cover object-left lg:block" aria-hidden />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-transparent from-35% via-white/70 via-55% to-white/80 lg:block" />
      <div>
        <div className="grid lg:grid-cols-[1.15fr_1fr]">
          {/* ảnh nhà máy, mờ dần sang phải */}
          <div className="relative min-h-[320px] lg:min-h-[560px]">
            <Image src="/images/nha-may.webp" alt="Nhà máy Top Win tại KCN Sóng Thần 3" fill unoptimized sizes="100vw" className="object-cover object-left lg:hidden" />
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent lg:hidden" />
            <p className={`${script.className} absolute left-6 top-6 -rotate-6 text-3xl leading-tight text-white drop-shadow-[0_2px_6px_rgb(0_0_0/0.5)] sm:text-4xl`}>
              Nơi chất lượng
              <br />
              được tạo nên ♡
            </p>
          </div>

          {/* nội dung */}
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:pr-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Năng lực nhà máy</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-950 sm:text-4xl">
              Nhà máy khép kín,
              <br />
              Sẵn sàng cho đơn hàng OEM
            </h2>
            <p className="mt-4 leading-relaxed text-steel-600">
              7 bộ phận sản xuất liên thông với 200+ máy móc, tự làm khuôn tại xưởng — một đơn hàng đi trọn từ nguyên liệu
              đến thùng carton mà không cần thuê ngoài.
            </p>
            <ul className="mt-8 grid grid-cols-4 gap-x-2 gap-y-6 sm:grid-cols-7">
              {DEPTS.map((d) => (
                <li key={d.name} className="flex flex-col items-center gap-2 text-center">
                  <svg viewBox="0 0 24 24" className="h-8 w-8 text-navy-900" {...s} aria-hidden>
                    {d.icon}
                  </svg>
                  <span className="text-xs font-medium leading-tight text-navy-900">{d.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
