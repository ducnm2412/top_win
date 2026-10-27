import Image from "next/image";
import Link from "next/link";

// Theo "Khách hàng mục tiêu" trong doc/yeu-cau-khach-hang.md
const CARDS = [
  {
    title: "Nhà nhập khẩu",
    img: "/images/nha-may.webp",
    pos: "object-left",
    points: ["Nguồn hàng ổn định từ Việt Nam", "Giá cạnh tranh, đơn số lượng lớn", "Đang xuất hàng châu Âu"],
  },
  {
    title: "Thương hiệu đồ bếp",
    img: "/images/dao/image16.webp",
    pos: "object-center",
    points: ["OEM theo mẫu & bản vẽ", "In logo, bao bì riêng", "Tự làm khuôn tại xưởng"],
  },
  {
    title: "Chuỗi bán lẻ",
    img: "/images/bua/image10.webp",
    pos: "object-center",
    points: ["Đóng gói theo quy cách bán lẻ", "Tem mã vạch, thùng xuất khẩu", "QC từng lô theo ISO 9001"],
  },
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="m8 12 3 3 5-6" />
    </svg>
  );
}

function Arrow({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${dark ? "bg-white text-navy-950" : "bg-white text-navy-950"}`}>
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
        <path d="M7 17 17 7M9 7h8v8" />
      </svg>
    </span>
  );
}

export function TargetCustomers() {
  return (
    <section id="khach-hang" className="bg-white pb-20 pt-4 lg:pb-24 lg:pt-6">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_2fr]">
        <div>
          <span className="inline-block rounded-full border border-navy-950 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-navy-950">
            Khách hàng & dịch vụ
          </span>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-navy-950 sm:text-4xl">
            Sản xuất OEM tại Việt Nam cho châu Âu, Mỹ và châu Á
          </h2>
          <p className="mt-4 leading-relaxed text-steel-600">
            Đối tác của nhà nhập khẩu, thương hiệu và chuỗi bán lẻ đồ gia dụng nhà bếp — từ mẫu thử đến container hàng.
          </p>
          <Link
            href="/lien-he"
            className="mt-8 inline-flex items-center gap-4 rounded-full bg-navy-950 py-2 pl-6 pr-2 text-sm font-semibold text-white transition hover:bg-accent"
          >
            Yêu cầu báo giá
            <Arrow />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {CARDS.map((c) => (
            <Link
              key={c.title}
              href="/lien-he"
              className="group relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-2xl p-5 text-white"
            >
              <Image src={c.img} alt={c.title} fill sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 100vw" className={`-z-10 object-cover transition duration-700 group-hover:scale-105 ${c.pos}`} />
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/10 via-navy-950/60 to-navy-950/95" />
              <h3 className="text-2xl font-semibold leading-tight">{c.title}</h3>
              <ul className="mt-4 space-y-2">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-steel-200">
                    <Check />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex justify-end transition group-hover:translate-x-1">
                <Arrow />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
