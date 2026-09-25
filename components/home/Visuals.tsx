/**
 * ภาพประกอบของหน้าแรก — วาดจาก HTML/CSS ไม่ใช่ภาพถ่าย
 * ตัวเลขใน LaptopShot คือชุดเดียวกับ ProductPeek (Lead Schedule สินทรัพย์หมุนเวียน)
 * ผู้สอบบัญชีอ่านตัวเลขก่อนอ่านคำโฆษณา จึงต้องผูกกันจริง: 3,880,000 − 120,000 = 3,760,000
 * และรวมยกมา 7,627,550 − 120,000 = 7,507,550
 */

const leadRows = [
  { code: "1010", name: "เงินสดและรายการเทียบเท่า", open: "1,240,500", adj: "—", close: "1,240,500" },
  { code: "1140", name: "ลูกหนี้การค้า", open: "3,880,000", adj: "(120,000)", close: "3,760,000" },
  { code: "1150", name: "สินค้าคงเหลือ", open: "2,410,750", adj: "—", close: "2,410,750" },
  { code: "1210", name: "ภาษีซื้อ", open: "96,300", adj: "—", close: "96,300" },
];

const sidebar = [
  "ภาพรวมงาน",
  "วางแผนงาน",
  "Trial Balance",
  "Working Paper",
  "Lead Schedule",
  "ยืนยันยอด",
  "งบการเงิน",
  "Cal Tax",
];

/** หน้าจอ AuditFlow บนโน้ตบุ๊ก — sidebar เข้ม + Lead Schedule */
export function LaptopShot() {
  return (
    <div
      role="img"
      aria-label="หน้าจอ AuditFlow บนโน้ตบุ๊ก เปิดหน้า Lead Schedule ของสินทรัพย์หมุนเวียน ลูกหนี้การค้ายกมา 3,880,000 บาท ปรับปรุงค่าเผื่อ 120,000 บาท คงเหลือ 3,760,000 บาท รวมสินทรัพย์หมุนเวียนหลังปรับปรุง 7,507,550 บาท"
      className="mx-auto w-full max-w-[560px]"
    >
      {/* ฝาจอ */}
      <div className="rounded-t-[14px] bg-[#2a2826] p-[7px] pb-2 shadow-[0_30px_60px_-30px_rgb(31_30_29/0.45)]">
        <div className="flex aspect-[16/10] overflow-hidden rounded-[6px] bg-card text-[8px] leading-tight sm:text-[9px]">
          <div className="flex w-[27%] shrink-0 flex-col bg-foreground px-2 py-2.5 text-background/60">
            <p className="mb-2.5 flex items-center gap-1 font-semibold text-background">
              <span className="flex h-3 w-3 items-center justify-center rounded-[3px] bg-accent text-[6px] text-card">
                A
              </span>
              AuditFlow
            </p>
            {sidebar.map((item) => (
              <p
                key={item}
                className={`truncate rounded px-1.5 py-[3px] ${
                  item === "Lead Schedule" ? "bg-background/12 font-medium text-background" : ""
                }`}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="min-w-0 flex-1 p-2.5">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate font-semibold">บจ. รุ่งเรืองการค้า · ปีบัญชี 2568</p>
              <span className="shrink-0 rounded bg-accent-soft px-1 py-px font-semibold text-accent-ink">
                NPAE
              </span>
            </div>
            <p className="mt-2 font-semibold">Lead Schedule · สินทรัพย์หมุนเวียน</p>
            {/* จอแคบกว่า 400px ซ่อนคอลัมน์ยกมา ไม่งั้นตารางกว้างเกินจอโน้ตบุ๊กจำลอง */}
            <table className="mt-1.5 w-full border-collapse tabular-nums">
              <thead>
                <tr className="border-y border-line bg-surface/70 text-muted">
                  <th className="py-1 pl-1 text-left font-medium">บัญชี</th>
                  <th className="hidden px-1 py-1 text-right font-medium min-[400px]:table-cell">ยกมา</th>
                  <th className="px-1 py-1 text-right font-medium">ปรับปรุง</th>
                  <th className="py-1 pr-1 text-right font-medium">คงเหลือ</th>
                </tr>
              </thead>
              <tbody>
                {leadRows.map((r) => (
                  <tr key={r.code} className="border-b border-line/70">
                    <td className="truncate py-1 pl-1">
                      <span className="text-muted">{r.code}</span> {r.name}
                    </td>
                    <td className="hidden px-1 py-1 text-right text-muted min-[400px]:table-cell">{r.open}</td>
                    <td className={`px-1 py-1 text-right ${r.adj === "—" ? "text-muted" : "text-accent-ink"}`}>
                      {r.adj}
                    </td>
                    <td className="py-1 pr-1 text-right font-medium">{r.close}</td>
                  </tr>
                ))}
                <tr className="bg-surface/70 font-semibold">
                  <td className="py-1 pl-1">รวม</td>
                  <td className="hidden px-1 py-1 text-right text-muted min-[400px]:table-cell">7,627,550</td>
                  <td className="px-1 py-1 text-right text-accent-ink">(120,000)</td>
                  <td className="py-1 pr-1 text-right">7,507,550</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {[
                ["Materiality", "500,000"],
                ["WP เสร็จแล้ว", "14 / 18"],
                ["ยืนยันยอดตอบกลับ", "9 / 11"],
              ].map(([k, v]) => (
                <div key={k} className="rounded border border-line px-1.5 py-1">
                  <p className="truncate text-muted">{k}</p>
                  <p className="mt-px font-semibold">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ฐานเครื่อง */}
      <div className="relative -mx-[6%] h-3 rounded-b-[14px] bg-gradient-to-b from-[#d9d6ce] to-[#b9b5ab]">
        <span className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b-md bg-[#a8a499]" />
      </div>
    </div>
  );
}
