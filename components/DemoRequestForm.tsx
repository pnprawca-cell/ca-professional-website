"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { company } from "@/content/site";
import { hasFormBackend, submitLead } from "@/lib/submitLead";

const roles = [
  "ผู้สอบบัญชีรับอนุญาต (CPA) อิสระ",
  "สำนักงานสอบบัญชี",
  "สำนักงานบัญชี (รับทำบัญชีเป็นหลัก)",
  "อื่น ๆ",
];

const teamSizes = ["ทำคนเดียว", "2–5 คน", "6–15 คน", "16 คนขึ้นไป"];

const editions = [
  "Cloud (Online) — subscription รายปี",
  "Desktop (Offline) — ข้อมูลอยู่ในเครื่องเรา",
  "ยังไม่แน่ใจ ขอดู demo ก่อน",
];

const inputClass =
  "w-full rounded-lg border border-line bg-card px-4 py-2.5 text-[15px] outline-none transition-colors placeholder:text-muted focus:border-accent";

/**
 * ฟอร์มขอนัด demo ท้ายหน้า product — ทั้ง AuditFlow และ PractiFlow เปิดขายแล้ว
 * ฟอร์มนี้จึงเป็นการขอให้ติดต่อกลับเพื่อนัดดูระบบ ไม่ใช่การลงชื่อรอคิว
 *
 * cloudOnly: ผลิตภัณฑ์ที่ขายเฉพาะรุ่น Online (PractiFlow) ไม่ต้องถามว่าสนใจรุ่นไหน
 * แต่ยังส่งค่ารุ่นไปกับลีดเพื่อให้ทีมขายอ่านได้เหมือนกันทุกฟอร์ม
 */
export default function DemoRequestForm({
  productName,
  cloudOnly = false,
}: {
  productName: string;
  cloudOnly?: boolean;
}) {
  const [form, setForm] = useState({
    name: "",
    firmName: "",
    role: roles[0],
    teamSize: teamSizes[0],
    phone: "",
    email: "",
    edition: cloudOnly ? "Cloud (Online)" : editions[2],
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error" | "sent-mailto"
  >("idle");
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const isSuccess = status === "success";

  /* บล็อกสำเร็จมาแทนที่ทั้งฟอร์ม ปุ่มส่งที่ถือโฟกัสอยู่จึงหายไปและโฟกัสตกไปที่ body
     ย้ายโฟกัสมาที่หัวข้อเพื่อให้ screen reader อ่านผลลัพธ์ต่อจากจุดเดิม */
  useEffect(() => {
    if (isSuccess) successHeadingRef.current?.focus();
  }, [isSuccess]);

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm({ ...form, [key]: e.target.value });

  const leadSubject = `[นัด Demo] ${productName} — ${form.name}`;
  const leadType = `นัด Demo — ${productName}`;
  const leadOpeningLine = `ขอนัด demo ${productName}`;

  const mailtoHref = () => {
    const subject = leadSubject;
    const body = [
      leadOpeningLine,
      "",
      `ชื่อ: ${form.name}`,
      `สำนักงาน/บริษัท: ${form.firmName || "-"}`,
      `บทบาท: ${form.role}`,
      `ขนาดทีม: ${form.teamSize}`,
      `เบอร์โทร: ${form.phone}`,
      `อีเมล: ${form.email || "-"}`,
      `รุ่นที่สนใจ: ${form.edition}`,
      "",
      "ยินยอมให้เก็บข้อมูลเพื่อติดต่อกลับตามนโยบายความเป็นส่วนตัว: ยินยอม",
    ].join("\n");
    return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!hasFormBackend) {
      window.location.href = mailtoHref();
      setStatus("sent-mailto");
      return;
    }
    setStatus("sending");
    try {
      await submitLead({
        _subject: leadSubject,
        ประเภทฟอร์ม: leadType,
        ชื่อ: form.name,
        "สำนักงาน/บริษัท": form.firmName || "-",
        บทบาท: form.role,
        ขนาดทีม: form.teamSize,
        เบอร์โทร: form.phone,
        อีเมล: form.email || "-",
        รุ่นที่สนใจ: form.edition,
        ความยินยอม: "ยินยอมให้เก็บข้อมูลเพื่อติดต่อกลับตามนโยบายความเป็นส่วนตัว",
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (isSuccess) {
    return (
      <div role="status" className="rounded-2xl border border-line bg-card p-7">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 6.5L5 9l4.5-6" stroke="var(--accent-ink)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div>
            <h3 ref={successHeadingRef} tabIndex={-1} className="font-semibold">
              ได้รับข้อมูลของคุณแล้ว
            </h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
              {`ขอบคุณที่สนใจ ${productName} — ทีมงานจะติดต่อกลับภายใน 1 วันทำการ เพื่อนัดวันเวลา demo`}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-card p-7">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">
            ชื่อของคุณ <span className="text-accent-ink">*</span>
          </span>
          <input required value={form.name} onChange={set("name")} className={inputClass} placeholder="เช่น คุณสมชาย ใจดี" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">สำนักงาน / บริษัท</span>
          <input value={form.firmName} onChange={set("firmName")} className={inputClass} placeholder="ชื่อสำนักงานของคุณ" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">
            บทบาทของคุณ <span className="text-accent-ink">*</span>
          </span>
          <select required value={form.role} onChange={set("role")} className={inputClass}>
            {roles.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">ขนาดทีมตรวจสอบ</span>
          <select value={form.teamSize} onChange={set("teamSize")} className={inputClass}>
            {teamSizes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">
            เบอร์โทรติดต่อกลับ <span className="text-accent-ink">*</span>
          </span>
          <input required type="tel" value={form.phone} onChange={set("phone")} className={inputClass} placeholder="08X-XXX-XXXX" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">อีเมล</span>
          <input type="email" value={form.email} onChange={set("email")} className={inputClass} placeholder="you@example.com" />
        </label>
        {!cloudOnly && (
          <label className="block md:col-span-2">
            <span className="mb-1.5 block text-sm font-medium">รุ่นที่สนใจ</span>
            <select value={form.edition} onChange={set("edition")} className={inputClass}>
              {editions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>

      <label className="mt-5 flex items-start gap-3">
        <input
          required
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 accent-[var(--accent-ink)]"
        />
        <span className="text-sm leading-relaxed text-muted">
          ยินยอมให้ {company.shortName} เก็บข้อมูลข้างต้นเพื่อติดต่อกลับเรื่อง{" "}
          {productName} ตาม{" "}
          <Link href="/legal/privacy" className="font-medium text-accent-ink hover:underline">
            นโยบายความเป็นส่วนตัว
          </Link>{" "}
          <span className="text-accent-ink">*</span>
        </span>
      </label>

      {/* honeypot กันบอท — Formspree ทิ้ง submission ที่ field นี้ถูกกรอก */}
      {hasFormBackend && (
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-lg bg-foreground px-5 py-3 font-medium text-background transition-opacity hover:opacity-85 disabled:opacity-60 md:w-auto"
      >
        {status === "sending" ? "กำลังส่ง..." : "ส่งข้อมูลเพื่อนัด demo"}
      </button>

      {status === "error" ? (
        <p className="mt-4 text-sm leading-relaxed text-muted" role="alert">
          ส่งข้อมูลไม่สำเร็จ ขออภัยครับ — ลองใหม่อีกครั้ง หรือ{" "}
          <a href={mailtoHref()} className="font-medium text-accent-ink hover:underline">
            ส่งเป็นอีเมลแทน
          </a>{" "}
          / ทัก{" "}
          <a href={company.lineUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-accent-ink hover:underline">
            LINE {company.line}
          </a>
        </p>
      ) : status === "sent-mailto" ? (
        /* ยังต้องบอกผู้กรอกว่าเกิดอะไรขึ้นหลังกดส่ง — ข้อความบอกกลไกตอนยังไม่กดถูกตัดออกแล้ว */
        <p className="mt-4 text-sm leading-relaxed text-muted">
          ระบบเปิดโปรแกรมอีเมลพร้อมข้อมูลของคุณแล้ว กดส่งในโปรแกรมอีเมลได้เลย
          เราจะติดต่อกลับภายใน 1 วันทำการ
        </p>
      ) : null}
    </form>
  );
}
