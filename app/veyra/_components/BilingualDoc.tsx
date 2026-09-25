import type { ReactNode } from "react";

export type DocSection = {
  title: string;
  body: ReactNode[];
};

/**
 * เว็บนี้ยังไม่มีระบบสลับภาษา จึงแสดงฉบับอังกฤษก่อนแล้วตามด้วยฉบับไทยในหน้าเดียว
 * ใส่ lang ให้แต่ละฉบับ เพื่อให้ screen reader และ Google อ่านภาษาได้ถูก (html หลักเป็น lang="th")
 */
export function BilingualDoc({ en, th }: { en: DocSection[]; th: DocSection[] }) {
  return (
    <div className="max-w-3xl">
      <nav aria-label="Language" className="flex gap-3 text-sm font-medium text-accent-ink">
        <a href="#en" className="hover:underline">
          English
        </a>
        <span aria-hidden="true" className="text-muted">
          ·
        </span>
        <a href="#th" className="hover:underline">
          ภาษาไทย
        </a>
      </nav>

      <div id="en" lang="en" className="mt-10 scroll-mt-20 space-y-10">
        {en.map((s) => (
          <DocBlock key={s.title} section={s} />
        ))}
      </div>

      <hr className="my-16 border-line" />

      <div id="th" lang="th" className="scroll-mt-20 space-y-10">
        {th.map((s) => (
          <DocBlock key={s.title} section={s} />
        ))}
      </div>
    </div>
  );
}

function DocBlock({ section }: { section: DocSection }) {
  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
      {section.body.map((paragraph, i) => (
        <div key={i} className="mt-3 leading-relaxed text-muted">
          {paragraph}
        </div>
      ))}
    </div>
  );
}

/** ลิงก์ในเนื้อหา — ขีดเส้นใต้ให้เห็นว่าเป็นลิงก์ (สำคัญกับลิงก์ที่ Google ตรวจ เช่น User Data Policy) */
export function DocLink({ href, children }: { href: string; children: ReactNode }) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className="break-words text-accent-ink underline underline-offset-2 hover:opacity-85"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
