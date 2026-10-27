import Image from "next/image";
import type { Img } from "@/lib/site";

/** Hiển thị ảnh thật, hoặc khung giữ chỗ kèm keyword khi ảnh còn thiếu. */
export function Photo({
  img,
  sizes,
  className = "",
  preload = false,
}: {
  img: Img;
  sizes: string;
  className?: string;
  preload?: boolean;
}) {
  if (img.src) {
    return (
      <div className={`relative overflow-hidden bg-steel-100 ${className}`}>
        <Image src={img.src} alt={img.alt} fill sizes={sizes} preload={preload} className="object-cover" />
      </div>
    );
  }
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-steel-800 p-4 text-center text-steel-200 placeholder-stripes ${className}`}
    >
      <span className="rounded bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
        Cần ảnh
      </span>
      <span className="font-mono text-xs leading-snug">{img.keyword}</span>
    </div>
  );
}
