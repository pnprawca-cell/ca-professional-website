"use client";

import { useRef, useState } from "react";

const specialties = [
  "ผลิต",
  "ซื้อมาขายไป",
  "ก่อสร้าง",
  "บริการ",
  "โรงแรม",
  "อสังหาริมทรัพย์",
  "BOI",
];

export function AuditServiceCard() {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card transition-shadow hover:shadow-sm">
      <div className="p-6 md:p-8">
        <h3 className="text-lg font-semibold tracking-tight md:text-xl">
          ตรวจสอบงบการเงินประจำปี
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          สำหรับบริษัทจำกัดและห้างหุ้นส่วน พร้อมรายงานของผู้สอบบัญชีรับอนุญาต
        </p>

        {/* จุดขายสำคัญ — โชว์ตลอด ไม่ซ่อนหลังคลิก */}
        <ul className="mt-5 flex flex-wrap gap-2">
          {specialties.map((s) => (
            <li
              key={s}
              className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent-ink"
            >
              {s}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="audit-detail"
          className="mt-5 flex items-center gap-1.5 text-sm font-medium text-accent-ink"
        >
          {open ? "ย่อรายละเอียด" : "ดูแนวการทำงานของเรา"}
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full bg-accent-soft transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 4.5L6 8l3.5-3.5"
                stroke="var(--accent-ink)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* motion: แตกคำอธิบายเมื่อคลิก — ใช้ height แบบวัดจริง (รองรับทุกเบราว์เซอร์) */}
      <div
        id="audit-detail"
        role="region"
        aria-label="แนวการทำงาน"
        style={{ height: open ? contentRef.current?.scrollHeight ?? undefined : 0 }}
        className={`overflow-hidden transition-[height,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        <div ref={contentRef} className="mx-6 border-t border-line pb-6 pt-5 md:mx-8 md:pb-8">
          <p className="text-[15px] leading-relaxed text-foreground">
            ผู้สอบบัญชีของเราลงลึกในลักษณะเฉพาะของแต่ละอุตสาหกรรม อ่านงบได้ตรงประเด็น
            ไม่ใช่แค่เซ็นชื่อรับรอง ครอบคลุมถึงกิจการที่ได้รับส่งเสริมการลงทุน (BOI)
            พร้อมอธิบายทุกประเด็นและรายการปรับปรุงให้เข้าใจได้จริง
          </p>
        </div>
      </div>
    </div>
  );
}
