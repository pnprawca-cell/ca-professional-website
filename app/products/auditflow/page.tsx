import type { Metadata } from "next";
import { PageHero, Section, Card, CheckItem } from "@/components/ui";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import { products } from "@/content/site";

const p = products.auditflow;

export const metadata: Metadata = {
  title: `${p.name} — ${p.category}`,
  description: p.tagline,
};

const phases = [
  {
    step: "1",
    title: "วางแผนงานตรวจ",
    items: [
      "รับงาน + ประเมินความเป็นอิสระ พร้อมออก Engagement Letter",
      "คำนวณ Materiality (PM / TE) ผูกกับงานทั้งแฟ้ม",
      "ประเมินความเสี่ยง (CRA) แล้วระบบร่าง Audit Program ให้ตามผล",
    ],
  },
  {
    step: "2",
    title: "งานภาคสนาม",
    items: [
      "Import TB/GL แล้วได้ Grouping + Lead Schedule + กระดาษทำการทันที",
      "Audit Sampling, Journal Entry Testing และ Analytical Review รายเดือน",
      "ตรวจนับสต๊อก, ประมาณการทางบัญชี (TSA 540), รายการบุคคลเกี่ยวข้องกัน (TSA 550)",
      "ทะเบียน PBC ขอเอกสารลูกค้า — เห็นว่าอะไรได้แล้ว อะไรยังค้าง",
    ],
  },
  {
    step: "3",
    title: "หลักฐานยืนยัน",
    items: [
      "หนังสือยืนยันยอดธนาคาร ลูกหนี้ เจ้าหนี้ เงินกู้ ทนายความ — ติดตามส่ง/ตอบ/กระทบยอดครบวงจร",
      "หนังสือรับรองผู้บริหาร (Management Representation) พร้อมหนังสือรับรองรายเรื่อง",
      "ยอดยกมาปีแรก (TSA 510) และเหตุการณ์ภายหลังวันที่ในงบ + Going Concern (TSA 560/570)",
    ],
  },
  {
    step: "4",
    title: "สรุปและออกเล่ม",
    items: [
      "AJE/RJE ชัดเจน 3 ชั้น: per book → รายการปรับปรุง → adjusted TB",
      "งบการเงิน NPAE ครบ 5 ประเภทกิจการ พร้อมหมายเหตุ — ระบบ cross-check งบกับหมายเหตุทุกจุด",
      "Cal Tax คำนวณ CIT จาก adjusted TB พร้อมรายการบวกกลับ ม.65 ตรี และเทียบ ภ.ง.ด.50",
      "Disclosure Checklist NPAEs 35 หัวข้อ และรายงานผู้สอบบัญชีครบ 4 ความเห็น (TSA 700/705/706) ออกเป็น Word/Excel",
    ],
  },
];

const trustPoints = [
  {
    title: "Audit trail แก้ไขไม่ได้",
    detail: "ทุก action ถูกบันทึกแบบ append-only — ห้ามแก้ ห้ามลบ ตอบผู้ตรวจคุณภาพงานได้เสมอว่าใครทำอะไรเมื่อไหร่",
  },
  {
    title: "เก็บแฟ้มตามมาตรฐาน",
    detail: "Lock แฟ้มเมื่อออกรายงาน พร้อม archive และ retention 5 ปีตามแนวทาง TSA 230 — เปิดแฟ้มใหม่ต้องมีเหตุผลบันทึกไว้",
  },
  {
    title: "สิทธิ์เข้าถึงสองชั้น",
    detail: "แยกสิทธิ์ทั้งระดับลูกค้าและระดับ engagement — ทีมเห็นเฉพาะงานที่ได้รับมอบหมาย ตามหลัก need-to-know",
  },
  {
    title: "พิสูจน์ด้วยชุดทดสอบ",
    detail: "ทุกกฎในระบบมี automated test รองรับ — ผ่านแล้วมากกว่า 1,100 รายการ ก่อนทุกครั้งที่อัปเดต",
  },
];

export default function AuditFlowPage() {
  return (
    <>
      <PageHero eyebrow={p.category} title={p.tagline} description={p.description} />

      <Section
        title="ครอบคลุมงานตรวจทั้งวงจร — ตั้งแต่รับงานจนเข้าเล่ม"
        description="ไม่ใช่เครื่องมือช่วยบางจุด แต่เป็นแฟ้มงานตรวจทั้งแฟ้มในระบบเดียว ทุกตัวเลขเชื่อมถึงกัน แก้ที่เดียวไหลไปทั้งเล่ม"
        tint
      >
        <div className="grid gap-5 md:grid-cols-2">
          {phases.map((phase) => (
            <div key={phase.step} className="rounded-2xl border border-line bg-card p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent-ink">
                  {phase.step}
                </span>
                <h3 className="text-lg font-semibold tracking-tight">{phase.title}</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {phase.items.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="ยกยอดจากโปรแกรมบัญชีไทยได้ทันที"
        description="รองรับไฟล์ Trial Balance / GL จากโปรแกรมที่สำนักงานบัญชีไทยใช้จริง — import แล้วระบบ tie ยอดคุมให้อัตโนมัติ และ mapping ที่ทำไว้ใช้ซ้ำได้ในปีถัดไป"
      >
        <div className="flex flex-wrap gap-3">
          {["Express", "FlowAccount", "PEAK", "SMEMOVE", "Excel (จัดรูปแบบเอง)"].map((name) => (
            <span
              key={name}
              className="rounded-full border border-line bg-card px-5 py-2.5 text-[15px] font-medium"
            >
              {name}
            </span>
          ))}
        </div>
      </Section>

      <Section title="ออกแบบมาให้ตอบผู้ตรวจคุณภาพงานได้" tint>
        <div className="grid gap-5 md:grid-cols-2">
          {trustPoints.map((point) => (
            <Card key={point.title} title={point.title}>
              {point.detail}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="เอกสารออกจากระบบเป็นแบบไทยเสมอ"
        description="สร้างโดยผู้สอบบัญชีไทย เพื่องานตรวจตามมาตรฐานไทยโดยเฉพาะ"
      >
        <ul className="grid gap-3 md:grid-cols-2">
          <CheckItem>งบการเงิน หมายเหตุ และรายงานผู้สอบบัญชี เป็นภาษาไทยตามแบบทางการ</CheckItem>
          <CheckItem>วันที่แสดงเป็นพุทธศักราชทุกจุด ตัวเลขเงินคั่นหลักพันทศนิยม 2 ตำแหน่ง</CheckItem>
          <CheckItem>อิงมาตรฐานจริง: TFRS for NPAEs, TSA และแบบนำส่ง DBD</CheckItem>
          <CheckItem>ทุก module ส่งออกเป็น Excel ได้ — ไม่ล็อกข้อมูลไว้ในระบบ</CheckItem>
        </ul>
      </Section>

      <Section
        title="เลือกได้: Online หรือ Offline"
        description="สำนักงานแต่ละแห่งมีนโยบายข้อมูลไม่เหมือนกัน เราจึงทำทั้งสองรุ่น"
        tint
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-card p-7">
            <h3 className="text-lg font-semibold">☁️ Cloud (Online)</h3>
            <ul className="mt-4 space-y-3">
              <CheckItem>ทำงานร่วมกันทั้งทีมแบบ real-time จากทุกที่</CheckItem>
              <CheckItem>สำรองข้อมูลอัตโนมัติ อัปเดตฟีเจอร์ใหม่ทันที</CheckItem>
              <CheckItem>คิดราคาแบบ subscription ต่อผู้ใช้ต่อปี</CheckItem>
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-card p-7">
            <h3 className="text-lg font-semibold">💻 Desktop (Offline)</h3>
            <ul className="mt-4 space-y-3">
              <CheckItem>ข้อมูลลูกค้าอยู่ในเครื่องของสำนักงาน 100% — ตอบโจทย์ PDPA ตรงที่สุด</CheckItem>
              <CheckItem>ทำงานได้โดยไม่ต้องต่ออินเทอร์เน็ต</CheckItem>
              <CheckItem>ซื้อ license ครั้งเดียว พร้อมอัปเดต template รายปี</CheckItem>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title={`ลงชื่อใช้ ${p.name} ก่อนใคร`}
        description="เราใช้ระบบนี้กับงานตรวจของสำนักงานเราเองมาตลอดฤดูสอบบัญชี และกำลังเปิดให้สำนักงานภายนอกใช้เป็นรุ่นแรกต้นปี 2570 — รับจำนวนจำกัด ผู้ลงชื่อก่อนได้นัด demo กับงานจริงก่อน และมีส่วนกำหนดฟีเจอร์รุ่นแรก"
      >
        <EarlyAccessForm productName={p.name} />
      </Section>
    </>
  );
}
