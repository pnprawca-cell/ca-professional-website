import type { Metadata } from "next";
import { Anuphan } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company, siteUrl } from "@/content/site";

const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

const siteTitle = `${company.shortName} — สอบบัญชี และซอฟต์แวร์สำหรับสำนักงานบัญชี`;
const siteDescription =
  "บริการสอบบัญชีโดยผู้สอบบัญชีรับอนุญาต พร้อม AuditFlow (Audit Platform) และ PractiFlow (Practice Management) สำหรับสำนักงานบัญชียุคใหม่";

export const metadata: Metadata = {
  // ทำให้ field ที่ต้องใช้ URL เต็ม (og:image, og:url, canonical) ใช้ path สัมพัทธ์ได้
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${company.shortName}`,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "/",
    siteName: company.shortName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  // รูป og:image / twitter:image มาจาก app/opengraph-image.tsx อัตโนมัติ (file-based metadata)
};

/**
 * Structured data ระดับองค์กร — ช่วยให้ Google เข้าใจว่าเว็บนี้คือสำนักงานสอบบัญชี
 * ข้อมูลทั้งหมดดึงจาก content/site.ts เพื่อไม่ให้ข้อมูลสองที่ไม่ตรงกัน
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: company.nameTh,
  alternateName: [company.nameEn, company.shortName],
  legalName: company.nameEn,
  url: siteUrl,
  email: company.email,
  slogan: company.tagline,
  description: siteDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: "กรุงเทพมหานคร",
    addressCountry: "TH",
  },
  areaServed: {
    "@type": "Country",
    name: "ประเทศไทย",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${anuphan.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {/* fixed + z สูงกว่า header (z-50) เพราะ header เป็น sticky ที่สร้าง stacking context ของตัวเอง */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:border focus:border-line focus:bg-card focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-foreground"
        >
          ข้ามไปเนื้อหาหลัก
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
