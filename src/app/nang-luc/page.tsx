import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Capability } from "@/components/Capability";
import { About } from "@/components/About";
import { TargetCustomers } from "@/components/TargetCustomers";
import { VideoShowcase } from "@/components/VideoShowcase";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = { title: "Năng lực nhà máy — Top Win", description: "7 bộ phận khép kín · 200+ máy móc" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Năng lực nhà máy" title="7 bộ phận khép kín · 200+ máy móc" />
      <About />
      <TargetCustomers />
      <Capability />
      <VideoShowcase />
      <CtaBanner />
    </>
  );
}
