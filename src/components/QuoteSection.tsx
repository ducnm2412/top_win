import Image from "next/image";
import { Eyebrow, H2 } from "@/components/ui";
import { RfqForm } from "@/components/RfqForm";
import { CONTACT } from "@/lib/site";

const STEPS = [
  { title: "Gửi yêu cầu", desc: "Bản vẽ, mẫu hoặc mô tả sản phẩm và số lượng." },
  { title: "Báo giá trong 24h", desc: "Kỹ thuật & kinh doanh phân tích, gửi báo giá." },
  { title: "Làm mẫu", desc: "Tự làm khuôn tại xưởng, gửi mẫu duyệt." },
  { title: "Sản xuất & giao hàng", desc: "QC từng công đoạn, đóng gói xuất khẩu." },
];

export function QuoteSection() {
  return (
    <section id="bao-gia" className="relative isolate overflow-hidden py-20 text-white lg:py-24">
      <div className="navy-texture absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div className="flex min-w-0 flex-col">
          <Eyebrow light>Request a Quote</Eyebrow>
          <H2 light>Yêu cầu báo giá</H2>
          <p className="mt-6 text-steel-300">
            Gửi bản vẽ hoặc mô tả sản phẩm, số lượng dự kiến. Đội ngũ kỹ thuật và kinh doanh sẽ phản hồi báo giá trong 24
            giờ làm việc.
          </p>

          {/* quy trình hợp tác */}
          <ol className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 lg:grid-cols-1 lg:gap-y-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex flex-col gap-2 lg:flex-row lg:gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent font-display font-bold lg:h-9 lg:w-9">{i + 1}</span>
                <div>
                  <p className="font-semibold">{s.title}</p>
                  <p className="hidden text-sm text-steel-300 sm:block">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-white/10 pt-6 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-widest text-steel-400">Điện thoại / Zalo</dt>
              <dd className="mt-1 font-display text-xl font-bold sm:text-2xl">
                <a href={`tel:${CONTACT.phoneRaw}`}>{CONTACT.phone}</a>
              </dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-xs uppercase tracking-widest text-steel-400">Email</dt>
              <dd className="mt-1 text-steel-200">
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div className="col-span-2">
              <dt className="text-xs uppercase tracking-widest text-steel-400">Địa chỉ nhà máy</dt>
              <dd className="mt-1 text-steel-200">{CONTACT.address}</dd>
            </div>
          </dl>

          {/* ảnh nhà máy lấp phần còn lại của cột */}
          <div className="relative mt-8 hidden h-48 overflow-hidden rounded-lg ring-1 ring-white/10 lg:block">
            <Image src="/images/nha-may.webp" alt="Nhà máy Top Win" fill sizes="40vw" className="object-cover object-left" />
          </div>
        </div>
        <RfqForm />
      </div>
    </section>
  );
}
