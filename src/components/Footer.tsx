import Image from "next/image";
import Link from "next/link";
import { CONTACT, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-steel-300">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 sm:py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.3fr]">
        <div className="col-span-2 lg:col-span-1">
          <Image src="/images/logo.webp" alt="Top Win" width={379} height={240} className="h-12 w-auto sm:h-16" />
          <p className="mt-4 hidden max-w-md text-sm leading-relaxed sm:block">
            Nhà máy sản xuất OEM đồ gia dụng nhà bếp tại Bình Dương, Việt Nam. Ban lãnh đạo Đài Loan, quản lý chất lượng
            ISO 9001:2015, 7 bộ phận sản xuất khép kín.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-steel-400">
            {CONTACT.legalName} · {CONTACT.legalNameEn}
            <br />
            MST: {CONTACT.taxId} · Thành lập {CONTACT.founded}
          </p>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">Liên kết</h3>
          <ul className="mt-3 space-y-1.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">Liên hệ</h3>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li className="hidden sm:list-item">{CONTACT.address}</li>
            <li>
              <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white">
                Tel / Zalo: <span className="whitespace-nowrap">{CONTACT.phone}</span>
              </a>
            </li>
            <li>
              {/* nếu thiếu chỗ thì xuống dòng tại dấu @, không cắt giữa chữ */}
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                {CONTACT.email.split("@")[0]}
                <wbr />@{CONTACT.email.split("@")[1]}
              </a>
            </li>
            <li>
              <a href={CONTACT.mapsLink} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                Xem trên Google Maps →
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">Bản đồ</h3>
          <p className="mt-3 text-sm sm:hidden">{CONTACT.address}</p>
          <div className="mt-3 h-36 sm:h-44 overflow-hidden rounded-md ring-1 ring-white/10">
            <iframe
              title="Bản đồ nhà máy Top Win"
              src={CONTACT.mapsEmbed}
              className="h-full w-full grayscale-[30%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-steel-400">
        © 2026 Top Win. All rights reserved.
      </div>
    </footer>
  );
}
