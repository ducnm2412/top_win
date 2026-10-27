import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";

const icon = "h-9 w-9 shrink-0";
const SERVICES = [
  {
    label: ["Dụng cụ", "nhà bếp OEM"],
    svg: <path d="M4 20 14 10m0 0 3-6 3 3-6 3Zm-4 0L6 6" />,
  },
  {
    label: ["Khuôn mẫu", "& dập kim loại"],
    svg: <path d="M4 7h16M7 7v10m10-10v10M4 17h16M9 12h6" />,
  },
  {
    label: ["Gỗ · Nhựa", "· Dây sắt"],
    svg: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.9 4.9 7 7m10 10 2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" />
      </>
    ),
  },
];

const FEATURES = [
  { label: ["ISO 9001:2015", "Chất lượng ổn định"], svg: <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Zm-3 9 2 2 4-4" /> },
  { label: ["7 bộ phận", "Sản xuất khép kín"], svg: <path d="M3 21V9l6 4V9l6 4V5l6 4v12H3Z" /> },
  { label: ["200+ máy", "Năng lực lớn"], svg: <path d="M4 20V10m6 10V4m6 16v-8m4 8H2" /> },
  { label: ["Xuất khẩu", "Thị trường châu Âu"], svg: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></> },
];

function Icon({ children, className = icon }: { children: React.ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {children}
    </svg>
  );
}

export function Hero() {
  return (
    <section data-noreveal className="relative overflow-hidden bg-navy-950 pt-20 lg:pt-0">
      {/* nền mờ bên trái */}
      <div className="navy-texture absolute inset-0" />

      <div className="relative lg:[min-height:max(720px,100svh)]">
        {/* ba panel ảnh nghiêng bên phải — cùng một góc skew nên các cạnh luôn song song */}
        <div className="relative mx-4 mt-6 h-72 overflow-hidden sm:h-96 lg:absolute lg:bottom-[196px] lg:right-0 lg:top-0 lg:m-0 lg:h-auto lg:w-[60%]">
          <HeroSlider />
        </div>

        {/* nội dung bên trái */}
        <div className="relative z-10 px-4 pb-10 pt-10 sm:px-6 lg:w-[40%] lg:pb-[150px] lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:pr-8 lg:pt-36">
          <div>
            <p className="hero-up flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-steel-300" style={{ animationDelay: "0s" }}>
              OEM Manufacturing · Vietnam
            </p>
            <h1 className="mt-5 font-display text-5xl font-extrabold uppercase leading-[1.12] tracking-tight sm:text-6xl lg:text-[clamp(2.5rem,3.4vw,4.25rem)]">
              <span className="hero-up block text-accent" style={{ animationDelay: "0.1s" }}>Sản xuất OEM</span>
              <span className="hero-up block text-white" style={{ animationDelay: "0.2s" }}>Đồ gia dụng,</span>
              <span className="hero-up block text-accent" style={{ animationDelay: "0.3s" }}>Chuẩn xuất khẩu</span>
            </h1>
            <span className="hero-line mt-6 block h-0.5 w-16 origin-left bg-accent" />
            <p className="hero-up mt-6 max-w-md leading-relaxed text-steel-300" style={{ animationDelay: "0.45s" }}>
              Top Win cung cấp giải pháp sản xuất trọn gói: dụng cụ nhà bếp, dây sắt, gỗ, nhựa và khuôn dập kim loại.
              Đối tác tin cậy cho nhà nhập khẩu châu Âu, Mỹ và châu Á.
            </p>
            <Link
              href="#bao-gia"
              className="hero-up hero-shine group relative mt-8 inline-flex items-center gap-4 overflow-hidden rounded-md bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-accent/30 transition hover:bg-accent-600"
              style={{ animationDelay: "0.6s" }}
            >
              Yêu cầu báo giá
              <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-white transition group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* dải dịch vụ dưới panel */}
        <div className="relative z-10 mx-4 mb-6 grid grid-cols-3 divide-x divide-steel-200 bg-white/90 py-4 shadow-sm sm:mx-6 lg:absolute lg:bottom-[110px] lg:right-0 lg:m-0 lg:flex lg:h-[86px] lg:w-[58%] lg:items-center lg:bg-white lg:py-0 lg:shadow-none">
          {SERVICES.map((s, i) => (
            <div key={s.label[0]} className="hero-up flex flex-1 flex-col items-center gap-2 px-2 text-center sm:flex-row sm:text-left lg:px-5" style={{ animationDelay: `${0.8 + i * 0.12}s` }}>
              <span className="text-accent">
                <Icon>{s.svg}</Icon>
              </span>
              <span className="text-[11px] font-semibold uppercase leading-snug text-navy-950 sm:text-sm">
                {s.label[0]}
                <br />
                {s.label[1]}
              </span>
            </div>
          ))}
        </div>

        {/* thanh dưới cùng */}
        <div className="relative z-10 grid lg:absolute lg:inset-x-0 lg:bottom-0 lg:h-[110px] lg:grid-cols-[30%_1fr] xl:grid-cols-[38%_1fr]">
          <div
            className="hero-left flex items-center gap-5 bg-navy-800 px-6 py-5 text-white lg:px-12 lg:py-0 lg:pr-20"
            style={{ clipPath: "var(--bar-clip)" }}
          >
            <Icon className="h-14 w-14 shrink-0 lg:h-10 lg:w-10 xl:h-14 xl:w-14">
              <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Zm-3.5 9 2.5 2.5 4.5-4.5" />
            </Icon>
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-wide lg:text-base xl:text-lg">Cam kết chất lượng · Đúng hẹn</p>
              <p className="mt-1 text-sm text-steel-300 lg:hidden 2xl:block">QC từng công đoạn, test kéo ≥15kg, test máy rửa chén.</p>
            </div>
          </div>
          <div className="hero-right grid grid-cols-2 gap-y-6 bg-accent px-6 py-5 text-white lg:py-0 sm:grid-cols-4 lg:-ml-10 lg:items-center lg:pl-16">
            {FEATURES.map((f, i) => (
              <div key={f.label[0]} className={`hero-up flex items-center gap-3 px-2 ${i ? "sm:border-l sm:border-white/30" : ""}`} style={{ animationDelay: `${1 + i * 0.12}s` }}>
                <Icon className="h-9 w-9 shrink-0 lg:h-7 lg:w-7 xl:h-9 xl:w-9">{f.svg}</Icon>
                <span className="text-sm font-medium leading-snug lg:text-xs xl:text-sm">
                  {f.label[0]}
                  <br />
                  <span className="text-white/85">{f.label[1]}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
