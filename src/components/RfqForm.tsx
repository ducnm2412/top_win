"use client";

import { useState } from "react";
import { PRODUCTS } from "@/lib/site";

const field =
  "w-full border border-steel-300 bg-white px-3 py-2.5 text-sm text-navy-950 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20";

export function RfqForm() {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState("");

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-white p-10 text-center">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-accent text-2xl text-white">✓</div>
        <h3 className="mt-4 font-display text-2xl font-bold uppercase text-navy-950">Đã nhận yêu cầu</h3>
        <p className="mt-2 text-sm text-steel-600">Bộ phận kinh doanh sẽ phản hồi báo giá trong 24 giờ làm việc.</p>
      </div>
    );
  }

  return (
    <form
      // TODO: demo — chưa nối backend gửi email
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid min-w-0 grid-cols-1 gap-4 bg-white p-5 shadow-xl sm:grid-cols-2 sm:p-8"
    >
      <label className="space-y-1.5">
        <span className="text-xs font-semibold uppercase tracking-wide text-steel-600">Họ tên *</span>
        <input required className={field} />
      </label>
      <label className="space-y-1.5">
        <span className="text-xs font-semibold uppercase tracking-wide text-steel-600">Công ty *</span>
        <input required className={field} />
      </label>
      <label className="space-y-1.5">
        <span className="text-xs font-semibold uppercase tracking-wide text-steel-600">Email *</span>
        <input required type="email" className={field} />
      </label>
      <label className="space-y-1.5">
        <span className="text-xs font-semibold uppercase tracking-wide text-steel-600">Quốc gia</span>
        <input className={field} />
      </label>
      <label className="space-y-1.5">
        <span className="text-xs font-semibold uppercase tracking-wide text-steel-600">Nhóm sản phẩm *</span>
        <select required className={field} defaultValue="">
          <option value="" disabled>
            Chọn sản phẩm
          </option>
          {PRODUCTS.map((p) => (
            <option key={p.title}>{p.title}</option>
          ))}
          <option>Khác</option>
        </select>
      </label>
      <label className="space-y-1.5">
        <span className="text-xs font-semibold uppercase tracking-wide text-steel-600">Số lượng dự kiến *</span>
        <input required placeholder="VD: 10.000 pcs / đơn" className={field} />
      </label>
      <label className="space-y-1.5 sm:col-span-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-steel-600">Mô tả yêu cầu</span>
        <textarea rows={4} placeholder="Vật liệu, kích thước, quy cách đóng gói, thị trường..." className={field} />
      </label>
      <label className="flex cursor-pointer flex-wrap items-center gap-3 border-2 border-dashed border-steel-300 p-4 transition hover:border-accent sm:col-span-2">
        <span className="bg-navy-900 px-3 py-1.5 text-xs font-semibold uppercase text-white">Đính kèm bản vẽ</span>
        <span className="truncate text-sm text-steel-600">{fileName || "PDF, DWG, STEP, JPG — tối đa 20MB"}</span>
        <input
          type="file"
          accept=".pdf,.dwg,.dxf,.step,.stp,.jpg,.jpeg,.png"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
        />
      </label>
      <button
        type="submit"
        className="bg-accent px-6 py-3.5 font-display text-lg font-bold uppercase tracking-wider text-white transition hover:bg-accent-600 sm:col-span-2"
      >
        Gửi yêu cầu báo giá
      </button>
    </form>
  );
}
