"use client";

import { useState } from "react";

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

      {/* motion: แตกคำอธิบายเมื่อคลิก — ย่อ/ขยายด้วย grid-template-rows 0fr→1fr
          ไม่ต้องวัดความสูง จึงไหลตามข้อความใหม่เสมอเมื่อ resize หรือฟอนต์โหลดเสร็จ */}
      <div
        id="audit-detail"
        role="region"
        aria-label="แนวการทำงาน"
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        {/* min-h-0 + overflow-hidden คือเงื่อนไขที่ทำให้แถวยุบเหลือ 0 ได้จริง
            และตัวนี้ต้องไม่มี padding/border เอง ไม่งั้นความสูงจะไม่เป็นศูนย์ */}
        <div className="min-h-0 overflow-hidden">
          <div className="mx-6 border-t border-line pb-6 pt-5 md:mx-8 md:pb-8">
            <p className="text-[15px] leading-relaxed text-foreground">
              ผู้สอบบัญชีของเราลงลึกในลักษณะเฉพาะของแต่ละอุตสาหกรรม อ่านงบได้ตรงประเด็น
              ไม่ใช่แค่เซ็นชื่อรับรอง ครอบคลุมถึงกิจการที่ได้รับส่งเสริมการลงทุน (BOI)
              พร้อมอธิบายทุกประเด็นและรายการปรับปรุงให้เข้าใจได้จริง
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
