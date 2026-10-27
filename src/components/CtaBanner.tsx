import Image from "next/image";

/** Lời kêu gọi cuối trang: ảnh nhà máy phủ mờ + ô nhập email dẫn sang trang liên hệ. */
export function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <Image src="/images/nha-may.webp" alt="" fill unoptimized sizes="100vw" className="-z-20 object-cover object-left" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-white/85 lg:bg-transparent lg:bg-gradient-to-r lg:from-transparent lg:from-35% lg:via-white/75 lg:via-55% lg:to-white/85" />

      <div className="mx-auto grid max-w-7xl px-4 py-16 sm:px-6 lg:min-h-[480px] lg:grid-cols-[1.15fr_1fr] lg:items-center lg:py-20">
        <div className="hidden lg:block" />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Bắt đầu hợp tác</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-950 sm:text-4xl">
            Bạn đang tìm đối tác sản xuất OEM tại Việt Nam?
          </h2>
          <p className="mt-4 leading-relaxed text-steel-800">
            Để lại email, bộ phận kinh doanh sẽ liên hệ trong 24 giờ làm việc với báo giá và mẫu thử phù hợp.
          </p>
          <form action="/lien-he" className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="cta-email">
              Email
            </label>
            <input
              id="cta-email"
              name="email"
              type="email"
              required
              placeholder="Email công ty của bạn"
              className="h-14 w-full shrink-0 rounded-md sm:w-auto sm:flex-1 border border-steel-300 bg-white px-5 text-navy-950 shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25"
            />
            <button
              type="submit"
              className="h-14 rounded-md bg-accent px-7 font-semibold uppercase tracking-wide text-white shadow-lg shadow-accent/30 transition hover:bg-accent-600"
            >
              Nhận báo giá
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
