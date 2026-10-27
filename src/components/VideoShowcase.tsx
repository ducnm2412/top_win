// TODO: video tham khảo tải từ YouTube (không quay tại Top Win, chưa rõ bản quyền).
// Thay bằng video quay tại nhà máy trước khi đưa web lên chạy thật.
const VIDEO = "/videos/sheet-metal-stamping.mp4";

export function VideoShowcase() {
  return (
    <section id="video" className="relative isolate py-20 lg:py-24">
      <div className="navy-texture absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Công nghệ dập & gia công kim loại</h2>
          <p className="max-w-md text-steel-300">
            Với 40+ máy dập và khuôn tự chế tại xưởng, Top Win đáp ứng đơn hàng OEM số lượng lớn với độ chính xác ổn định.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl bg-navy-950 shadow-2xl ring-1 ring-white/10">
          <video src={VIDEO} controls autoPlay muted loop playsInline preload="metadata" className="aspect-video w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
