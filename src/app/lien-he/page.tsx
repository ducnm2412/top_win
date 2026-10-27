import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { QuoteSection } from "@/components/QuoteSection";

export const metadata: Metadata = { title: "Liên hệ — Top Win", description: "Yêu cầu báo giá & liên hệ nhà máy" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Liên hệ" title="Yêu cầu báo giá & liên hệ nhà máy" />
      <QuoteSection />
    </>
  );
}
