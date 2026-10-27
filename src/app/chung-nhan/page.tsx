import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Certification } from "@/components/Certification";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = { title: "Chứng nhận — Top Win", description: "Hệ thống quản lý chất lượng ISO 9001:2015" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Chứng nhận" title="Hệ thống quản lý chất lượng ISO 9001:2015" />
      <Certification />
      <CtaBanner />
    </>
  );
}
