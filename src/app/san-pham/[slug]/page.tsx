import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { Gallery } from "@/components/Gallery";
import { PRODUCT_GROUPS } from "@/lib/products";
import { CONTACT } from "@/lib/site";

export function generateStaticParams() {
  return PRODUCT_GROUPS.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/san-pham/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const g = PRODUCT_GROUPS.find((x) => x.slug === slug);
  return g ? { title: `${g.title} — Top Win`, description: g.intro } : {};
}

export default async function ProductGroupPage({ params }: PageProps<"/san-pham/[slug]">) {
  const { slug } = await params;
  const g = PRODUCT_GROUPS.find((x) => x.slug === slug);
  if (!g) notFound();
  const others = PRODUCT_GROUPS.filter((x) => x.slug !== slug);

  return (
    <>
      {/* đầu trang: chữ + ảnh sản phẩm */}
      <section data-noreveal className="relative isolate overflow-hidden pb-16 pt-32 text-white">
        <div className="navy-texture absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Link href="/san-pham" className="text-sm text-steel-300 hover:text-white">
              ← Tất cả sản phẩm
            </Link>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-accent">Sản phẩm OEM</p>
            <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[1.05] sm:text-6xl">{g.title}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-steel-200">{g.intro}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <li key={it} className="bg-white/10 px-3 py-1.5 text-sm font-medium text-white">
                  {it}
                </li>
              ))}
            </ul>
            <a href="/lien-he#bao-gia" className="mt-8 inline-block bg-accent px-6 py-3.5 font-semibold uppercase tracking-wide transition hover:bg-accent-600">
              Yêu cầu báo giá
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10">
            {g.videos ? (
              <video src={g.videos[0]} autoPlay muted loop playsInline controls preload="metadata" className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <Image src={g.hero} alt={g.title} fill preload sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            )}
          </div>
        </div>
      </section>

      {/* thông số */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-navy-950">Thông tin sản xuất</h2>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {g.specs.map((sp) => (
              <div key={sp.label} className="border-l-4 border-accent bg-steel-100 p-5">
                <dt className="text-xs font-bold uppercase tracking-widest text-steel-600">{sp.label}</dt>
                <dd className="mt-2 font-semibold text-navy-950">{sp.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>


      {/* quy trình */}
      <section className="relative isolate py-20 text-white">
        <div className="navy-texture absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Quy trình</p>
          <h2 className="mt-3 text-3xl font-bold">Quy trình sản xuất {g.title.toLowerCase()}</h2>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {g.stages.map((s, i) => (
              <li key={s.title} className="overflow-hidden rounded-lg bg-navy-950/60 ring-1 ring-white/10">
                <div className="relative aspect-[4/3]">
                  <Image src={s.img} alt={s.title} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" />
                  <span className="absolute left-0 top-0 bg-accent px-2.5 py-1 font-display text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-steel-300">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* quy trình chi tiết + tiêu chí + đóng gói (trích hồ sơ quy trình) */}
      {(g.detail || g.tests || g.packing || g.rules) && (
        <section className="bg-steel-100 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr]">
            {g.detail && (
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Hồ sơ quy trình</p>
                <h2 className="mt-3 text-3xl font-bold text-navy-950">Quy trình chi tiết từng công đoạn</h2>
                <div className="mt-8 space-y-3">
                  {g.detail.map((d, i) => (
                    <details key={d.name} open={i === 0} className="group rounded-lg bg-white shadow-sm ring-1 ring-steel-200 open:ring-accent">
                      <summary className="flex cursor-pointer list-none items-center gap-4 p-5">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-navy-900 font-display font-bold text-white group-open:bg-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 font-semibold text-navy-950">{d.name}</span>
                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-steel-600 transition group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </summary>
                      <ol className="list-decimal space-y-2 px-5 pb-5 pl-[4.5rem] marker:font-semibold marker:text-accent">
                        {d.steps.map((st) => (
                          <li key={st} className="text-sm leading-relaxed text-steel-800">
                            {st}
                          </li>
                        ))}
                      </ol>
                    </details>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {/* hộp báo giá nhanh, dính theo khi cuộn */}
              <div className="rounded-lg bg-accent p-6 text-white shadow-lg shadow-accent/30">
                <h3 className="text-xl font-bold">Cần báo giá {g.title.toLowerCase()}?</h3>
                <p className="mt-2 text-sm text-white/90">Gửi mẫu, bản vẽ và số lượng — phản hồi trong 24 giờ làm việc.</p>
                <a href="/lien-he#bao-gia" className="mt-5 flex items-center justify-between rounded-md bg-white px-5 py-3 font-semibold text-navy-950 transition hover:bg-navy-950 hover:text-white">
                  Yêu cầu báo giá
                  <span aria-hidden>→</span>
                </a>
                <a href={`tel:${CONTACT.phoneRaw}`} className="mt-3 block text-center text-sm text-white/90 hover:text-white">
                  hoặc gọi {CONTACT.phone}
                </a>
              </div>
              {g.tests && (
                <div className="rounded-lg bg-navy-900 p-6 text-white">
                  <h3 className="text-xl font-bold">Tiêu chí kiểm tra</h3>
                  <ul className="mt-4 space-y-4">
                    {g.tests.map((t) => (
                      <li key={t.name}>
                        <p className="font-semibold text-accent">{t.name}</p>
                        <p className="mt-1 text-sm text-steel-300">{t.rule}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {g.rules && (
                <div className="rounded-lg bg-navy-900 p-6 text-white">
                  <h3 className="text-xl font-bold">Tiêu chuẩn áp dụng mọi công đoạn</h3>
                  <ul className="mt-4 space-y-3">
                    {g.rules.map((r) => (
                      <li key={r} className="flex gap-3 text-sm text-steel-200">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {g.packing && (
                <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-steel-200">
                  <h3 className="text-xl font-bold text-navy-950">Quy cách đóng gói</h3>
                  <ol className="mt-4 space-y-3">
                    {g.packing.map((pk, i) => (
                      <li key={pk} className="flex gap-3 text-sm text-steel-800">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-xs font-bold text-white">{i + 1}</span>
                        {pk}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* QC + thư viện ảnh */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-3xl font-bold text-navy-950">Kiểm soát chất lượng</h2>
            <p className="mt-3 text-steel-600">Các lỗi được kiểm tra và loại bỏ tại từng công đoạn:</p>
            <ul className="mt-6 space-y-3">
              {g.qc.map((q) => (
                <li key={q} className="flex gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center bg-navy-900 text-xs text-accent">✓</span>
                  <span className="text-navy-950">{q}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-950">Hình ảnh thực tế</h2>
            <Gallery images={g.gallery} alt={g.title} />
          </div>
        </div>
      </section>

      {/* nhóm khác — lướt ngang, góc vuông, kiểu công nghiệp */}
      <section className="bg-steel-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4 border-b-2 border-navy-950 pb-4">
            <h2 className="text-2xl font-bold text-navy-950">Nhóm sản phẩm khác</h2>
            <span className="shrink-0 text-sm text-steel-600">Lướt ngang →</span>
          </div>
          <div className="-mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 [scrollbar-width:thin]">
            {others.map((o, i) => (
              <Link
                key={o.slug}
                href={`/san-pham/${o.slug}`}
                className="group flex w-[78%] shrink-0 snap-start flex-col border-l-4 border-accent bg-white transition hover:-translate-y-1 hover:shadow-xl sm:w-[46%] lg:w-[calc((100%-3rem)/4)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-navy-950">
                  <Image src={o.hero} alt={o.title} fill sizes="(min-width: 1024px) 25vw, 80vw" className="object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
                  <span className="absolute left-0 top-0 bg-navy-950 px-2.5 py-1 font-display text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-bold uppercase leading-tight text-navy-950">{o.title}</h3>
                  <p className="mt-1 flex-1 text-sm text-steel-600">{o.short}</p>
                  <span className="mt-5 flex items-center justify-between bg-navy-950 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition group-hover:bg-accent">
                    Xem sản phẩm
                    <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
