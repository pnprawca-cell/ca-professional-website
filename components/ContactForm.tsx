"use client";

import { useState } from "react";
import { company } from "@/content/site";
import { hasFormBackend, submitLead } from "@/lib/submitLead";

const interests = [
  "งานสอบบัญชี — ขอใบเสนอราคา",
  "AuditFlow (Audit Platform) — นัด demo",
  "PractiFlow (Practice Management) — นัด demo",
  "อื่น ๆ / คำถามทั่วไป",
];

const inputClass =
  "w-full rounded-lg border border-line bg-card px-4 py-2.5 text-[15px] outline-none transition-colors focus:border-accent";

type Status = "idle" | "sending" | "success" | "error" | "sent-mailto";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    interest: interests[0],
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [key]: e.target.value });

  const mailtoHref = () => {
    const subject = `[เว็บไซต์] ${form.interest} — ${form.name}`;
    const body = [
      `ชื่อ: ${form.name}`,
      `บริษัท/สำนักงาน: ${form.companyName || "-"}`,
      `เบอร์โทร: ${form.phone}`,
      `อีเมล: ${form.email || "-"}`,
      `เรื่องที่สนใจ: ${form.interest}`,
      "",
      "รายละเอียดเพิ่มเติม:",
      form.message || "-",
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
        _subject: `[เว็บไซต์] ${form.interest} — ${form.name}`,
        ประเภทฟอร์ม: "ฟอร์มติดต่อ (/contact)",
        ชื่อ: form.name,
        "บริษัท/สำนักงาน": form.companyName || "-",
        เบอร์โทร: form.phone,
        อีเมล: form.email || "-",
        เรื่องที่สนใจ: form.interest,
        รายละเอียดเพิ่มเติม: form.message || "-",
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-card p-7">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 6.5L5 9l4.5-6" stroke="var(--accent-ink)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold">ได้รับข้อมูลของคุณแล้ว</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
              ขอบคุณครับ ทีมงานจะติดต่อกลับภายใน 1 วันทำการ — ถ้าเรื่องด่วน ทัก{" "}
              <a href={company.lineUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-accent-ink hover:underline">
                LINE {company.line}
              </a>{" "}
              ได้เลย
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
          <span className="mb-1.5 block text-sm font-medium">บริษัท / สำนักงาน</span>
          <input value={form.companyName} onChange={set("companyName")} className={inputClass} placeholder="ชื่อกิจการของคุณ" />
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
        <label className="block md:col-span-2">
          <span className="mb-1.5 block text-sm font-medium">
            เรื่องที่สนใจ <span className="text-accent-ink">*</span>
          </span>
          <select required value={form.interest} onChange={set("interest")} className={inputClass}>
            {interests.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className="mb-1.5 block text-sm font-medium">รายละเอียดเพิ่มเติม</span>
          <textarea
            rows={4}
            value={form.message}
            onChange={set("message")}
            className={inputClass}
            placeholder="เช่น ประเภทธุรกิจ รายได้ต่อปีโดยประมาณ ขนาดทีม หรือคำถามที่อยากถาม"
          />
        </label>
      </div>

      {/* honeypot กันบอท — Formspree ทิ้ง submission ที่ field นี้ถูกกรอก */}
      {hasFormBackend && (
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-lg bg-foreground px-5 py-3 font-medium text-background transition-opacity hover:opacity-85 disabled:opacity-60 md:w-auto"
      >
        {status === "sending" ? "กำลังส่ง..." : "ส่งข้อมูลให้ติดต่อกลับ"}
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
      ) : (
        <p className="mt-4 text-sm text-muted">
          {status === "sent-mailto"
            ? "ระบบเปิดโปรแกรมอีเมลพร้อมข้อมูลของคุณแล้ว — กดส่งในโปรแกรมอีเมลได้เลย เราจะติดต่อกลับภายใน 1 วันทำการ"
            : hasFormBackend
              ? "ข้อมูลของคุณถูกส่งถึงทีมงานโดยตรง — เราติดต่อกลับภายใน 1 วันทำการ"
              : "กดส่งแล้วระบบจะเปิดโปรแกรมอีเมลพร้อมข้อมูลที่กรอกไว้ให้ — เราติดต่อกลับภายใน 1 วันทำการ"}
        </p>
      )}
    </form>
  );
}
