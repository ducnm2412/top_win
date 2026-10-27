import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { CONTACT } from "@/lib/site";

const script = Dancing_Script({ subsets: ["latin", "vietnamese"], weight: ["700"] });

/**
 * Thẻ trình bày kiểu giấy chứng nhận — chỉ là hình minh họa, KHÔNG thay thế bản scan gốc.
 * Theo quy định của tổ chức chứng nhận: phải ghi rõ đây là chứng nhận hệ thống quản lý, không phải chứng nhận sản phẩm.
 */
export function Certification() {
  return (
    <section
      id="chung-nhan"
      className="relative overflow-hidden bg-steel-200 px-4 py-20 sm:px-6 lg:py-28"
      style={{ backgroundImage: "linear-gradient(135deg, transparent 62%, rgb(255 255 255 / 0.35) 62%)" }}
    >
      <div className="relative mx-auto max-w-5xl">
        {/* thẻ chứng nhận */}
        <div className="relative overflow-hidden bg-white px-6 py-12 shadow-[0_30px_60px_-20px_rgb(10_22_40/0.45)] sm:px-14 sm:py-16">
          {/* nền giấy */}
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(120deg, transparent 40%, rgb(214 221 230 / 0.5) 40%, transparent 70%), linear-gradient(200deg, transparent 55%, rgb(238 241 245) 55%)",
            }}
          />
          {/* viền trái + trên (navy) */}
          <div className="absolute inset-y-0 left-0 w-2 bg-navy-900" />
          <div className="absolute left-0 top-0 h-2 w-[38%] bg-navy-900" />
          <div className="absolute bottom-0 left-0 h-2 w-[38%] bg-navy-900" />
          {/* góc trên trái */}
          <div className="absolute left-0 top-0 h-12 w-12 bg-accent" />
          <div className="absolute left-0 top-12 h-0 w-0 border-l-[34px] border-t-[34px] border-l-navy-900 border-t-transparent" />
          <div className="absolute left-12 top-0 h-0 w-0 border-l-[34px] border-t-[34px] border-l-transparent border-t-navy-900" />
          {/* thanh cam bên phải */}
          <div className="absolute right-0 top-0 h-[64%] w-2 bg-accent sm:right-6 sm:w-9" />
          {/* góc dưới phải */}
          <div className="absolute bottom-0 right-0 h-14 w-14 bg-navy-950 sm:h-20 sm:w-16" />
          <div className="absolute bottom-20 right-0 hidden h-0 w-0 border-r-[22px] border-t-[22px] border-r-accent border-t-transparent sm:block" />
          <div className="absolute bottom-0 right-16 hidden h-0 w-0 border-b-[22px] border-r-[22px] border-b-accent border-r-transparent sm:block" />

          <div className="relative text-center">
            {/* đơn vị */}
            <div className="flex items-center justify-center gap-3">
              <Image src="/images/logo.webp" alt="Top Win" width={379} height={240} className="h-10 w-auto" />
              <div className="text-left text-xs font-semibold uppercase leading-snug tracking-wide text-navy-900 sm:text-sm">
                {CONTACT.legalName}
                <br />
                <span className="font-medium text-steel-600">KCN Sóng Thần 3, Bình Dương, Việt Nam</span>
              </div>
            </div>

            {/* tiêu đề */}
            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
              <div className="text-center font-display font-extrabold uppercase leading-[0.95] sm:text-right">
                <div className="text-sm tracking-[0.2em] text-navy-800">Quality Management</div>
                <div className="text-5xl text-accent sm:text-6xl">ISO</div>
                <div className="text-4xl text-accent sm:text-5xl">9001:2015</div>
              </div>
              <div className="hidden h-28 w-px bg-navy-800 sm:block" />
              <div className="text-center sm:text-left">
                <div className={`${script.className} text-6xl leading-none text-navy-800 sm:text-7xl`}>Chứng nhận</div>
                <div className="mt-2 text-lg font-medium uppercase tracking-[0.15em] text-navy-900 sm:text-xl">Hệ thống quản lý chất lượng</div>
              </div>
            </div>

            <p className="mt-10 text-steel-600">Chứng nhận này xác nhận</p>
            <p className="mx-auto mt-3 max-w-xl border-b border-steel-300 pb-2 font-display text-2xl font-bold uppercase tracking-wide text-navy-950 sm:text-3xl">
              {CONTACT.legalNameEn}
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-navy-900 sm:text-base">
              vận hành hệ thống quản lý chất lượng phù hợp tiêu chuẩn <strong>ISO 9001:2015</strong> cho hoạt động sản xuất đồ
              gia dụng nhà bếp: kim loại, dây sắt, gỗ, nhựa, khuôn mẫu và dập kim loại.
            </p>
            <p className="mt-4 text-xs text-steel-600">
              Đây là chứng nhận hệ thống quản lý, không phải chứng nhận sản phẩm.
            </p>

            {/* chân thẻ */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-16">
              <div>
                <div className="mx-auto h-px w-48 bg-steel-300" />
                <p className="mt-3 text-sm font-semibold text-navy-950">16 quy trình ISO</p>
                <p className="text-sm text-steel-600">Mua hàng · Sản xuất · Kho · Đào tạo · Đánh giá nội bộ</p>
              </div>
              <div>
                <div className="mx-auto h-px w-48 bg-steel-300" />
                <p className="mt-3 text-sm font-semibold text-navy-950">Tra cứu hiệu lực chứng chỉ</p>
                <a
                  href="https://www.iafcertsearch.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-accent underline underline-offset-2 hover:text-accent-600"
                >
                  IAF CertSearch →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* TODO: thay bằng link tới bản scan chứng nhận ISO gốc khi khách cung cấp */}
        <p className="mt-6 text-center text-xs text-steel-600">
          Hình minh họa. Bản scan giấy chứng nhận gốc được cung cấp theo yêu cầu.
        </p>
      </div>
    </section>
  );
}
