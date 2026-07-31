"use client";

import { useState } from "react";
import { company } from "@/content/site";

const interests = [
  "งานสอบบัญชี — ขอใบเสนอราคา",
  "AuditFlow (Audit Platform) — นัด demo",
  "PractiFlow (Practice Management) — นัด demo",
  "อื่น ๆ / คำถามทั่วไป",
];

const inputClass =
  "w-full rounded-lg border border-line bg-card px-4 py-2.5 text-[15px] outline-none transition-colors focus:border-accent";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    interest: interests[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [key]: e.target.value });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
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

      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-foreground px-5 py-3 font-medium text-background transition-opacity hover:opacity-85 md:w-auto"
      >
        ส่งข้อมูลให้ติดต่อกลับ
      </button>

      <p className="mt-4 text-sm text-muted">
        {sent
          ? "ระบบเปิดโปรแกรมอีเมลพร้อมข้อมูลของคุณแล้ว — กดส่งในโปรแกรมอีเมลได้เลย เราจะติดต่อกลับภายใน 1 วันทำการ"
          : "กดส่งแล้วระบบจะเปิดโปรแกรมอีเมลพร้อมข้อมูลที่กรอกไว้ให้ — เราติดต่อกลับภายใน 1 วันทำการ"}
      </p>
    </form>
  );
}
