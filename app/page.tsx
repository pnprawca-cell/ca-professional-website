import Link from "next/link";
import { Card, CTAButton, CTABanner, CheckItem, Section } from "@/components/ui";
import ProductPeek from "@/components/ProductPeek";
import { company, products } from "@/content/site";

const trustSignals = [
  "ผู้สอบบัญชีรับอนุญาต (CPA)",
  "ตามมาตรฐาน TFRS for NPAEs · TSA",
  "แบบฟอร์มมาตรฐาน DBD",
  "ใช้กับงานจริงทุกสัปดาห์",
];

export default function Home() {
  return (
    <>
      {/* Hero — asymmetric: the claim on the left, the proof (product) on the right */}
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-14 md:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <p className="mb-5 inline-block rounded-full bg-accent-soft px-4 py-1.5 text-sm font-medium text-accent-ink">
              {company.tagline}
            </p>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-balance md:text-5xl lg:text-6xl">
              งานสอบบัญชีคุณภาพ และซอฟต์แวร์ที่เข้าใจสำนักงานบัญชี
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              เราเป็นสำนักงานสอบบัญชีที่ใช้เทคโนโลยีของตัวเองในงานจริงทุกวัน
              แล้วเปิดให้สำนักงานอื่นใช้ด้วย — ทั้งแบบ Online และ Offline
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CTAButton href="/contact">ปรึกษาฟรี</CTAButton>
              <CTAButton href="/products/auditflow" variant="secondary">
                ดูผลิตภัณฑ์ของเรา
              </CTAButton>
            </div>
          </div>
          <ProductPeek />
        </div>
      </section>

      {/* Credibility strip — true standards signals, no fabricated proof */}
      <section aria-label="มาตรฐานและความน่าเชื่อถือ" className="border-y border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 text-sm">
          {trustSignals.map((signal) => (
            <span key={signal} className="inline-flex items-center gap-2 text-muted">
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 6.5L5 9l4.5-6" stroke="var(--accent-ink)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium text-foreground">{signal}</span>
            </span>
          ))}
        </div>
      </section>

      {/* 3 เสาหลัก */}
      <Section
        title="เราทำ 3 อย่าง และทำให้ดีที่สุด"
        description="บริการวิชาชีพและซอฟต์แวร์ที่เกิดจากประสบการณ์งานสอบบัญชีจริง"
        tint
      >
        {/* The service is the foundation; the two products are a family that grew from it —
            so lead with a wide service panel, then pair AuditFlow + PractiFlow beneath it. */}
        <div className="space-y-8">
          <Link
            href="/services/audit"
            className="block rounded-2xl border border-line bg-card p-6 transition-shadow hover:shadow-sm md:p-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <p className="text-sm font-medium text-accent-ink">บริการวิชาชีพ</p>
                <h3 className="mt-1.5 text-xl font-semibold tracking-tight md:text-2xl">งานสอบบัญชี</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  ตรวจสอบงบการเงินประจำปีสำหรับ SME ไทย ตามมาตรฐาน TSA
                  โดยผู้สอบบัญชีรับอนุญาต (CPA) — ตรงเวลา สื่อสารรู้เรื่อง
                </p>
                <span className="mt-4 inline-flex text-sm font-medium text-accent-ink">
                  ดูบริการสอบบัญชี →
                </span>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2.5 text-[15px] text-muted md:flex-col md:gap-3 md:border-l md:border-line md:pl-8">
                {["ตรงเวลา ทุกกำหนดส่ง", "TFRS for NPAEs", "สื่อสารรู้เรื่อง ไม่ทิ้งศัพท์"].map((point) => (
                  <li key={point} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-ink" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Link>

          <div>
            <p className="mb-4 text-sm text-muted">
              ซอฟต์แวร์ตระกูล <span className="font-semibold text-foreground">Flow</span> —
              เกิดจากงานตรวจสอบจริง เลือกได้ทั้ง Online และ Offline
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <Card title={`${products.auditflow.name} — Audit Platform`} href="/products/auditflow">
                {products.auditflow.description}
              </Card>
              <Card title={`${products.practiflow.name} — Practice Management`} href="/products/practiflow">
                {products.practiflow.description}
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* ทำไมต้องเรา */}
      <Section
        title="ทำไมสำนักงานบัญชีถึงเชื่อเครื่องมือของเรา"
        description="เพราะเราไม่ใช่บริษัทซอฟต์แวร์ที่เดาว่างานตรวจสอบเป็นยังไง — เราคือคนทำงานตรวจสอบเอง"
      >
        <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">
          <ul className="space-y-4">
            <CheckItem>
              พัฒนาโดยผู้สอบบัญชีรับอนุญาต ที่ใช้เครื่องมือนี้กับงานลูกค้าจริงทุกสัปดาห์
            </CheckItem>
            <CheckItem>
              ออกแบบตามมาตรฐานไทย — TFRS for NPAEs, TSA และแบบฟอร์มที่ DBD ใช้จริง
            </CheckItem>
            <CheckItem>
              มีทั้งรุ่น Online (Cloud) และ Offline (ติดตั้งในเครื่อง) เลือกได้ตามนโยบายข้อมูลของสำนักงาน
            </CheckItem>
          </ul>
          <ul className="space-y-4">
            <CheckItem>
              ภาษาไทยทั้งระบบ พร้อมทีมซัพพอร์ตที่ตอบคำถามเชิงวิชาชีพได้จริง
            </CheckItem>
            <CheckItem>
              ลดเวลางานซ้ำซาก — ยกยอด กระดาษทำการ Cal Tax และหน้ารายงาน สร้างอัตโนมัติ
            </CheckItem>
            <CheckItem>
              เริ่มเล็กได้ ขยายได้ — ตั้งแต่ผู้สอบอิสระคนเดียว จนถึงสำนักงานหลายสิบคน
            </CheckItem>
          </ul>
        </div>
      </Section>

      <CTABanner
        title="อยากเห็นว่าระบบทำงานยังไง?"
        description="นัด demo 30 นาที หรือสอบถามบริการสอบบัญชี — ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด"
        buttonLabel="นัด Demo / ขอใบเสนอราคา"
        buttonHref="/contact"
      />
    </>
  );
}
