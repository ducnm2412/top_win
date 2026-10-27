// TODO: chờ khách duyệt danh sách đối tác được phép công khai (không đưa tên khách hàng khi chưa đồng ý).
// Khi có logo: thêm { name, logo: "/images/partners/xxx.png" } vào mảng này.
const PARTNERS: { name: string; logo?: string }[] = Array.from({ length: 9 }, (_, i) => ({ name: `Đối tác ${i + 1}` }));

const MARKETS = ["Châu Âu", "Hoa Kỳ", "Châu Á"];

export function Partners() {
  return (
    <section id="doi-tac" className="bg-steel-100 py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-accent">
            Đối tác
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
            Được tin cậy bởi các nhà nhập khẩu và thương hiệu quốc tế.
          </h2>
          <p className="mt-6 leading-relaxed text-steel-600">
            Gần 20 năm phát triển kể từ 2007, <strong className="text-navy-900">Top Win</strong> đã trở thành đối tác sản
            xuất OEM của các nhà nhập khẩu, thương hiệu và chuỗi bán lẻ đồ gia dụng nhà bếp, đặc biệt tại thị trường
            châu Âu.
          </p>
          <p className="mt-4 leading-relaxed text-steel-600">
            Hệ thống quản lý chất lượng ISO 9001:2015, nhà máy khép kín 7 bộ phận và QC ở từng công đoạn giúp chúng tôi
            đáp ứng tiêu chuẩn đánh giá nhà cung cấp khắt khe của khách hàng quốc tế.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {MARKETS.map((m) => (
              <span key={m} className="border-l-4 border-accent bg-white px-4 py-2 text-sm font-semibold text-navy-900 shadow-sm">
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px border border-steel-200 bg-steel-200 shadow-sm sm:grid-cols-3">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="group flex h-28 items-center justify-center bg-white p-6 last:hidden sm:last:flex"
            >
              {p.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-12 w-auto opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              ) : (
                <span className="text-xs font-semibold uppercase tracking-widest text-steel-400">Logo đối tác</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
