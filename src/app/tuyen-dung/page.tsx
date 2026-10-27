import type { Metadata } from "next";
import Image from "next/image";
import { CONTACT } from "@/lib/site";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = { title: "Tuyển dụng — Top Win" };

// TODO: vị trí mẫu — cập nhật theo nhu cầu tuyển dụng thực tế của khách
const JOBS = [
  { title: "Công nhân vận hành máy dập", dept: "Bộ phận Dập", type: "Toàn thời gian" },
  { title: "Kỹ thuật viên khuôn mẫu", dept: "Bộ phận Khuôn", type: "Toàn thời gian" },
  { title: "Nhân viên QC", dept: "Quản lý chất lượng", type: "Toàn thời gian" },
  { title: "Nhân viên kinh doanh xuất khẩu", dept: "Văn phòng", type: "Toàn thời gian" },
];

export default function Careers() {
  return (
    <>
      <section data-noreveal className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-32 text-white">
        <Image src="/images/nha-may.webp" alt="Nhà máy Top Win" fill preload unoptimized sizes="100vw" className="-z-10 object-cover opacity-35" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Tuyển dụng</p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl font-extrabold uppercase leading-none sm:text-6xl">
            Cùng xây dựng nhà máy chuẩn xuất khẩu
          </h1>
          <p className="mt-6 max-w-xl text-steel-200">
            Môi trường sản xuất chuyên nghiệp theo tiêu chuẩn Đài Loan, tại KCN Sóng Thần 3, Bình Dương.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="divide-y divide-steel-200 bg-white shadow-sm">
          {JOBS.map((j) => (
            <div key={j.title} className="flex flex-wrap items-center justify-between gap-4 p-6">
              <div>
                <h2 className="font-display text-2xl font-bold uppercase">{j.title}</h2>
                <p className="mt-1 text-sm text-steel-600">
                  {j.dept} · {j.type} · Bình Dương
                </p>
              </div>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="bg-navy-900 px-5 py-2.5 text-sm font-semibold uppercase text-white transition hover:bg-accent"
              >
                Ứng tuyển
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-steel-600">
          Nộp hồ sơ trực tiếp tại nhà máy: {CONTACT.address} — hoặc gọi {CONTACT.phone}.
        </p>
      </section>
      <CtaBanner />
    </>
  );
}
