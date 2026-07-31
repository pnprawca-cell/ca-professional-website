/**
 * เนื้อหาเว็บไซต์ทั้งหมดรวมไว้ที่ไฟล์เดียว (ภาษาไทย)
 * เมื่อต้องการเพิ่มภาษาอังกฤษ: สร้าง content/site.en.ts ที่มี shape เดียวกัน
 * แล้วเพิ่ม route กลุ่ม /en/ ที่ import ไฟล์นั้นแทน
 */

export const siteUrl = "https://ca-professional.com";

export const company = {
  nameEn: "CA Professional Services Co., Ltd.",
  nameTh: "บริษัท ซีเอ โปรเฟสชั่นแนล เซอร์วิสเซส จำกัด",
  shortName: "CA Professional",
  tagline: "สำนักงานสอบบัญชีที่สร้างเครื่องมือของตัวเอง",
  // TODO: อัปเดตอีเมลบริษัทจริงก่อนเผยแพร่
  email: "chonnikan.apitanakun@gmail.com",
  line: "@caprofessional",
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
      "จัดการงานตรวจสอบตั้งแต่วางแผนจนออกหน้ารายงาน — กระดาษทำการ, Lead Schedule, Materiality, Cal Tax และงบการเงิน NPAE ในที่เดียว",
    // TODO: เปลี่ยนเป็น URL ระบบจริงเมื่อเปิดใช้งาน
    appUrl: "https://app.ca-professional.com/auditflow",
  },
  practiflow: {
    name: "PractiFlow",
    category: "Practice Management",
    tagline: "ระบบบริหารสำนักงานบัญชีและสอบบัญชี",
    description:
      "ติดตามงานทุกลูกค้า ทุก deadline ทุกใบแจ้งหนี้ — เห็นภาพรวมทั้งสำนักงานในหน้าจอเดียว",
    // TODO: เปลี่ยนเป็น URL ระบบจริงเมื่อเปิดใช้งาน
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
