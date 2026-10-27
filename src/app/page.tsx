import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TargetCustomers } from "@/components/TargetCustomers";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Capability } from "@/components/Capability";
import { ProductCatalog } from "@/components/ProductCatalog";
import { ProcessSection } from "@/components/ProcessSection";
import { Certification } from "@/components/Certification";
import { QuoteSection } from "@/components/QuoteSection";
import { CtaBanner } from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <TargetCustomers />

      <VideoShowcase />

      <Capability />

      <ProductCatalog />

      <ProcessSection />

      <Certification />

      <CtaBanner />

      <QuoteSection />
    </>
  );
}
