import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProductCatalog } from "@/components/ProductCatalog";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = { title: "Sản phẩm — Top Win", description: "Danh mục sản phẩm OEM theo nhóm" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Sản phẩm" title="Danh mục sản phẩm OEM theo nhóm" />
      <ProductCatalog />
      <CtaBanner />
    </>
  );
}
