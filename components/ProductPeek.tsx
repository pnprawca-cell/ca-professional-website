/**
 * ProductPeek — an on-brand representation of the AuditFlow working-paper UI
 * (a Lead Schedule for current assets). Not a photo; a stylized product mock
 * that shows the tool a Thai CPA actually works in — the "practitioner-proof"
 * claim made visible. Numbers tie (ยอดยกมา − ปรับปรุง = คงเหลือ), because a
 * real auditor would notice if they didn't.
 *
 * Depth follows DESIGN.md's Flat-By-Default rule: tonal layering
 * (Ivory → Oat mat → white app window) + hairline Dune borders, no resting shadow.
 */

const rows = [
  { code: "1010", name: "เงินสดและรายการเทียบเท่า", open: "1,240,500", adj: "—", close: "1,240,500" },
  { code: "1140", name: "ลูกหนี้การค้า", open: "3,880,000", adj: "(120,000)", close: "3,760,000", flag: true },
  { code: "1150", name: "สินค้าคงเหลือ", open: "2,410,750", adj: "—", close: "2,410,750" },
  { code: "1210", name: "ภาษีซื้อ", open: "96,300", adj: "—", close: "96,300" },
];

export default function ProductPeek() {
  return (
    <div
      role="img"
      aria-label="ตัวอย่างหน้าจอ AuditFlow — กระดาษทำการ Lead Schedule ของสินทรัพย์หมุนเวียน แสดงยอดยกมา รายการปรับปรุง และยอดคงเหลือที่ผูกกับ Trial Balance อัตโนมัติ"
      className="rounded-3xl bg-surface p-3 sm:p-4"
    >
      <div className="overflow-hidden rounded-2xl border border-line bg-card">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-line bg-surface/70 px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
          </span>
          <span className="ml-1.5 text-[13px] font-medium text-muted">
            AuditFlow <span className="text-line">·</span> กระดาษทำการ
          </span>
          <span className="ml-auto rounded-md bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent-ink">
            Online
          </span>
        </div>

        {/* schedule header */}
        <div className="flex items-baseline justify-between gap-3 px-4 pt-4">
          <div>
            <p className="text-[13px] font-semibold tracking-tight">Lead Schedule · สินทรัพย์หมุนเวียน</p>
            <p className="mt-0.5 text-[11px] text-muted">ปีบัญชี 2568 · หน่วย: บาท</p>
          </div>
          <span className="whitespace-nowrap rounded-md border border-line px-2 py-1 text-[11px] font-medium text-muted">
            Materiality 500,000
          </span>
        </div>

        {/* table */}
        <table className="mt-3 w-full border-collapse text-[12px] tabular-nums">
          <thead>
            <tr className="border-y border-line bg-surface/60 text-[11px] text-muted">
              <th className="py-1.5 pl-4 pr-2 text-left font-medium">บัญชี</th>
              <th className="px-2 py-1.5 text-right font-medium">ยอดยกมา</th>
              <th className="px-2 py-1.5 text-right font-medium">ปรับปรุง</th>
              <th className="py-1.5 pl-2 pr-4 text-right font-medium">คงเหลือ</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.code}
                className={`border-b border-line/70 ${r.flag ? "bg-accent-soft/40" : ""}`}
              >
                <td className="py-2 pl-4 pr-2">
                  <span className="text-muted">{r.code}</span>{" "}
                  <span className="text-foreground">{r.name}</span>
                </td>
                <td className="px-2 py-2 text-right text-muted">{r.open}</td>
                <td className={`px-2 py-2 text-right ${r.adj === "—" ? "text-line" : "font-medium text-accent-ink"}`}>
                  {r.adj}
                </td>
                <td className="py-2 pl-2 pr-4 text-right font-medium text-foreground">{r.close}</td>
              </tr>
            ))}
            <tr className="bg-surface/60 text-[12px] font-semibold">
              <td className="py-2 pl-4 pr-2">รวมสินทรัพย์หมุนเวียน</td>
              <td className="px-2 py-2 text-right text-muted">7,627,550</td>
              <td className="px-2 py-2 text-right text-accent-ink">(120,000)</td>
              <td className="py-2 pl-2 pr-4 text-right">7,507,550</td>
            </tr>
          </tbody>
        </table>

        {/* status footer */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-line bg-surface/70 px-4 py-2.5 text-[11px] text-muted">
          <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
            <Check /> ผูกกับ Trial Balance อัตโนมัติ
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check /> Cal Tax พร้อม
          </span>
          <span className="ml-auto rounded-md bg-accent-soft px-2 py-0.5 font-semibold text-accent-ink">
            NPAE
          </span>
        </div>
      </div>
    </div>
  );
}

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 6.5L5 9l4.5-6" stroke="var(--accent-ink)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
