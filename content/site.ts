/**
 * เนื้อหาเว็บไซต์ทั้งหมดรวมไว้ที่ไฟล์เดียว (ภาษาไทย)
 * เมื่อต้องการเพิ่มภาษาอังกฤษ: สร้าง content/site.en.ts ที่มี shape เดียวกัน
 * แล้วเพิ่ม route กลุ่ม /en/ ที่ import ไฟล์นั้นแทน
 */

export const siteUrl = "https://ca-professional.com";

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
     * ค่า placeholder — ยังไม่มีระบบที่ URL นี้ และตอนนี้ไม่มีหน้าไหนในเว็บลิงก์มาที่นี่
     * (หน้า /login ให้ติดต่อทีมงานเปิดบัญชีให้แทน เพราะยังไม่มีระบบสมัครด้วยตัวเอง)
     * เมื่อระบบเปิดใช้งานจริง: แก้เป็น URL จริง แล้วค่อยเปลี่ยนปุ่มในหน้า /login ให้ชี้มาที่ค่านี้
     */
    appUrl: "https://app.ca-professional.com/auditflow",
  },
  practiflow: {
    name: "PractiFlow",
    category: "Practice Management",
    tagline: "ระบบบริหารสำนักงานบัญชีและสอบบัญชี",
    description:
      "ติดตามงานทุกลูกค้า ทุก deadline ทุกใบแจ้งหนี้ เห็นภาพรวมทั้งสำนักงานในหน้าจอเดียว",
    /**
     * ค่า placeholder — ยังไม่มีระบบที่ URL นี้ และตอนนี้ไม่มีหน้าไหนในเว็บลิงก์มาที่นี่
     * (หน้า /login ให้ติดต่อทีมงานเปิดบัญชีให้แทน เพราะยังไม่มีระบบสมัครด้วยตัวเอง)
     * เมื่อระบบเปิดใช้งานจริง: แก้เป็น URL จริง แล้วค่อยเปลี่ยนปุ่มในหน้า /login ให้ชี้มาที่ค่านี้
     */
    appUrl: "https://app.ca-professional.com/practiflow",
  },
};

export const nav = [
  { label: "บริการสอบบัญชี", href: "/services/audit" },
  { label: "AuditFlow", href: "/products/auditflow" },
  { label: "PractiFlow", href: "/products/practiflow" },
  { label: "ราคา", href: "/pricing" },
  { label: "บทความ", href: "/blog" },
  { label: "เกี่ยวกับเรา", href: "/about" },
];
