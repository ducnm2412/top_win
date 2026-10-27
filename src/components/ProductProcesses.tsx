"use client";

import { useState } from "react";
import Image from "next/image";

import { PRODUCT_PROCESSES as PRODUCTS } from "@/lib/products";

export function ProductProcesses() {
  const [active, setActive] = useState(PRODUCTS[0].key);
  const product = PRODUCTS.find((p) => p.key === active)!;

  return (
    <div className="mt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Ví dụ thực tế</p>
          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Quy trình theo từng sản phẩm</h3>
        </div>
        <p className="max-w-md text-sm text-steel-300"><span className="mr-1 text-accent lg:hidden">Lướt ngang →</span>Trích từ hồ sơ quy trình & tiêu chuẩn nghiệm hàng nội bộ của nhà máy.</p>
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-1" role="tablist">
        {PRODUCTS.map((p) => (
          <button
            key={p.key}
            type="button"
            role="tab"
            aria-selected={p.key === active}
            onClick={() => setActive(p.key)}
            className={`shrink-0 border-b-4 px-5 py-3 text-left transition ${
              p.key === active ? "border-accent bg-accent text-white" : "border-transparent bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            <span className="block text-sm font-semibold">{p.name}</span>
            <span className={`block text-xs ${p.key === active ? "text-white/80" : "text-steel-300"}`}>{p.tag}</span>
          </button>
        ))}
      </div>

      <ol key={product.key} className="-mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0">
        {product.stages.map((s, i) => (
          <li key={s.title} className="hero-up group w-[75%] shrink-0 snap-start overflow-hidden bg-white sm:w-[45%] lg:w-auto shadow-sm ring-1 ring-steel-200" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="relative aspect-[4/3] overflow-hidden bg-steel-100">
              <Image src={s.img} alt={s.title} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute left-0 top-0 bg-accent px-2.5 py-1 font-display text-sm font-bold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="border-t-4 border-navy-900 p-4">
              <h4 className="font-semibold text-navy-950">{s.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-steel-600">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
