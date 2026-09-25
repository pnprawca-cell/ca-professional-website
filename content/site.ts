/**
 * เนื้อหาเว็บไซต์ทั้งหมดรวมไว้ที่ไฟล์เดียว (ภาษาไทย)
 * เมื่อต้องการเพิ่มภาษาอังกฤษ: สร้าง content/site.en.ts ที่มี shape เดียวกัน
 * แล้วเพิ่ม route กลุ่ม /en/ ที่ import ไฟล์นั้นแทน
 */

export const siteUrl = "https://ca-professional.com";

/**
 * ระบบสมัครใช้งานและชำระเงินจริง — คนละ origin กับเว็บนี้โดยตั้งใจ
 * (สเปก docs/superpowers/specs/2026-08-07-signup-payment-design.md §2 · คำตัดสิน A5)
 *
 * เว็บนี้เป็นหน้าร้านอย่างเดียว: ไม่มีฐานข้อมูล ไม่รับเงิน ไม่รับไฟล์
 * และไม่เก็บข้อมูลส่วนบุคคลของขั้นตอนสมัคร — ทุกอย่างนั้นเกิดที่พอร์ทัล
 * เหตุผลที่แยก origin: กัน XSS ที่เว็บขายไม่ให้ลามไปถึง session ของระบบสอบบัญชี
 */
export const portalUrl = "https://portal.ca-professional.com";

/**
 * Formspree form ID สำหรับรับข้อมูลฟอร์มบนเซิร์ฟเวอร์ (ฟอร์มติดต่อ + Early Access ใช้ ID เดียวกัน
 * แยกประเภทด้วย field "ประเภทฟอร์ม" ในข้อมูลที่ส่ง)
 * วิธีเปิดใช้: สมัครที่ formspree.io → สร้าง form → คัดลอก ID (เช่น "mqkvabcd") มาใส่ที่นี่
 * ถ้าเว้นว่าง: ฟอร์มจะ fallback เป็นเปิดโปรแกรมอีเมล (mailto) แบบเดิม
 * และหน้า /legal/privacy ข้อ 2 จะแสดงข้อความให้ตรงกับกลไกที่ใช้อยู่โดยอัตโนมัติ
 */
export const formspreeFormId = "";

export const company = {
  nameEn: "CA Professional Services Co., Ltd.",
  nameTh: "บริษัท ซีเอ โปรเฟสชั่นแนล เซอร์วิสเซส จำกัด",
  shortName: "CA Professional",
  tagline: "สำนักงานสอบบัญชีที่สร้างเครื่องมือของตัวเอง",
  email: "info@ca-professional.com",
  line: "lin.ee/yv4KFrB",
  lineUrl: "https://lin.ee/yv4KFrB",
  lineQrSrc: "/line-qr.png",
  address: "กรุงเทพมหานคร ประเทศไทย",
  registrationNumber: "0105569072844",
  auditorLicenseNumber: "13466",
};

export const products = {
  auditflow: {
    name: "AuditFlow",
    category: "Audit Platform",
    tagline: "แพลตฟอร์มงานสอบบัญชีครบวงจร สำหรับผู้สอบบัญชีไทย",
    description:
      "จัดการงานตรวจสอบตั้งแต่วางแผนจนออกหน้ารายงาน รวมกระดาษทำการ Lead Schedule Materiality Cal Tax และงบการเงิน NPAE ไว้ในที่เดียว",
    /**
     * ระบบ AuditFlow ที่ใช้งานจริง (Cloudflare Tunnel → เครื่องออฟฟิศ · ดู Audit-platform/deploy/README.md)
     * host นี้มี Cloudflare Access ครอบ (One-time PIN เฉพาะอีเมลที่อนุญาต) — คนนอก allowlist จะติดหน้า Access
     * เมื่อเปิดที่อยู่แยกต่อสำนักงาน (`<slug>.ca-professional.com`) แล้ว ค่อยกลับมาแก้บรรทัดนี้
     */
    loginUrl: "https://app.ca-professional.com/login",
  },
  practiflow: {
    name: "PractiFlow",
    category: "Practice Management",
    tagline: "ระบบบริหารสำนักงานบัญชีและสอบบัญชี",
    description:
      "ติดตามงานทุกลูกค้า ทุก deadline ทุกใบแจ้งหนี้ เห็นภาพรวมทั้งสำนักงานในหน้าจอเดียว",
    /** PractiFlow แยกข้อมูลแบบ row-level จึงอยู่ host เดียวทั้งระบบ (สเปก §2 ตาราง DNS) */
    loginUrl: "https://pm.ca-professional.com",
  },
} satisfies Record<string, { loginUrl: string } & Record<string, unknown>>;

export type ProductKey = keyof typeof products;

/** รอบการชำระเงินที่พอร์ทัลรับ — ตรงกับ `BillingCycle` ใน Audit-platform */
export type SignupCycle = "monthly" | "annual";

/**
 * รหัสแผนที่ส่งไปให้พอร์ทัลผ่าน `?plan=`
 *
 * auditflow  — ยืนยันแล้วว่าตรงกับ `PlanId` ใน Audit-platform/src/lib/billing/defs.ts
 * practiflow — ชั้นสิทธิของ PractiFlow ยังไม่ถูกสร้าง (สเปก §6 อยู่ในช่วงที่ 4)
 *              รหัสชุดนี้จึงเป็นข้อเสนอจากฝั่งเว็บ ตั้งชื่อตามแบบเดียวกับ `online_NN`
 *              คือ `pm_<โควตาลูกค้า>` ถ้าฝั่ง PractiFlow ตั้งชื่ออื่น ต้องกลับมาแก้ที่นี่
 */
export type SignupPlan =
  | "free"
  | "online_10"
  | "online_50"
  | "online_100"
  | "pm_trial"
  | "pm_30"
  | "pm_120"
  | "pm_300";

/**
 * ลิงก์ไปหน้าสมัครที่พอร์ทัล พร้อมพาแผนที่ผู้ใช้กดมาด้วย
 * path `/signup` ตามที่สเปก §3 เขียนเส้นทางลูกค้าไว้ (ฝั่งพอร์ทัลผูก host → route ใน §5.1)
 * ไม่ใส่ `cycle` กับแผนฟรีและแผนทดลอง เพราะไม่มีรอบบิลให้เลือก
 */
export function signupUrl(opts: {
  product: ProductKey;
  plan?: SignupPlan;
  cycle?: SignupCycle;
}): string {
  const query = new URLSearchParams({ product: opts.product });
  if (opts.plan) query.set("plan", opts.plan);
  if (opts.cycle) query.set("cycle", opts.cycle);
  return `${portalUrl}/signup?${query.toString()}`;
}

export const nav = [
  { label: "บริการสอบบัญชี", href: "/services/audit" },
  { label: "AuditFlow", href: "/products/auditflow" },
  { label: "PractiFlow", href: "/products/practiflow" },
  { label: "Veyra", href: "/veyra" },
  { label: "ราคา", href: "/pricing" },
  { label: "บทความ", href: "/blog" },
  { label: "เกี่ยวกับเรา", href: "/about" },
];
