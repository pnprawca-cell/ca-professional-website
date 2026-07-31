"use client";

import { useState } from "react";
import Link from "next/link";
import { company } from "@/content/site";

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
  "w-full rounded-lg border border-line bg-card px-4 py-2.5 text-[15px] outline-none transition-colors focus:border-accent";

export default function EarlyAccessForm({ productName }: { productName: string }) {
  const [form, setForm] = useState({
    name: "",
    firmName: "",
    role: roles[0],
    teamSize: teamSizes[0],
    phone: "",
    email: "",
    edition: editions[2],
  });
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm({ ...form, [key]: e.target.value });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `[Early Access] ${productName} — ${form.name}`;
    const body = [
      `ขอลงชื่อใช้งาน ${productName} ก่อนใคร`,
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
          ยินยอมให้ {company.shortName} เก็บข้อมูลข้างต้นเพื่อติดต่อกลับและแจ้งข่าวการเปิดใช้งาน{" "}
          {productName} ตาม{" "}
          <Link href="/legal/privacy" className="font-medium text-accent-ink hover:underline">
            นโยบายความเป็นส่วนตัว
          </Link>{" "}
          <span className="text-accent-ink">*</span>
        </span>
      </label>

      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-foreground px-5 py-3 font-medium text-background transition-opacity hover:opacity-85 md:w-auto"
      >
        ลงชื่อรับสิทธิ์ก่อนใคร
      </button>

      <p className="mt-4 text-sm text-muted">
        {sent
          ? "ระบบเปิดโปรแกรมอีเมลพร้อมข้อมูลของคุณแล้ว — กดส่งในโปรแกรมอีเมลได้เลย เราจะติดต่อกลับภายใน 1 วันทำการ"
          : "กดแล้วระบบจะเปิดโปรแกรมอีเมลพร้อมข้อมูลที่กรอกไว้ให้ — ไม่มีข้อผูกมัดใด ๆ"}
      </p>
    </form>
  );
}
