import { formspreeFormId } from "@/content/site";

/** มี backend รับฟอร์มจริงหรือยัง — ใช้ตัดสินทั้งพฤติกรรมฟอร์มและข้อความหน้า privacy */
export const hasFormBackend = formspreeFormId.length > 0;

/**
 * ส่งข้อมูล lead เข้า Formspree — โยน error เมื่อส่งไม่สำเร็จ
 * ให้ฝั่งฟอร์มจัดการแสดง fallback (mailto) เอง
 */
export async function submitLead(fields: Record<string, string>): Promise<void> {
  const res = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(fields),
  });
  if (!res.ok) {
    throw new Error(`ส่งฟอร์มไม่สำเร็จ (${res.status})`);
  }
}
