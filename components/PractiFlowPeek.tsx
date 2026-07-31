/**
 * PractiFlowPeek — an on-brand representation of the PractiFlow task board
 * (client work + statutory deadlines for a Thai accounting firm). Not a photo;
 * a stylized product mock, the same "practitioner-proof" move as ProductPeek.
 * Summary counts tie (6 + 15 + 3 = 24), because an accountant would check.
 *
 * Depth follows DESIGN.md's Flat-By-Default rule: tonal layering
 * (Ivory → Oat mat → white app window) + hairline Dune borders, no resting shadow.
 */

type Row = {
  client: string;
  task: string;
  due: string;
  status: "ยื่นแล้ว" | "กำลังทำ" | "รอเอกสาร";
};

const rows: Row[] = [
  { client: "บจ. รุ่งเรืองการค้า", task: "ภ.พ.30 ก.ค.", due: "15 ส.ค.", status: "ยื่นแล้ว" },
  { client: "บจ. สยามวัสดุภัณฑ์", task: "ภ.ง.ด.1 ก.ค.", due: "7 ส.ค.", status: "รอเอกสาร" },
  { client: "บจ. เค.ที. ฟู้ดส์", task: "ประกันสังคม ก.ค.", due: "15 ส.ค.", status: "กำลังทำ" },
  { client: "หจก. พรทวีการช่าง", task: "ปิดงบ รอบ 31 มี.ค. 69", due: "29 ส.ค.", status: "กำลังทำ" },
];

function StatusPill({ status }: { status: Row["status"] }) {
  if (status === "ยื่นแล้ว") {
    return (
      <span className="inline-flex items-center gap-1 text-muted">
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2.5 6.5L5 9l4.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        ยื่นแล้ว
      </span>
    );
  }
  if (status === "รอเอกสาร") {
    return (
      <span className="rounded-md bg-accent-soft px-1.5 py-0.5 font-semibold text-accent-ink">
        รอเอกสาร
      </span>
    );
  }
  return <span className="font-medium text-foreground">กำลังทำ</span>;
}

export default function PractiFlowPeek() {
  return (
    <div
      role="img"
      aria-label="ตัวอย่างหน้าจอ PractiFlow — บอร์ดงานและ deadline ของสำนักงาน แสดงงาน ภ.พ.30, ภ.ง.ด.1, ประกันสังคม และปิดงบของลูกค้าแต่ละราย พร้อมสถานะและกำหนดส่ง งานที่รอเอกสารถูกไฮไลต์ให้เห็นก่อน"
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
            PractiFlow <span className="text-line">·</span> งานและ deadline
          </span>
          <span className="ml-auto rounded-md bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent-ink">
            ส.ค. 2569
          </span>
        </div>

        {/* board header */}
        <div className="flex items-baseline justify-between gap-3 px-4 pt-4">
          <div>
            <p className="text-[13px] font-semibold tracking-tight">งานครบกำหนดเดือนสิงหาคม</p>
            <p className="mt-0.5 text-[11px] text-muted">เรียงตามกำหนดส่ง · ทุกลูกค้า</p>
          </div>
          <span className="whitespace-nowrap rounded-md border border-line px-2 py-1 text-[11px] font-medium text-muted">
            ผู้รับผิดชอบ: ทั้งทีม
          </span>
        </div>

        {/* task table */}
        <table className="mt-3 w-full border-collapse text-[12px]">
          <thead>
            <tr className="border-y border-line bg-surface/60 text-[11px] text-muted">
              <th className="py-1.5 pl-4 pr-2 text-left font-medium">ลูกค้า</th>
              <th className="px-2 py-1.5 text-left font-medium">งาน</th>
              <th className="px-2 py-1.5 text-right font-medium">กำหนด</th>
              <th className="py-1.5 pl-2 pr-4 text-right font-medium">สถานะ</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={`${r.client}-${r.task}`}
                className={`border-b border-line/70 ${r.status === "รอเอกสาร" ? "bg-accent-soft/40" : ""}`}
              >
                <td className="py-2 pl-4 pr-2 text-foreground">{r.client}</td>
                <td className="px-2 py-2 text-muted">{r.task}</td>
                <td className="px-2 py-2 text-right tabular-nums text-muted">{r.due}</td>
                <td className="py-2 pl-2 pr-4 text-right">
                  <StatusPill status={r.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* status footer — counts tie: 6 + 15 + 3 = 24 */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-line bg-surface/70 px-4 py-2.5 text-[11px] tabular-nums text-muted">
          <span className="font-medium text-foreground">ทั้งหมด 24 งาน</span>
          <span>เสร็จแล้ว 6</span>
          <span>กำลังทำ 15</span>
          <span className="ml-auto rounded-md bg-accent-soft px-2 py-0.5 font-semibold text-accent-ink">
            รอเอกสาร 3
          </span>
        </div>
      </div>
    </div>
  );
}
