import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProcessSection } from "@/components/ProcessSection";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = { title: "Quy trình & QC — Top Win", description: "Quy trình sản xuất & kiểm soát chất lượng" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Quy trình & QC" title="Quy trình sản xuất & kiểm soát chất lượng" />
      <ProcessSection />
      <CtaBanner />
    </>
  );
}
