import type { Metadata } from "next";
import { PageHero, Section, CheckItem, CTABanner } from "@/components/ui";
import { AuditServiceCard } from "@/components/AuditServiceCard";

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
    detail: "ประเมินความเสี่ยง วางแผนการตรวจ และกำหนด Materiality",
  },
  {
    title: "2. ตรวจสอบภาคสนาม",
    detail: "ตรวจรายการสำคัญ ยืนยันยอดกับบุคคลภายนอก ทำกระดาษทำการ",
  },
  {
    title: "3. สรุปประเด็นและปรับปรุง",
    detail: "แจ้งประเด็นที่พบและรายการปรับปรุง อธิบายผลกระทบให้เข้าใจง่าย",
  },
  {
    title: "4. ออกรายงานและยื่นงบ",
    detail: "ออกรายงานผู้สอบบัญชี และจัดทำงบการเงินฉบับยื่น DBD",
  },
];

export default function AuditServicePage() {
  return (
    <>
      <PageHero
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
        {/* ประวัติผู้สอบ — เดิมเป็นตาราง 4 ช่อง "ตัวเลขใหญ่ + ป้ายเล็ก" ซึ่งบอกสายตาว่า
            ทุกช่องคือค่าที่วัดได้ แต่ Big 4 คือเส้นทางอาชีพ และ CPA คือใบอนุญาต ไม่ใช่จำนวน
            จึงเปลี่ยนเป็นคุณวุฒินำหนึ่งบรรทัด + ประโยคขยายที่เหลือ ลำดับชั้นมาจากน้ำหนัก
            ตัวอักษรกับหมึกเข้ม ไม่ใช่จากการทำกล่องเท่ากันสี่กล่อง (ไม่มี accent ในบล็อกนี้
            เพราะ terracotta ถูกใช้แล้วที่ป้ายอุตสาหกรรมและ CheckItem ที่อยู่ถัดลงไป) */}
        <div className="border-y border-line py-6 md:grid md:grid-cols-[auto_minmax(0,1fr)] md:items-baseline md:gap-x-10 md:py-7">
          <p className="text-xl font-semibold tracking-tight md:text-2xl">
            ผู้สอบบัญชีรับอนุญาต (CPA)
          </p>
          <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-muted md:mt-0">
            ประสบการณ์งานตรวจสอบ{" "}
            <span className="font-medium text-foreground">มากกว่า 10 ปี</span>{" "}
            ผ่านเส้นทางอาชีพผู้สอบในสำนักงานสอบบัญชี{" "}
            <span className="font-medium text-foreground">Big 4</span>{" "}
            และชำนาญงานตรวจใน{" "}
            <span className="font-medium text-foreground">7 กลุ่มอุตสาหกรรม</span>
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 md:items-start">
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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
