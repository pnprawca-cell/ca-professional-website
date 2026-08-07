/**
 * PractiFlowFeatureArt — six small product fragments, one per feature card. Each is a
 * different UI shape (a due list, a client record, cost bars, an invoice line, a team
 * roster, a chart), so the feature grid doesn't read as six variations of one icon.
 *
 * Same material as ProductPeek / PractiFlowPeek: an Oat mat holding white rows,
 * hairline Dune borders, no shadow. Terracotta appears in only three of the six
 * (near-due, loss-making, overdue) — the One Seal Rule still applies across a grid.
 *
 * Decorative: each card's heading and body carry the meaning, so the art is aria-hidden.
 */

import type { ReactNode } from "react";

function Frame({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="mb-5 h-28 overflow-hidden rounded-xl border border-line bg-surface p-2.5"
    >
      {children}
    </div>
  );
}

function Row({ children, tinted = false }: { children: ReactNode; tinted?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-md border px-2 py-1 text-[11px] leading-snug ${
        tinted ? "border-accent-soft bg-accent-soft" : "border-line bg-card"
      }`}
    >
      {children}
    </div>
  );
}

/* 1 — งานและ Deadline */
export function DeadlineArt() {
  return (
    <Frame>
      <div className="space-y-1.5">
        <Row>
          <span className="text-foreground">ภ.พ.30 ก.ค.</span>
          <span className="ml-auto tabular-nums text-muted">15 ส.ค.</span>
        </Row>
        <Row tinted>
          <span className="font-medium text-accent-ink">ภ.ง.ด.1 ก.ค.</span>
          <span className="ml-auto font-medium tabular-nums text-accent-ink">อีก 2 วัน</span>
        </Row>
        <Row>
          <span className="text-foreground">ประกันสังคม ก.ค.</span>
          <span className="ml-auto tabular-nums text-muted">15 ส.ค.</span>
        </Row>
      </div>
    </Frame>
  );
}

/* 2 — ฐานข้อมูลลูกค้า */
export function ClientRecordArt() {
  return (
    <Frame>
      <div className="h-full rounded-md border border-line bg-card px-2.5 py-2">
        <p className="text-[11px] font-semibold tracking-tight">บจ. รุ่งเรืองการค้า</p>
        <p className="mt-0.5 text-[10px] tabular-nums text-muted">ทะเบียนนิติบุคคล 0105558000123</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {["ภ.พ.30 รายเดือน", "ปิดงบ 31 ธ.ค.", "ผู้ติดต่อ 2"].map((tag) => (
            <span
              key={tag}
              className="rounded border border-line px-1.5 py-0.5 text-[10px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* 3 — เวลาและต้นทุนงาน */
const costBars = [
  { client: "รุ่งเรืองการค้า", width: "w-[78%]", margin: "+34%", loss: false },
  { client: "สยามวัสดุภัณฑ์", width: "w-[52%]", margin: "+11%", loss: false },
  { client: "เค.ที. ฟู้ดส์", width: "w-[88%]", margin: "−6%", loss: true },
];

export function CostArt() {
  return (
    <Frame>
      <div className="space-y-2 pt-1">
        {costBars.map((b) => (
          <div key={b.client} className="flex items-center gap-2 text-[10px]">
            <span className="w-[70px] shrink-0 truncate text-muted">{b.client}</span>
            <span className="h-1.5 flex-1 rounded-full bg-line">
              <span
                className={`block h-full rounded-full ${b.width} ${
                  b.loss ? "bg-accent" : "bg-foreground"
                }`}
              />
            </span>
            <span
              className={`w-9 shrink-0 text-right tabular-nums ${
                b.loss ? "font-medium text-accent-ink" : "text-muted"
              }`}
            >
              {b.margin}
            </span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* 4 — ใบแจ้งหนี้และเก็บเงิน */
export function InvoiceArt() {
  return (
    <Frame>
      <div className="space-y-1.5">
        <Row>
          <span className="tabular-nums text-muted">INV-2569-041</span>
          <span className="ml-auto tabular-nums text-foreground">18,000</span>
          <span className="text-muted">ชำระแล้ว</span>
        </Row>
        <Row>
          <span className="tabular-nums text-muted">INV-2569-042</span>
          <span className="ml-auto tabular-nums text-foreground">9,500</span>
          <span className="font-medium text-accent-ink">ค้าง 15 วัน</span>
        </Row>
        <div className="flex items-center px-2 pt-0.5 text-[10px]">
          <span className="text-muted">ค้างรับรวม</span>
          <span className="ml-auto font-semibold tabular-nums text-foreground">142,300</span>
        </div>
      </div>
    </Frame>
  );
}

/* 5 — มอบหมายงานในทีม */
const team = [
  { initials: "ณฐ", name: "ณัฐพล", load: "w-[85%]", count: "9 งาน" },
  { initials: "พร", name: "พรทิพย์", load: "w-[60%]", count: "6 งาน" },
  { initials: "สม", name: "สมชาย", load: "w-[35%]", count: "4 งาน" },
];

export function TeamArt() {
  return (
    <Frame>
      <div className="space-y-2 pt-1">
        {team.map((t) => (
          <div key={t.name} className="flex items-center gap-2 text-[10px]">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line bg-card text-[9px] font-medium text-foreground">
              {t.initials}
            </span>
            <span className="w-[48px] shrink-0 truncate text-muted">{t.name}</span>
            <span className="h-1.5 flex-1 rounded-full bg-line">
              <span className={`block h-full rounded-full bg-foreground ${t.load}`} />
            </span>
            <span className="w-[34px] shrink-0 text-right tabular-nums text-muted">{t.count}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* 6 — รายงานผู้บริหาร */
const months = [
  { m: "มี.ค.", h: "h-[38%]" },
  { m: "เม.ย.", h: "h-[52%]" },
  { m: "พ.ค.", h: "h-[45%]" },
  { m: "มิ.ย.", h: "h-[68%]" },
  { m: "ก.ค.", h: "h-[80%]" },
  { m: "ส.ค.", h: "h-[95%]" },
];

export function ReportArt() {
  return (
    <Frame>
      <div className="flex h-full gap-2">
        <div className="flex w-[62px] shrink-0 flex-col justify-center rounded-md border border-line bg-card px-2 py-1.5">
          <span className="text-[9px] leading-tight text-muted">รายได้ ส.ค.</span>
          <span className="text-[12px] font-semibold tabular-nums tracking-tight">248,000</span>
        </div>
        <div className="flex flex-1 items-end gap-1.5">
          {months.map((b) => (
            <span key={b.m} className="flex h-full flex-1 flex-col gap-1">
              <span className="relative flex-1">
                <span className={`absolute inset-x-0 bottom-0 rounded-sm bg-foreground ${b.h}`} />
              </span>
              <span className="shrink-0 text-center text-[8px] leading-none text-muted">{b.m}</span>
            </span>
          ))}
        </div>
      </div>
    </Frame>
  );
}
