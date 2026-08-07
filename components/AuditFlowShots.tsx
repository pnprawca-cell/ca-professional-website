/**
 * AuditFlowShots — five stylized screens from the AuditFlow working file, in the
 * same family as ProductPeek (Ivory → Oat mat → white app window, hairline Dune
 * borders, no resting shadow). Not photographs; on-brand product mocks.
 *
 * They are one engagement seen at five points, so every figure ties — to each other
 * and back to ProductPeek's Lead Schedule on the home page:
 *   · Overall materiality rounds to 500,000 (same figure ProductPeek shows)
 *   · Working paper: aging 2,610,000 + 890,000 + 260,000 + 120,000 = 3,880,000
 *     (ProductPeek's ยอดยกมา), less the 120,000 allowance = 3,760,000 (its คงเหลือ)
 *   · The confirmation difference on ลูกหนี้การค้า is that same (120,000)
 *   · Balance sheet: 7,507,550 (ProductPeek's current-asset total) + 12,842,300
 *     = 20,349,850 = 8,120,600 + 12,229,250
 *   · Cal Tax opens at the 4,182,000 profit the balance sheet reports, then
 *     4,182,000 + 266,500 = 4,448,500; CIT 405,000 + 289,700 = 694,700
 * A real auditor reads these before reading the copy, so they have to hold up.
 */

import type { ReactNode } from "react";

function MockWindow({
  screen,
  badge,
  label,
  children,
}: {
  screen: string;
  badge: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div role="img" aria-label={label} className="rounded-3xl bg-surface p-3 sm:p-4">
      <div className="overflow-hidden rounded-2xl border border-line bg-card">
        <div className="flex items-center gap-2 border-b border-line bg-surface/70 px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
          </span>
          <span className="ml-1.5 text-[13px] font-medium text-muted">
            AuditFlow <span className="text-line">·</span> {screen}
          </span>
          <span className="ml-auto whitespace-nowrap rounded-md bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent-ink">
            {badge}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

function ScreenHead({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="px-4 pt-4">
      <p className="text-[13px] font-semibold tracking-tight">{title}</p>
      <p className="mt-0.5 text-[11px] text-muted">{meta}</p>
    </div>
  );
}

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2.5 6.5L5 9l4.5-6"
        stroke="var(--accent-ink)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* 1 — วางแผน: materiality ที่คำนวณจากฐาน แล้วผลประเมินความเสี่ยงร่างโปรแกรมตรวจให้ */

const materiality = [
  { label: "ฐานที่ใช้ · รายได้รวม", value: "62,400,000" },
  { label: "อัตราที่ใช้", value: "0.8%" },
  { label: "Overall (ปัดแล้ว)", value: "500,000" },
  { label: "Performance (75%)", value: "375,000" },
];

const risks: { cycle: string; level: "สูง" | "ปานกลาง" | "ต่ำ" }[] = [
  { cycle: "รายได้และลูกหนี้การค้า", level: "สูง" },
  { cycle: "สินค้าคงเหลือและต้นทุนขาย", level: "ปานกลาง" },
  { cycle: "เจ้าหนี้และค่าใช้จ่ายค้างจ่าย", level: "ปานกลาง" },
  { cycle: "เงินเดือนและสวัสดิการ", level: "ต่ำ" },
];

function RiskLevel({ level }: { level: (typeof risks)[number]["level"] }) {
  if (level === "สูง") {
    return (
      <span className="rounded-md bg-accent-soft px-1.5 py-0.5 text-[10px] font-semibold text-accent-ink">
        สูง
      </span>
    );
  }
  if (level === "ปานกลาง") {
    return (
      <span className="rounded-md border border-line px-1.5 py-0.5 text-[10px] font-medium text-foreground">
        ปานกลาง
      </span>
    );
  }
  return <span className="px-1.5 py-0.5 text-[10px] text-muted">ต่ำ</span>;
}

export function PlanningShot() {
  return (
    <MockWindow
      screen="วางแผนงานตรวจ"
      badge="ปีบัญชี 2568"
      label="ตัวอย่างหน้าจอ AuditFlow หน้าวางแผนงานตรวจ แสดงการคำนวณ Materiality จากฐานรายได้รวม 62,400,000 บาท ที่อัตรา 0.8% ได้ Overall 500,000 บาท และ Performance 375,000 บาท พร้อมตารางประเมินความเสี่ยงรายวงจร โดยวงจรรายได้และลูกหนี้อยู่ระดับสูง ระบบร่างโปรแกรมการตรวจ 18 ขั้นตอนให้ตามผลประเมิน"
    >
      <ScreenHead title="Materiality และการประเมินความเสี่ยง" meta="บจ. รุ่งเรืองการค้า · หน่วย: บาท" />

      <dl className="mt-3 grid grid-cols-2 gap-px border-y border-line bg-line sm:grid-cols-4">
        {materiality.map((m) => (
          <div key={m.label} className="bg-card px-3 py-2.5">
            <dt className="text-[10px] leading-snug text-muted">{m.label}</dt>
            <dd className="mt-0.5 text-[13px] font-semibold tabular-nums tracking-tight">
              {m.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="px-4 py-3">
        <p className="text-[11px] font-medium text-muted">ผลประเมินความเสี่ยงรายวงจร</p>
        <ul className="mt-2 space-y-1.5 text-[12px]">
          {risks.map((r) => (
            <li key={r.cycle} className="flex items-center justify-between gap-3">
              <span className="text-foreground">{r.cycle}</span>
              <RiskLevel level={r.level} />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-1.5 border-t border-line bg-surface/70 px-4 py-2.5 text-[11px] font-medium text-foreground">
        <Check /> ระบบร่างโปรแกรมการตรวจให้ 18 ขั้นตอนตามผลประเมิน
      </div>
    </MockWindow>
  );
}

/* 2 — งานภาคสนาม: กระดาษทำการลูกหนี้ ที่ทุกยอดโยงกลับไปหาหลักฐานได้ */

const aging = [
  { bucket: "ยังไม่ครบกำหนด", amount: "2,610,000", flag: false },
  { bucket: "เกินกำหนด 1–90 วัน", amount: "890,000", flag: false },
  { bucket: "เกินกำหนด 91–180 วัน", amount: "260,000", flag: false },
  { bucket: "เกินกำหนด 180 วันขึ้นไป", amount: "120,000", flag: true },
];

export function WorkingPaperShot() {
  return (
    <MockWindow
      screen="กระดาษทำการ"
      badge="B-1 ลูกหนี้การค้า"
      label="ตัวอย่างหน้าจอ AuditFlow กระดาษทำการลูกหนี้การค้า แสดงการวิเคราะห์อายุหนี้สี่ช่วง รวมยอดตามบัญชี 3,880,000 บาท โดยหนี้เกินกำหนด 180 วันขึ้นไป 120,000 บาท ถูกตั้งค่าเผื่อหนี้สงสัยจะสูญ เหลือยอดสุทธิตามงบ 3,760,000 บาท พร้อมหลักฐานที่ใช้และชื่อผู้จัดทำกับผู้สอบทาน"
    >
      <ScreenHead title="วิเคราะห์อายุหนี้และตั้งค่าเผื่อ" meta="ณ 31 ธ.ค. 2568 · หน่วย: บาท" />

      <table className="mt-3 w-full border-collapse text-[12px] tabular-nums">
        <thead>
          <tr className="border-y border-line bg-surface/60 text-[11px] text-muted">
            <th className="py-1.5 pl-4 pr-2 text-left font-medium">ช่วงอายุหนี้</th>
            <th className="py-1.5 pl-2 pr-4 text-right font-medium">จำนวนเงิน</th>
          </tr>
        </thead>
        <tbody>
          {aging.map((a) => (
            <tr
              key={a.bucket}
              className={`border-b border-line/70 ${a.flag ? "bg-accent-soft/40" : ""}`}
            >
              <td className="py-2 pl-4 pr-2 text-foreground">{a.bucket}</td>
              <td
                className={`py-2 pl-2 pr-4 text-right ${
                  a.flag ? "font-medium text-accent-ink" : "text-foreground"
                }`}
              >
                {a.amount}
              </td>
            </tr>
          ))}
          <tr className="border-b border-line bg-surface/60 font-semibold">
            <td className="py-2 pl-4 pr-2">ยอดตามบัญชี</td>
            <td className="py-2 pl-2 pr-4 text-right">3,880,000</td>
          </tr>
          <tr className="border-b border-line/70 text-muted">
            <td className="py-2 pl-4 pr-2">หัก ค่าเผื่อหนี้สงสัยจะสูญ</td>
            <td className="py-2 pl-2 pr-4 text-right font-medium text-accent-ink">(120,000)</td>
          </tr>
          <tr className="bg-surface/60 text-[13px] font-semibold">
            <td className="py-2.5 pl-4 pr-2">ยอดสุทธิที่ยกไปงบ</td>
            <td className="py-2.5 pl-2 pr-4 text-right">3,760,000</td>
          </tr>
        </tbody>
      </table>

      <div className="flex flex-wrap gap-1.5 px-4 py-3">
        {["หนังสือยืนยัน 11 ราย", "สุ่มตรวจใบแจ้งหนี้ 24 ใบ", "รับชำระหลังปิดงวด"].map((tag) => (
          <span
            key={tag}
            className="rounded border border-line px-1.5 py-0.5 text-[10px] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-line bg-surface/70 px-4 py-2.5 text-[11px] text-muted">
        <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
          <Check /> จัดทำ ณฐ · 14 ม.ค.
        </span>
        <span>สอบทาน พร · 20 ม.ค.</span>
      </div>
    </MockWindow>
  );
}

/* 3 — หลักฐานยืนยัน: ทะเบียนหนังสือยืนยันยอด ที่รู้ว่าใครตอบแล้ว ใครยังไม่ตอบ */

const confirmations = [
  { party: "ธ. กสิกรไทย", type: "ธนาคาร", sent: "12 ม.ค.", replied: true, diff: "—" },
  { party: "บจ. เจริญพานิช", type: "ลูกหนี้", sent: "12 ม.ค.", replied: true, diff: "(120,000)" },
  { party: "บจ. ไทยพลาสติก", type: "เจ้าหนี้", sent: "12 ม.ค.", replied: false, diff: "—" },
  { party: "สนง. ทนายธนกร", type: "ทนายความ", sent: "15 ม.ค.", replied: true, diff: "—" },
];

export function ConfirmationShot() {
  return (
    <MockWindow
      screen="หนังสือยืนยันยอด"
      badge="ส่งแล้ว 14 ฉบับ"
      label="ตัวอย่างหน้าจอ AuditFlow ทะเบียนหนังสือยืนยันยอด แสดงผู้รับทั้งธนาคาร ลูกหนี้ เจ้าหนี้ และทนายความ พร้อมวันที่ส่ง สถานะการตอบกลับ และผลต่างที่ต้องกระทบยอด โดยลูกหนี้รายหนึ่งมีผลต่าง 120,000 บาท และยังมีอีก 3 ฉบับที่รอตอบ"
    >
      <ScreenHead title="ทะเบียนติดตามหนังสือยืนยันยอด" meta="รอบบัญชี 31 ธ.ค. 2568 · หน่วย: บาท" />

      <table className="mt-3 w-full border-collapse text-[12px]">
        <thead>
          <tr className="border-y border-line bg-surface/60 text-[11px] text-muted">
            <th className="py-1.5 pl-4 pr-2 text-left font-medium">ผู้รับ</th>
            {/* ประเภท และ ส่งเมื่อ ถูกซ่อนบนจอเล็ก เพื่อให้ชื่อผู้รับอยู่บรรทัดเดียว */}
            <th className="hidden px-2 py-1.5 text-left font-medium sm:table-cell">ประเภท</th>
            <th className="hidden px-2 py-1.5 text-right font-medium sm:table-cell">ส่งเมื่อ</th>
            <th className="px-2 py-1.5 text-right font-medium">สถานะ</th>
            <th className="py-1.5 pl-2 pr-4 text-right font-medium">ผลต่าง</th>
          </tr>
        </thead>
        <tbody>
          {confirmations.map((c) => (
            <tr
              key={c.party}
              className={`border-b border-line/70 ${!c.replied ? "bg-accent-soft/40" : ""}`}
            >
              <td className="py-2 pl-4 pr-2 text-foreground">{c.party}</td>
              <td className="hidden px-2 py-2 text-muted sm:table-cell">{c.type}</td>
              <td className="hidden whitespace-nowrap px-2 py-2 text-right tabular-nums text-muted sm:table-cell">
                {c.sent}
              </td>
              <td className="px-2 py-2 text-right">
                {c.replied ? (
                  <span className="inline-flex items-center gap-1 whitespace-nowrap text-muted">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path
                        d="M2.5 6.5L5 9l4.5-6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    ตอบแล้ว
                  </span>
                ) : (
                  <span className="whitespace-nowrap rounded-md bg-accent-soft px-1.5 py-0.5 font-semibold text-accent-ink">
                    รอตอบ
                  </span>
                )}
              </td>
              <td
                className={`whitespace-nowrap py-2 pl-2 pr-4 text-right tabular-nums ${
                  c.diff === "—" ? "text-line" : "font-medium text-accent-ink"
                }`}
              >
                {c.diff}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-line bg-surface/70 px-4 py-2.5 text-[11px] tabular-nums text-muted">
        <span className="font-medium text-foreground">ส่งแล้ว 14 ฉบับ</span>
        <span>ตอบกลับ 11</span>
        <span className="ml-auto rounded-md bg-accent-soft px-2 py-0.5 font-semibold text-accent-ink">
          รอตอบ 3
        </span>
      </div>
    </MockWindow>
  );
}

/* 4 — สรุปและออกเล่ม: งบการเงิน NPAE ที่สร้างจากยอดหลังปรับปรุงชุดเดียวกัน */

const balanceSheet = [
  { label: "สินทรัพย์หมุนเวียน", note: "4", amount: "7,507,550" },
  { label: "สินทรัพย์ไม่หมุนเวียน", note: "5", amount: "12,842,300" },
];

const equitySide = [
  { label: "หนี้สินรวม", note: "6", amount: "8,120,600" },
  { label: "ส่วนของผู้ถือหุ้น", note: "7", amount: "12,229,250" },
];

export function FinancialStatementShot() {
  return (
    <MockWindow
      screen="งบการเงิน"
      badge="NPAE"
      label="ตัวอย่างหน้าจอ AuditFlow งบแสดงฐานะการเงินตาม TFRS for NPAEs ณ 31 ธันวาคม 2568 แสดงสินทรัพย์หมุนเวียน 7,507,550 บาท สินทรัพย์ไม่หมุนเวียน 12,842,300 บาท รวมสินทรัพย์ 20,349,850 บาท เท่ากับหนี้สินรวม 8,120,600 บาท บวกส่วนของผู้ถือหุ้น 12,229,250 บาท พร้อมเลขหมายเหตุกำกับทุกบรรทัด"
    >
      <ScreenHead title="งบแสดงฐานะการเงิน" meta="ณ 31 ธ.ค. 2568 · หน่วย: บาท" />

      <table className="mt-3 w-full border-collapse text-[12px] tabular-nums">
        <thead>
          <tr className="border-y border-line bg-surface/60 text-[11px] text-muted">
            <th className="py-1.5 pl-4 pr-2 text-left font-medium">รายการ</th>
            <th className="px-2 py-1.5 text-right font-medium">หมายเหตุ</th>
            <th className="py-1.5 pl-2 pr-4 text-right font-medium">2568</th>
          </tr>
        </thead>
        <tbody>
          {balanceSheet.map((r) => (
            <tr key={r.label} className="border-b border-line/70">
              <td className="py-2 pl-4 pr-2 text-foreground">{r.label}</td>
              <td className="px-2 py-2 text-right text-muted">{r.note}</td>
              <td className="py-2 pl-2 pr-4 text-right text-foreground">{r.amount}</td>
            </tr>
          ))}
          <tr className="border-b border-line bg-surface/60 font-semibold">
            <td className="py-2 pl-4 pr-2">รวมสินทรัพย์</td>
            <td className="px-2 py-2" />
            <td className="py-2 pl-2 pr-4 text-right">20,349,850</td>
          </tr>
          {equitySide.map((r) => (
            <tr key={r.label} className="border-b border-line/70">
              <td className="py-2 pl-4 pr-2 text-foreground">{r.label}</td>
              <td className="px-2 py-2 text-right text-muted">{r.note}</td>
              <td className="py-2 pl-2 pr-4 text-right text-foreground">{r.amount}</td>
            </tr>
          ))}
          <tr className="bg-surface/60 text-[13px] font-semibold">
            <td className="py-2.5 pl-4 pr-2">รวมหนี้สินและส่วนของผู้ถือหุ้น</td>
            <td className="px-2 py-2.5" />
            <td className="py-2.5 pl-2 pr-4 text-right">20,349,850</td>
          </tr>
        </tbody>
      </table>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-line bg-surface/70 px-4 py-2.5 text-[11px] text-muted">
        <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
          <Check /> หน้างบกับหมายเหตุตรงกันทุกจุด
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Check /> ออกเป็น Word ได้
        </span>
      </div>
    </MockWindow>
  );
}

/* 5 — สรุปและออกเล่ม: Cal Tax ที่คำนวณต่อจากยอดหลังปรับปรุงในแฟ้มเดียวกัน */

const taxRows = [
  { label: "กำไรสุทธิทางบัญชี", value: "4,182,000", strong: true },
  { label: "บวกกลับ ค่ารับรองส่วนที่เกินเกณฑ์", value: "128,500" },
  { label: "บวกกลับ ค่าปรับและเงินเพิ่มภาษี", value: "42,000" },
  { label: "บวกกลับ ค่าเสื่อมราคาส่วนที่เกินสิทธิ", value: "96,000" },
];

const taxBands = [
  { label: "300,000 แรก", rate: "ยกเว้น", value: "0" },
  { label: "300,001 – 3,000,000", rate: "15%", value: "405,000" },
  { label: "ส่วนที่เกิน 3,000,000", rate: "20%", value: "289,700" },
];

export function CalTaxShot() {
  return (
    <MockWindow
      screen="Cal Tax"
      badge="ต่อจากยอดหลังปรับปรุง"
      label="ตัวอย่างหน้าจอ AuditFlow หน้าคำนวณภาษีเงินได้นิติบุคคล เริ่มจากกำไรสุทธิทางบัญชี 4,182,000 บาท บวกกลับรายการทางภาษีรวม 266,500 บาท ได้กำไรสุทธิทางภาษี 4,448,500 บาท คำนวณตามอัตราภาษี SME สามขั้น ได้ภาษีที่ต้องชำระ 694,700 บาท"
    >
      <ScreenHead title="ภาษีเงินได้นิติบุคคล" meta="อัตรา SME · หน่วย: บาท" />

      <table className="mt-3 w-full border-collapse text-[12px] tabular-nums">
        <tbody>
          {taxRows.map((r) => (
            <tr key={r.label} className="border-b border-line/70">
              <td className={`py-2 pl-4 pr-2 ${r.strong ? "text-foreground" : "text-muted"}`}>
                {r.label}
              </td>
              <td
                className={`py-2 pl-2 pr-4 text-right ${
                  r.strong ? "font-medium text-foreground" : "text-foreground"
                }`}
              >
                {r.value}
              </td>
            </tr>
          ))}
          <tr className="border-b border-line bg-surface/60 font-semibold">
            <td className="py-2 pl-4 pr-2">กำไรสุทธิทางภาษี</td>
            <td className="py-2 pl-2 pr-4 text-right">4,448,500</td>
          </tr>
          {taxBands.map((b) => (
            <tr key={b.label} className="border-b border-line/70 text-muted">
              <td className="py-1.5 pl-4 pr-2">
                {b.label} <span className="text-line">·</span> {b.rate}
              </td>
              <td className="py-1.5 pl-2 pr-4 text-right">{b.value}</td>
            </tr>
          ))}
          <tr className="bg-surface/60 text-[13px] font-semibold">
            <td className="py-2.5 pl-4 pr-2">ภาษีที่ต้องชำระ</td>
            <td className="py-2.5 pl-2 pr-4 text-right text-accent-ink">694,700</td>
          </tr>
        </tbody>
      </table>

      <div className="flex items-center gap-1.5 border-t border-line bg-surface/70 px-4 py-2.5 text-[11px] font-medium text-foreground">
        <Check /> เทียบกับ ภ.ง.ด.50 ที่ยื่นไว้ได้ในหน้าเดียวกัน
      </div>
    </MockWindow>
  );
}
