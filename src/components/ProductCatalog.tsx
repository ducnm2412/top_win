import Image from "next/image";
import Link from "next/link";

// 5 nhóm sản phẩm theo yêu cầu khách (doc/yeu-cau-khach-hang.md)
const GROUPS = [
  { id: "dung-cu-nha-bep", title: "Dụng cụ nhà bếp", desc: "Dao gọt vỏ / dao bào (item 1071)", img: "/images/dao/image16.webp" },
  { id: "day-sat", title: "Sản phẩm dây sắt", desc: "Vỉ / giá làm nguội bánh (10×15, 10×16 inch), lưới hàn", img: "/images/vi/thanh-pham.webp" },
  { id: "go", title: "Sản phẩm, chi tiết gỗ gia dụng", desc: "CNC, tiện, chà nhám", img: "/images/lanbot/tien-go.webp" },
  { id: "nhua", title: "Sản phẩm nhựa ép, nhúng PE", desc: "Ép phun và nhúng phủ PE", img: "/images/bua/image14.webp" },
  { id: "khuon-dap", title: "Gia công khuôn mẫu & dập kim loại", desc: "Theo bản vẽ khách hàng", img: "/images/bua/image4.webp" },
];

/**
 * Dải ảnh mở rộng: desktop rê chuột vào nhóm nào thì cột đó giãn ra hiện mô tả
 * (mặc định mở nhóm đầu); điện thoại xếp dọc, luôn hiện đủ nội dung.
 */
export function ProductCatalog() {
  return (
    <section id="san-pham" className="relative isolate bg-white py-20 lg:py-24">
      <div className="grid-light absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-navy-950 pb-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Sản phẩm</p>
            <h2 className="mt-2 text-3xl font-bold text-navy-950 sm:text-4xl">5 nhóm sản phẩm chính</h2>
          </div>
          <Link href="/lien-he#bao-gia" className="font-semibold text-navy-950 underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
            Yêu cầu catalog →
          </Link>
        </div>

        <div className="group/list mt-8 flex flex-col gap-1 lg:h-[520px] lg:flex-row">
          {GROUPS.map((g, i) => (
            <Link
              key={g.id}
              id={g.id}
              href={`/san-pham/${g.id}`}
              className="group relative isolate flex h-64 scroll-mt-28 overflow-hidden bg-navy-950 text-white transition-[flex-grow] duration-500 ease-out lg:h-auto lg:flex-1 lg:first:flex-[3] lg:hover:!flex-[3] lg:group-hover/list:first:flex-1"
            >
              <Image src={g.img} alt={g.title} fill unoptimized sizes="(min-width: 1024px) 40vw, 100vw" className="-z-10 object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

              <span className="absolute left-0 top-0 bg-accent px-3 py-2 font-display text-lg font-bold">{String(i + 1).padStart(2, "0")}</span>

              <div className="mt-auto w-full p-6">
                <h3 className="font-display text-2xl font-bold uppercase leading-tight lg:text-[1.65rem]">{g.title}</h3>
                <div className="grid transition-all duration-500 lg:grid-rows-[0fr] lg:opacity-0 lg:group-first:grid-rows-[1fr] lg:group-first:opacity-100 lg:group-hover/list:group-first:grid-rows-[0fr] lg:group-hover/list:group-first:opacity-0 lg:group-hover:!grid-rows-[1fr] lg:group-hover:!opacity-100">
                  <div className="overflow-hidden">
                    <p className="mt-2 max-w-sm text-steel-200">{g.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-sm font-semibold uppercase tracking-wide">
                      Xem chi tiết <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
