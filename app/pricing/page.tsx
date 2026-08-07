import type { Metadata } from "next";
import { PageHero, Section, CTAButton, CTABanner, CheckItem } from "@/components/ui";
import { products } from "@/content/site";

export const metadata: Metadata = {
  title: "ราคา",
  description: "ราคาบริการสอบบัญชี, AuditFlow และ PractiFlow — ขอใบเสนอราคาหรือนัด demo ได้ฟรี",
};

/**
 * ราคาทั้งหมดคัดจาก one-pager ฉบับลูกค้า (ส.ค. 2569):
 *   AuditFlow  — Strategy/Audit platform/Gate0_OnePager_CA_Audit_Platform.pdf
 *   PractiFlow — Strategy/PractiFlow_OnePager_TH.pdf
 * ทุกตัวเลขเป็นราคาก่อน VAT 7% ตามที่ one-pager ระบุ
 * หมายเหตุ: PLAN_PRICING ใน repo Audit-platform ยังเป็นราคาชุดเก่า (690/1,990/3,490)
 * ถ้าจะแก้ราคาที่นี่ ต้องไปแก้ที่ระบบออกใบแจ้งหนี้ให้ตรงกันด้วย
 */
type Plan = {
  name: string;
  detail: string;
  price: string;
  sub?: string;
  badge?: string;
};

const auditflowOnline: Plan[] = [
  { name: "Free", detail: "1 บริษัท · เอกสารที่ส่งออกมี watermark", price: "฿0" },
  {
    name: "Starter",
    detail: "ไม่เกิน 10 บริษัท",
    price: "฿590 / เดือน",
    sub: "หรือ ฿5,900 / ปี",
  },
  {
    name: "Pro",
    detail: "ไม่เกิน 50 บริษัท",
    price: "฿2,190 / เดือน",
    sub: "หรือ ฿21,900 / ปี",
  },
  {
    name: "Firm",
    detail: "ไม่เกิน 100 บริษัท",
    price: "฿3,590 / เดือน",
    sub: "หรือ ฿35,900 / ปี",
  },
];

const auditflowOffline: Plan[] = [
  { name: "S", detail: "10 บริษัท", price: "฿12,900 ปีแรก", sub: "ค่าอัปเดต ฿1,935 / ปี" },
  { name: "M", detail: "50 บริษัท", price: "฿29,900 ปีแรก", sub: "ค่าอัปเดต ฿4,485 / ปี" },
  { name: "L", detail: "100 บริษัท", price: "฿49,900 ปีแรก", sub: "ค่าอัปเดต ฿7,485 / ปี" },
];

const practiflowPlans: Plan[] = [
  { name: "Free", detail: "ไม่เกิน 5 ราย", price: "฿0" },
  {
    name: "S · เริ่มต้น",
    detail: "ไม่เกิน 30 ราย",
    price: "฿590 / เดือน",
    sub: "หรือ ฿5,900 / ปี",
  },
  {
    name: "M · มาตรฐาน",
    detail: "ไม่เกิน 120 ราย",
    price: "฿1,490 / เดือน",
    sub: "หรือ ฿14,900 / ปี",
    badge: "ยอดนิยม",
  },
  {
    name: "L · สำนักงาน",
    detail: "ไม่เกิน 300 ราย",
    price: "฿2,990 / เดือน",
    sub: "หรือ ฿29,900 / ปี",
  },
];

function PlanTable({ plans }: { plans: Plan[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card">
      {plans.map((p, i) => (
        <div
          key={p.name}
          className={`flex flex-wrap items-baseline gap-x-6 gap-y-1.5 px-5 py-5 md:px-7 ${
            i > 0 ? "border-t border-line" : ""
          } ${p.badge ? "bg-accent-soft/40" : ""}`}
        >
          <div className="min-w-[11rem] flex-1">
            <p className="flex flex-wrap items-center gap-2 font-semibold tracking-tight">
              {p.name}
              {p.badge && (
                <span className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent-ink">
                  {p.badge}
                </span>
              )}
            </p>
            <p className="mt-1 text-[15px] leading-relaxed text-muted">{p.detail}</p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-lg font-semibold tabular-nums tracking-tight">{p.price}</p>
            {p.sub && <p className="mt-0.5 text-sm tabular-nums text-muted">{p.sub}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

function EditionHeading({ title, note }: { title: string; note: string }) {
  return (
    <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="text-[15px] text-muted">{note}</p>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow="ราคา" title="ราคาตรงไปตรงมา ตามขนาดงานจริง" />

      <Section title="งานสอบบัญชี" description="เสนอราคาตามขนาดและความซับซ้อนของกิจการ">
        <div className="rounded-2xl border border-line bg-card p-6 md:p-8">
          <p className="text-3xl font-semibold tracking-tight md:text-4xl">
            เริ่มต้น <span className="tabular-nums">4,500</span> บาท
          </p>
          <p className="mt-1.5 text-[15px] text-muted">ต่อการตรวจสอบงบการเงิน 1 รอบปีบัญชี</p>
          <ul className="mt-6 grid gap-3.5 md:grid-cols-2">
            <CheckItem>ประเมินจากประเภทธุรกิจ รายได้ และจำนวนรายการ</CheckItem>
            <CheckItem>แจ้งราคาชัดเจนก่อนเริ่มงาน ไม่มีบวกเพิ่มภายหลัง</CheckItem>
            <CheckItem>รับใบเสนอราคาภายใน 2 วันทำการ</CheckItem>
            <CheckItem>รวมรายงานผู้สอบบัญชีและงบการเงินฉบับยื่น DBD</CheckItem>
          </ul>
          <div className="mt-7">
            <CTAButton href="/contact">ขอใบเสนอราคา</CTAButton>
          </div>
        </div>
      </Section>

      <Section
        title={`${products.auditflow.name} · ${products.auditflow.category}`}
        description="คิดตามจำนวนบริษัทที่เปิดแฟ้มตรวจในระบบ ไม่คิดตามจำนวนผู้ใช้ ทีมกี่คนก็เข้าใช้ได้"
        tint
      >
        <EditionHeading title="Online" note="ใช้ผ่าน cloud ไม่ต้องติดตั้ง" />
        <PlanTable plans={auditflowOnline} />

        <div className="mt-10">
          <EditionHeading title="Offline" note="ติดตั้งบนเครื่องของสำนักงาน ข้อมูลไม่ออกไปไหน" />
          <PlanTable plans={auditflowOffline} />
        </div>

        <ul className="mt-5 space-y-1.5 text-sm leading-relaxed text-muted">
          <li>ราคายังไม่รวม VAT 7% · แบบรายปีจ่ายเท่า 10 เดือนแต่ใช้ได้ 12 เดือน</li>
          <li>
            ค่าอัปเดตรายปีของรุ่น Offline คือ template ตามมาตรฐาน TSA และ NPAE ปีล่าสุด
            ไม่ต่อก็ใช้ต่อได้ด้วย template ปีเดิม
          </li>
          <li>ย้ายจากรุ่น Online มา Offline นำค่าบริการที่จ่ายไปแล้วมาหักได้ 50%</li>
          <li>เปิดใช้งานต้นปี 2570 · ช่วงก่อนเปิดตัวรับ Early Adopter 10 สำนักงาน</li>
        </ul>

        <div className="mt-7">
          <CTAButton href="/contact">นัด demo AuditFlow</CTAButton>
        </div>
      </Section>

      <Section
        title={`${products.practiflow.name} · ${products.practiflow.category}`}
        description="คิดตามจำนวนลูกค้าที่สำนักงานดูแล ไม่คิดตามจำนวนคน เพิ่มพนักงานกี่คนก็ไม่มีค่าใช้จ่ายเพิ่ม"
      >
        <PlanTable plans={practiflowPlans} />

        <ul className="mt-5 space-y-1.5 text-sm leading-relaxed text-muted">
          <li>ราคายังไม่รวม VAT · แบบรายปีจ่ายเท่า 10 เดือนแต่ใช้ได้ 12 เดือน</li>
          <li>เกิน 300 ราย คิดเพิ่มรายละ ฿10 · ทุกแพ็กเกจใช้งานผ่านเว็บ ผู้ใช้ไม่จำกัดจำนวน</li>
          <li>ทดลองใช้ฟรี 30 วัน ครบทุกฟีเจอร์ ไม่ต้องผูกบัตร</li>
          <li>
            ค่าแพ็กเกจ LINE OA สำนักงานสมัครในชื่อตัวเองและจ่ายตรงกับ LINE ตามการใช้จริง
            เริ่มจากแพ็กฟรี 300 ข้อความต่อเดือน เราไม่บวกเพิ่มและไม่เก็บผ่าน
          </li>
        </ul>

        <div className="mt-7">
          <CTAButton href="/contact">ขอ demo PractiFlow</CTAButton>
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
