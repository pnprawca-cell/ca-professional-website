/**
 * ค่าที่ใช้ร่วมกันของหน้า Veyra (/veyra, /veyra/privacy, /veyra/terms)
 * หน้าเหล่านี้ใช้กรอก OAuth consent screen ของ Google — ข้อความในนโยบายต้องตรงกับการทำงานจริงของแอป
 * ถ้าแอปเปลี่ยน scope ที่ขอ / ที่เก็บข้อมูล / ผู้ประมวลผลภายนอก ต้องกลับมาแก้หน้า privacy ด้วย
 */
import { company } from "@/content/site";

export const veyra = {
  name: "Veyra",
  contactEmail: company.email,
  effectiveDate: {
    en: "25 September 2026",
    th: "25 กันยายน 2569",
  },
  /** Scope ที่แอปขอจาก Google จริง — แสดงในหน้า privacy ตามลำดับนี้ */
  googleScopes: ["openid", "email", "https://www.googleapis.com/auth/calendar.readonly"],
  googleUserDataPolicyUrl: "https://developers.google.com/terms/api-services-user-data-policy",
  googlePermissionsUrl: "https://myaccount.google.com/permissions",
};
