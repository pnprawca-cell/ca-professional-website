import type { Metadata } from "next";
import { PageHero, Section, CheckItem, CTABanner } from "@/components/ui";
import { AuditServiceCard } from "@/components/AuditServiceCard";

const stats = [
  { value: "10+", label: "ปีประสบการณ์ตรวจสอบ" },
  { value: "Big 4", label: "เส้นทางอาชีพผู้สอบ" },
  { value: "7", label: "กลุ่มอุตสาหกรรมที่ชำนาญ" },
  { value: "CPA", label: "ผู้สอบบัญชีรับอนุญาต" },
];

const deliverables = [
  "รายงานของผู้สอบบัญชีรับอนุญาต (CPA)",
  "งบการเงินฉบับสมบูรณ์ พร้อมยื่นกรมพัฒนาธุรกิจการค้า (DBD)",
  "หมายเหตุประกอบงบการเงินตาม TFRS for NPAEs",
  "จดหมายข้อสังเกตถึงผู้บริหาร (Management Letter)",
];

export const metadata: Metadata = {
  title: "บริการสอบบัญชี",
  description:
    "ตรวจสอบงบการเงินประจำปีสำหรับ SME ไทย โดยผู้สอบบัญชีรับอนุญาต (CPA) ตามมาตรฐาน TSA และ TFRS for NPAEs",
};

const steps = [
  {
    title: "1. ทำความเข้าใจธุรกิจ",
    detail: "คุยกับผู้บริหารและทีมบัญชี ประเมินความเสี่ยง วางแผนการตรวจสอบและกำหนด Materiality",
  },
  {
    title: "2. ตรวจสอบภาคสนาม",
    detail: "ตรวจสอบรายการสำคัญ ยืนยันยอดกับบุคคลภายนอก จัดทำกระดาษทำการครบทุกหมวด",
  },
  {
    title: "3. สรุปประเด็นและปรับปรุง",
    detail: "แจ้งประเด็นที่พบพร้อมรายการปรับปรุง อธิบายผลกระทบทางบัญชีและภาษีให้เข้าใจง่าย",
  },
  {
    title: "4. ออกรายงานและยื่นงบ",
    detail: "ออกรายงานผู้สอบบัญชี จัดทำงบการเงินฉบับยื่น DBD พร้อมช่วยดูแลจนยื่นเสร็จ",
  },
];

export default function AuditServicePage() {
  return (
    <>
      <PageHero
        eyebrow="บริการสอบบัญชี"
        title={
          <>
            ตรวจสอบงบการเงิน
            <br className="hidden sm:block" />{" "}
            โดยทีม CPA ที่เข้าใจธุรกิจคุณ
          </>
        }
        description="เราตรวจสอบงบการเงินประจำปีสำหรับบริษัท SME ไทย ตามมาตรฐานการสอบบัญชี (TSA) และ TFRS for NPAEs — ตรงเวลา โปร่งใส และอธิบายทุกประเด็นให้เข้าใจได้จริง"
      />

      <Section
        title="บริการของเรา"
        description="ตรวจสอบงบการเงินประจำปีโดยผู้สอบบัญชีรับอนุญาตที่มีประสบการณ์จริง"
      >
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card p-5 text-center md:p-6">
              <div className="text-3xl font-semibold tracking-tight md:text-4xl">{s.value}</div>
              <div className="mt-1.5 text-sm leading-snug text-muted">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:mt-8 md:grid-cols-2 md:items-start">
          <AuditServiceCard />
          <div className="rounded-2xl border border-line bg-card p-6 md:p-8">
            <h3 className="text-lg font-semibold tracking-tight md:text-xl">สิ่งที่คุณจะได้รับ</h3>
            <ul className="mt-5 space-y-3.5">
              {deliverables.map((d) => (
                <CheckItem key={d}>{d}</CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="ขั้นตอนการทำงาน"
        description="กระบวนการชัดเจน รู้ตั้งแต่ต้นว่าแต่ละช่วงจะเกิดอะไรขึ้น"
        tint
      >
        <div className="grid gap-5 md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-line bg-card p-6">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="เหมาะกับใคร">
        <ul className="grid gap-4 md:grid-cols-2">
          <CheckItem>บริษัท SME ที่ต้องการผู้สอบบัญชีที่ติดต่อได้จริง ไม่หายระหว่างปี</CheckItem>
          <CheckItem>ธุรกิจที่อยากได้มากกว่าลายเซ็น — อยากรู้ว่างบตัวเองบอกอะไร</CheckItem>
          <CheckItem>สำนักงานบัญชีที่ต้องการพาร์ทเนอร์ผู้สอบบัญชีสำหรับลูกค้าของตน</CheckItem>
          <CheckItem>บริษัทที่เคยยื่นงบล่าช้า และต้องการระบบงานที่ตรงเวลากว่าเดิม</CheckItem>
        </ul>
      </Section>

      <CTABanner
        title="ขอใบเสนอราคางานสอบบัญชี"
        description="ค่าสอบบัญชีเริ่มต้น 4,500 บาท · ปรึกษาฟรี ไม่มีข้อผูกมัด — ส่งข้อมูลเบื้องต้น (ประเภทธุรกิจ รายได้ จำนวนรายการ) รับใบเสนอราคาภายใน 2 วันทำการ"
        buttonLabel="ขอใบเสนอราคา"
        buttonHref="/contact"
      />
    </>
  );
}
