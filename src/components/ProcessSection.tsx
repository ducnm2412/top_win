import { Eyebrow, H2 } from "@/components/ui";
import { ProcessJourney } from "@/components/ProcessJourney";
import { ProductProcesses } from "@/components/ProductProcesses";

export function ProcessSection() {
  return (
    <>
      {/* PROCESS */}
      <section id="quy-trinh" className="relative isolate overflow-x-clip py-24 text-white">
        <div className="navy-texture absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Eyebrow light>Dây chuyền sản xuất</Eyebrow>
          <H2 light>Quy trình sản xuất & kiểm soát chất lượng</H2>
          <ProcessJourney />

          <ProductProcesses />
        </div>
      </section>
    </>
  );
}
