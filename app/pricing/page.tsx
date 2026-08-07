import Link from "next/link";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { PageHero, Section, CTAButton, CTABanner, CheckItem, PlanLedger, PlanRow } from "@/components/ui";
import { SubscriptionPricing, type SubPlan } from "@/components/Pricing";
import { products } from "@/content/site";

export const metadata: Metadata = {
  title: "ราคา",
  description: "ราคาบริการสอบบัญชี, AuditFlow และ PractiFlow · ขอใบเสนอราคาหรือนัด demo ได้ฟรี",
};

/**
 * ราคาทั้งหมดคัดจาก one-pager ฉบับลูกค้า (ส.ค. 2569):
 *   AuditFlow  — Strategy/Audit platform/Gate0_OnePager_CA_Audit_Platform.pdf
 *   PractiFlow — Strategy/PractiFlow_OnePager_TH.pdf
 * ทุกตัวเลขเป็นราคาก่อน VAT 7% ตามที่ one-pager ระบุ
 * หมายเหตุ: PLAN_PRICING ใน repo Audit-platform ยังเป็นราคาชุดเก่า (690/1,990/3,490)
 * ถ้าจะแก้ราคาที่นี่ ต้องไปแก้ที่ระบบออกใบแจ้งหนี้ให้ตรงกันด้วย
 *
 * ราคาเก็บเป็นตัวเลขล้วน เพื่อให้สวิตช์รายเดือน/รายปีคำนวณส่วนต่างและค่าเฉลี่ยต่อเดือนได้เอง
 */
const auditflowOnline: SubPlan[] = [
  { name: "Free", scope: "1 บริษัท · เอกสารที่ส่งออกมี watermark", monthly: 0, yearly: 0 },
  { name: "Starter", scope: "ไม่เกิน 10 บริษัท", monthly: 590, yearly: 5900 },
  {
    name: "Pro",
    scope: "ไม่เกิน 50 บริษัท",
    monthly: 2190,
    yearly: 21900,
    lead: true,
    fit: "เหมาะกับสำนักงานขนาดกลางที่ตรวจหลักสิบบริษัทต่อปี",
    reasons: [
      "ผู้ใช้ไม่จำกัดจำนวน ทีมกี่คนก็เข้าใช้ได้ ไม่มีค่าหัวเพิ่ม",
      "ครบทั้งกระดาษทำการ Lead Schedule Materiality Cal Tax และงบการเงิน NPAE",
      "เอกสารที่ส่งออกไม่มี watermark ใช้ยื่นงานจริงได้",
    ],
  },
  { name: "Firm", scope: "ไม่เกิน 100 บริษัท", monthly: 3590, yearly: 35900 },
];

const auditflowOffline = [
  { name: "S", scope: "10 บริษัท", first: "฿12,900", update: "฿1,935" },
  { name: "M", scope: "50 บริษัท", first: "฿29,900", update: "฿4,485" },
  { name: "L", scope: "100 บริษัท", first: "฿49,900", update: "฿7,485" },
];

const practiflowPlans: SubPlan[] = [
  { name: "Free", scope: "ไม่เกิน 5 ราย", monthly: 0, yearly: 0 },
  { name: "S · เริ่มต้น", scope: "ไม่เกิน 30 ราย", monthly: 590, yearly: 5900 },
  {
    name: "M · มาตรฐาน",
    scope: "ไม่เกิน 120 ราย",
    monthly: 1490,
    yearly: 14900,
    lead: true,
    badge: "ยอดนิยม",
    fit: "เหมาะกับสำนักงานที่ดูแลลูกค้าหลักร้อยราย",
    reasons: [
      "ผู้ใช้ไม่จำกัดจำนวน เพิ่มพนักงานกี่คนก็ไม่มีค่าใช้จ่ายเพิ่ม",
      "ติดตามงาน deadline และใบแจ้งหนี้ของลูกค้าทุกรายในหน้าจอเดียว",
      "ใช้งานผ่านเว็บ ไม่ต้องติดตั้งอะไรบนเครื่อง",
    ],
  },
  { name: "L · สำนักงาน", scope: "ไม่เกิน 300 ราย", monthly: 2990, yearly: 29900 },
];

function EditionHeading({ title, note }: { title: string; note: string }) {
  return (
    <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="max-w-[52ch] text-[15px] text-muted">{note}</p>
    </div>
  );
}

function Notes({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-6 max-w-[68ch] space-y-2 text-sm leading-relaxed text-muted">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function MoreLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="inline-block text-sm font-medium text-accent-ink underline-offset-4 hover:underline"
    >
      {children} →
    </Link>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="ราคาตรงไปตรงมา ตามขนาดงานจริง"
        description="ทุกแผนคิดตามปริมาณงาน ไม่คิดตามจำนวนผู้ใช้ ทีมกี่คนก็เข้าใช้ได้"
      />

      {/* งานสอบบัญชี — จังหวะแรก: ราคาเดียว ตัวใหญ่ พร้อมหลักฐานข้าง ๆ */}
      <Section title="งานสอบบัญชี" description="เสนอราคาตามขนาดและความซับซ้อนของกิจการ">
        <div className="grid gap-8 rounded-2xl border border-line bg-card p-6 md:grid-cols-[auto_minmax(0,1fr)] md:gap-14 md:p-9">
          <div>
            <p className="text-sm font-medium text-muted">เริ่มต้น</p>
            <p className="mt-1.5 text-price font-semibold tabular-nums">฿4,500</p>
            <p className="mt-2.5 max-w-[24ch] text-[15px] leading-relaxed text-muted">
              ต่อการตรวจสอบงบการเงิน 1 รอบปีบัญชี
            </p>
            <div className="mt-7">
              <CTAButton href="/contact">ขอใบเสนอราคา</CTAButton>
            </div>
          </div>
          <ul className="grid gap-3.5 self-center">
            <CheckItem>ประเมินจากประเภทธุรกิจ รายได้ และจำนวนรายการ</CheckItem>
            <CheckItem>แจ้งราคาชัดเจนก่อนเริ่มงาน ไม่มีบวกเพิ่มภายหลัง</CheckItem>
            <CheckItem>รับใบเสนอราคาภายใน 2 วันทำการ</CheckItem>
            <CheckItem>รวมรายงานผู้สอบบัญชีและงบการเงินฉบับยื่น DBD</CheckItem>
          </ul>
        </div>
      </Section>

      {/* AuditFlow — จังหวะสอง: ทางแยก Online/Offline แล้วปิดด้วยบล็อกหมึกเข้ม */}
      <Section
        title={`${products.auditflow.name} · ${products.auditflow.category}`}
        description="คิดตามจำนวนบริษัทที่เปิดแฟ้มตรวจในระบบ ไม่คิดตามจำนวนผู้ใช้ ทีมกี่คนก็เข้าใช้ได้"
        tint
      >
        <p className="-mt-4 mb-9 max-w-[64ch] text-[15px] leading-relaxed text-muted">
          เลือกได้สองแบบตามนโยบายข้อมูลของสำนักงาน:{" "}
          <strong className="font-semibold text-foreground">Online</strong> ·{" "}
          <strong className="font-semibold text-foreground">Offline</strong>
        </p>

        <EditionHeading title="Online" note="ใช้ผ่าน cloud ไม่ต้องติดตั้ง" />
        <SubscriptionPricing plans={auditflowOnline} />

        <div className="mt-14">
          <EditionHeading
            title="Offline"
            note="ติดตั้งบนเครื่องของสำนักงาน จ่ายครั้งเดียวเป็นเจ้าของ ข้อมูลไม่ออกไปไหน"
          />
          <PlanLedger>
            {auditflowOffline.map((plan) => (
              <PlanRow
                key={plan.name}
                name={plan.name}
                scope={plan.scope}
                amount={plan.first}
                unit="ปีแรก"
                sub={`แล้วปีละ ${plan.update}`}
              />
            ))}
          </PlanLedger>
        </div>

        <Notes
          items={[
            <>
              ค่าอัปเดตรายปีของรุ่น Offline คือ template ตามมาตรฐาน TSA และ NPAE ปีล่าสุด
              <span className="block">ไม่ต่อก็ใช้ต่อได้ด้วย template ปีเดิม</span>
            </>,
            "ย้ายจากรุ่น Online มา Offline นำค่าบริการที่จ่ายไปแล้วมาหักได้ 50%",
            "ราคาทั้งหมดยังไม่รวม VAT 7%",
          ]}
        />

        <div className="mt-6">
          <MoreLink href="/products/auditflow">
            ดูฟีเจอร์ AuditFlow ทั้งหมด
          </MoreLink>
        </div>

        <div className="mt-12 rounded-2xl bg-foreground px-6 py-8 md:px-9">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-12">
            <div>
              <p className="text-xl font-semibold tracking-tight text-background md:text-2xl">
                โปรโมชันเปิดตัว เปิดรับ Early Adopter{" "}
                <span className="tabular-nums">10</span> สำนักงานแรก
              </p>
              <p className="mt-2 max-w-[54ch] text-[15px] leading-relaxed text-background/70">
                AuditFlow เปิดให้ใช้งานแล้ววันนี้ · แจ้งเราแล้วเราเปิดบัญชีแผน Free ให้ หรือคุยกับเราเพื่อดูระบบจริงก่อน
              </p>
            </div>
            <CTAButton href="/contact" variant="accent">
              นัด demo AuditFlow
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* PractiFlow — จังหวะสาม: แผนนำพร้อมปุ่มและคำรับประกันการทดลองใช้ */}
      <Section
        title={`${products.practiflow.name} · ${products.practiflow.category}`}
        description="คิดตามจำนวนลูกค้าที่สำนักงานดูแล ไม่คิดตามจำนวนคน เพิ่มพนักงานกี่คนก็ไม่มีค่าใช้จ่ายเพิ่ม"
      >
        <SubscriptionPricing
          plans={practiflowPlans}
          cta={{
            href: "/contact",
            label: "ขอ demo PractiFlow",
            note: "ทดลองใช้ฟรี 30 วัน ครบทุกฟีเจอร์ ไม่ต้องผูกบัตร",
          }}
        />

        <Notes
          items={[
            "เกิน 300 ราย คิดเพิ่มรายละ ฿10 ต่อเดือน · ทุกแพ็กเกจใช้งานผ่านเว็บ ผู้ใช้ไม่จำกัดจำนวน",
            "ค่าแพ็กเกจ LINE OA สำนักงานสมัครในชื่อตัวเองและจ่ายตรงกับ LINE ตามการใช้จริง เริ่มจากแพ็กฟรี 300 ข้อความต่อเดือน เราไม่บวกเพิ่มและไม่เก็บผ่าน",
            "ราคาทั้งหมดยังไม่รวม VAT 7%",
          ]}
        />

        <div className="mt-6">
          <MoreLink href="/products/practiflow">
            ดูฟีเจอร์ PractiFlow ทั้งหมด
          </MoreLink>
        </div>
      </Section>

      <CTABanner
        title="ไม่แน่ใจว่าแผนไหนเหมาะกับสำนักงานคุณ?"
        description="บอกจำนวนลูกค้าที่ดูแลและขนาดทีม เราช่วยประเมินให้ได้ภายในวันเดียว ไม่มีข้อผูกมัด"
        buttonLabel="ปรึกษาฟรี"
        buttonHref="/contact"
      />
    </>
  );
}
