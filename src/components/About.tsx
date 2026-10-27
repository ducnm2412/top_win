import Image from "next/image";

export function About() {
  return (
    <>
      {/* ABOUT / MISSION */}
      <section id="gioi-thieu" className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.62fr] lg:gap-10">
          <div className="flex flex-col justify-between gap-10">
            <div className="grid items-center gap-8 sm:grid-cols-[0.85fr_1fr]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-lg">
                <Image src="/images/bua/image3.webp" alt="Công nhân Top Win gia công chi tiết" fill sizes="(min-width: 1024px) 28vw, 100vw" className="object-cover" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Về Top Win</p>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-950 xl:text-[2.4rem]">
                  Khám phá Top Win &amp;
                  <br />
                  <span className="whitespace-nowrap text-accent underline decoration-2 underline-offset-[6px]">Sứ mệnh của chúng tôi</span>
                </h2>
                <p className="mt-5 leading-relaxed text-steel-600">
                  Thành lập năm 2007, Top Win là nhà máy vốn Đài Loan tại KCN Sóng Thần 3. Chúng tôi làm chủ toàn bộ chuỗi
                  sản xuất — khuôn, dập, nhựa, gỗ, dây sắt, đánh bóng, đóng gói — để giao những sản phẩm gia dụng ổn định,
                  đúng chuẩn cho đối tác toàn cầu.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { value: "2007", label: "Năm thành lập", icon: <path d="M4 21V9l8-6 8 6v12M9 21v-6h6v6" /> },
                { value: "200+", label: "Máy móc & thiết bị", icon: <path d="M4 20V10m5 10V6m5 14v-8m5 8V4M2 20h20" /> },
              ].map((st) => (
                <div key={st.label} className="flex items-center justify-between gap-2 rounded-md bg-steel-100 px-4 py-5 sm:px-7 sm:py-6">
                  <div>
                    <div className="text-3xl font-bold text-navy-950 sm:text-4xl">{st.value}</div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-accent">{st.label}</div>
                  </div>
                  <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0 text-accent sm:h-11 sm:w-11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {st.icon}
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-md shadow-xl">
            <Image src="/images/bua/image7.webp" alt="Vận hành máy tại nhà máy Top Win" fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
