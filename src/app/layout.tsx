import type { Metadata } from "next";
import { Barlow_Condensed, Be_Vietnam_Pro } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import "./globals.css";

const body = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const heading = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Top Win — Nhà máy sản xuất OEM đồ gia dụng nhà bếp tại Việt Nam",
  description:
    "Top Win: nhà máy ISO 9001:2015 thành lập 2007 tại KCN Sóng Thần 3, Bình Dương. 7 bộ phận khép kín, 200+ máy móc, sản xuất OEM dụng cụ nhà bếp, dây sắt, gỗ, nhựa, khuôn & dập kim loại.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${body.variable} ${heading.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
