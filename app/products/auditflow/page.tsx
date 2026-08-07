import type { Metadata } from "next";
import { PageHero, Section, CheckItem } from "@/components/ui";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import {
  PlanningShot,
  WorkingPaperShot,
  ConfirmationShot,
  FinancialStatementShot,
  CalTaxShot,
} from "@/components/AuditFlowShots";
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
      "รับงานและประเมินความเป็นอิสระ พร้อมออก Engagement Letter",
      "คำนวณ Materiality ผูกกับงานทั้งแฟ้ม",
      "ประเมินความเสี่ยง แล้วระบบร่างโปรแกรมการตรวจให้ตามผล",
    ],
  },
  {
    step: "2",
    title: "งานภาคสนาม",
    items: [
      "Import TB/GL แล้วได้ Grouping, Lead Schedule และกระดาษทำการทันที",
      "สุ่มตัวอย่าง ตรวจ Journal Entry และวิเคราะห์เปรียบเทียบรายเดือน",
      "ทะเบียนขอเอกสารลูกค้า เห็นว่าอะไรได้แล้ว อะไรยังค้าง",
    ],
  },
  {
    step: "3",
    title: "หลักฐานยืนยัน",
    items: [
      "หนังสือยืนยันยอดธนาคาร ลูกหนี้ เจ้าหนี้ ติดตามส่ง ตอบ และกระทบยอดครบวงจร",
      "หนังสือรับรองผู้บริหาร พร้อมหนังสือรับรองรายเรื่อง",
      "ยอดยกมาปีแรก เหตุการณ์ภายหลังวันที่ในงบ และการดำเนินงานต่อเนื่อง",
    ],
  },
  {
    step: "4",
    title: "สรุปและออกเล่ม",
    items: [
      "รายการปรับปรุงชัดเจน 3 ชั้น จากยอดตามบัญชีถึงยอดหลังปรับปรุง",
      "งบการเงิน NPAE พร้อมหมายเหตุ ระบบ cross-check ให้ทุกจุด",
      "Cal Tax และรายงานผู้สอบบัญชี ออกเป็น Word และ Excel",
    ],
  },
];

const shots = [
  {
    title: "วางแผนก่อนลงมือ",
    detail:
      "กำหนด Materiality จากฐานตัวเลขจริง แล้วผลประเมินความเสี่ยงจะร่างโปรแกรมการตรวจให้เอง ไม่ต้องเริ่มจากกระดาษเปล่าทุกปี",
    shot: <PlanningShot />,
  },
  {
    title: "กระดาษทำการที่โยงถึงหลักฐาน",
    detail:
      "ทุกยอดในกระดาษทำการรู้ว่ามาจากไหน ใช้หลักฐานอะไรรองรับ และใครเป็นคนจัดทำกับสอบทาน ตัวเลขที่ยกไปงบก็ออกมาจากหน้านี้",
    shot: <WorkingPaperShot />,
  },
  {
    title: "รู้เสมอว่าหลักฐานถึงไหน",
    detail:
      "ทะเบียนหนังสือยืนยันยอดบอกได้ทันทีว่าใครตอบแล้ว ใครยังไม่ตอบ และผลต่างที่ต้องกระทบยอดเหลืออีกเท่าไร",
    shot: <ConfirmationShot />,
  },
  {
    title: "งบการเงินมาจากตัวเลขชุดเดียวกัน",
    detail:
      "งบและหมายเหตุสร้างจากยอดหลังปรับปรุงในแฟ้ม ระบบตรวจให้ว่างบลงตัวและตัวเลขในหมายเหตุตรงกับหน้างบทุกจุด",
    shot: <FinancialStatementShot />,
  },
  {
    title: "ตัวเลขไหลถึงกันจนถึงภาษี",
    detail:
      "Cal Tax คำนวณต่อจากยอดหลังปรับปรุงในแฟ้มเดียวกัน แก้กระดาษทำการที่เดียว ตัวเลขภาษีและงบการเงินขยับตาม",
    shot: <CalTaxShot />,
  },
];

const trustPoints = [
  "บันทึกทุกการแก้ไข ลบไม่ได้",
  "ล็อกและเก็บแฟ้มไว้ 5 ปี",
  "แยกสิทธิ์เข้าถึงรายคนรายงาน",
  "ทดสอบระบบอัตโนมัติกว่า 1,100 รายการ",
];

export default function AuditFlowPage() {
  return (
    <>
      <PageHero eyebrow={p.category} title={p.tagline} description={p.description} />

      <Section
        title="ครอบคลุมงานตรวจทั้งวงจร ตั้งแต่รับงานจนเข้าเล่ม"
        description="แฟ้มงานตรวจทั้งแฟ้มอยู่ในระบบเดียว ทุกตัวเลขเชื่อมถึงกัน แก้ที่เดียวไหลไปทั้งเล่ม"
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

      <Section title="ตัวอย่างหน้าจอการใช้งาน">
        <div className="space-y-12 md:space-y-20">
          {shots.map((s, i) => (
            <div key={s.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className={i % 2 === 1 ? "lg:order-2" : undefined}>{s.shot}</div>
              <div className={`max-w-md ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="ยกยอดจากโปรแกรมบัญชีไทยได้ทันที"
        description="รองรับไฟล์ Trial Balance และ GL จากโปรแกรมที่สำนักงานบัญชีไทยใช้จริง import แล้วระบบ tie ยอดคุมให้อัตโนมัติ ส่วน mapping ที่ทำไว้ใช้ซ้ำได้ในปีถัดไป"
        tint
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

      <Section title="งานทุกชิ้นย้อนกลับไปตรวจได้">
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-start gap-2.5 bg-card p-5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                className="mt-1 shrink-0"
              >
                <path
                  d="M2.5 6.5L5 9l4.5-6"
                  stroke="var(--accent-ink)"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[15px] font-medium leading-snug">{point}</span>
            </li>
          ))}
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
              <CheckItem>คิดราคาตามจำนวนบริษัทที่ตรวจ ผู้ใช้ในทีมไม่จำกัดจำนวน</CheckItem>
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-card p-7">
            <h3 className="text-lg font-semibold">💻 Desktop (Offline)</h3>
            <ul className="mt-4 space-y-3">
              <CheckItem>ข้อมูลลูกค้าอยู่ในเครื่องของสำนักงาน 100% ตอบโจทย์ PDPA ตรงที่สุด</CheckItem>
              <CheckItem>ทำงานได้โดยไม่ต้องต่ออินเทอร์เน็ต</CheckItem>
              <CheckItem>ซื้อ license เป็นเจ้าของ พร้อมค่าอัปเดต template รายปีที่จะต่อหรือไม่ต่อก็ได้</CheckItem>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title={`ลงชื่อใช้ ${p.name} ก่อนใคร`}
        description="เราใช้ระบบนี้กับงานตรวจของสำนักงานเราเองมาตลอดฤดูสอบบัญชี และกำลังเปิดให้สำนักงานภายนอกใช้เป็นรุ่นแรกต้นปี 2570 รับจำนวนจำกัด ผู้ลงชื่อก่อนได้นัด demo กับงานจริงก่อน และมีส่วนกำหนดฟีเจอร์รุ่นแรก"
      >
        <EarlyAccessForm productName={p.name} />
      </Section>
    </>
  );
}
