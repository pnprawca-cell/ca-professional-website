# โครงสร้างเว็บไซต์ CA Professional Services

## วัตถุประสงค์
1. ให้ทุกคนรู้จักบริษัท (brand awareness)
2. ขายงานสอบบัญชี
3. ขาย AuditFlow (Audit Platform) — Online + Offline
4. ขาย PractiFlow (Practice Management) — Online + Offline

## กลยุทธ์ domain: เว็บเดียว domain เดียว ✅
ใช้ domain เดียว แยกด้วย path เช่น `caprofessional.co.th`:

- ดีต่อ SEO — ทุกหน้าช่วยสะสม authority ให้ domain เดียวกัน
- ดูแลง่าย ต้นทุนต่ำ เหมาะกับช่วงเริ่มต้น
- แบรนด์บริษัทหนุนแบรนด์ product และกลับกัน

### แผนแตกเว็บในอนาคต (เมื่อ product โต)
| ตอนนี้ | อนาคต |
|---|---|
| `/products/auditflow` | `auditflow.co` หรือ `auditflow.caprofessional.co.th` (301 redirect จาก path เดิม) |
| `/products/practiflow` | `practiflow.co` หรือ subdomain เช่นเดียวกัน |
| — | `app.` สำหรับตัวระบบจริง (login), `download.` สำหรับรุ่น Desktop |

โครงสร้างโค้ดรองรับอยู่แล้ว: เนื้อหา product แยกหน้า แยก folder ชัดเจน ย้ายออกไปเป็นเว็บใหม่ได้โดยไม่กระทบหน้าอื่น

## Sitemap (v1)
```
/                       หน้าแรก — 3 เสาหลัก + ทำไมต้องเรา + CTA
/services/audit         บริการสอบบัญชี (บริการ, ขั้นตอน, เหมาะกับใคร)
/products/auditflow     AuditFlow — Audit Platform (ฟีเจอร์, Online/Offline)
/products/practiflow    PractiFlow — Practice Management (ฟีเจอร์, Online/Offline)
/pricing                แนวทางราคา 3 กลุ่ม
/blog                   บทความบัญชี/ภาษี เพื่อ SEO (เนื้อหาอยู่ที่ content/blog.ts)
/blog/[slug]            หน้าอ่านบทความรายชิ้น
/about                  เกี่ยวกับเรา (ความเชื่อ, เส้นทางบริษัท)
/legal/privacy          นโยบายความเป็นส่วนตัว (PDPA) — ลิงก์จาก footer และ consent ในฟอร์ม
/contact                ฟอร์มขอให้ติดต่อกลับ + ช่องทางติดต่อ
/login                  ทางเข้าระบบ Online — ลิงก์ไป AuditFlow / PractiFlow (appUrl ใน content/site.ts)
```

### หมายเหตุฟอร์ม
ฟอร์มหน้า /contact และฟอร์ม Early Access (หน้า /products/auditflow) ยังไม่มี backend —
กดส่งแล้วเปิดโปรแกรมอีเมลพร้อมข้อมูลที่กรอก (mailto) หน้า privacy เขียนสอดคล้องกับกลไกนี้แล้ว
เมื่อพร้อมเก็บ lead จริงบนเซิร์ฟเวอร์: ต่อ Formspree/Google Sheets หรือทำ API route + ฐานข้อมูล
แล้วต้องปรับข้อ 2 ของหน้า /legal/privacy ให้ตรงกับวิธีเก็บใหม่ด้วย

### ฟอร์ม Early Access (รองรับ Gate 0 pre-sell ของ Audit Platform Phase 2)
- component: `components/EarlyAccessForm.tsx` (รับ prop `productName` — ใช้ซ้ำกับ PractiFlow ได้)
- ฝังท้ายหน้า /products/auditflow พร้อม consent checkbox อ้างหน้า privacy
- เป้าหมาย: เก็บรายชื่อ CPA/สำนักงานที่สนใจก่อนเปิดขายต้นปี 2570 (ดู docs/Audit_Platform_Phase2_Commercial_Plan.md ในโปรเจกต์ Audit-platform)

### หน้าที่ควรเพิ่มภายหลัง
- `/products/*/changelog` — บันทึกอัปเดต product

## ชื่อ product (เลือกใช้แล้ว + ตัวเลือกสำรอง)
| หมวด | ใช้ในเว็บตอนนี้ | ตัวเลือกสำรอง |
|---|---|---|
| Audit Platform | **AuditFlow** | WorkPap, Auditta, CA Audit Suite |
| Practice Management | **PractiFlow** (พราวเลือกแล้ว 2026-07-18) | FirmFlow, FirmDesk, CA Office |

จุดเด่นของคู่ AuditFlow + PractiFlow: ลงท้าย "Flow" เหมือนกัน จำง่าย ขายคู่กันเป็น family เดียว
เปลี่ยนชื่อได้ที่ไฟล์เดียว: `content/site.ts` (แต่ต้อง rename folder `app/products/*` ให้ตรง URL ด้วย)
**ก่อนใช้จริง: เช็คชื่อซ้ำ — เครื่องหมายการค้า (DIP), domain, และ App Store**

## ภาษา
- v1: ไทยล้วน (ลูกค้าหลักคือ SME และสำนักงานบัญชีไทย)
- เนื้อหาทั้งหมดรวมที่ `content/site.ts` — เพิ่ม EN โดยสร้าง `content/site.en.ts`
  แล้วเพิ่ม route กลุ่ม `/en/*` ภายหลังได้โดยไม่ต้องรื้อโครงสร้าง

## Tech / Design
- Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript
- ฟอนต์: Anuphan (Google Fonts, รองรับไทย+ละติน)
- ธีมแบบ Claude: พื้นครีม `#FAF9F5`, ตัวอักษรเข้ม `#1F1E1D`, accent ส้มอิฐ `#C96442`
  — แก้ได้ที่ `app/globals.css` (CSS variables ชุดเดียว)
- Components กลาง: `components/ui.tsx` (PageHero, Section, Card, CTABanner, CheckItem)
- Deploy แนะนำ: Vercel (ฟรี, ต่อ custom domain ได้) หรือ Cloudflare Pages

## สิ่งที่ต้องทำก่อนเผยแพร่จริง (checklist)
- [x] จด domain — **ca-professional.com** (ซื้อแล้ว 31 ก.ค. 2569; เปลี่ยนจากแผนเดิม `caprofessional.co.th` — โค้ดอัปเดต `siteUrl`/`appUrl` ใน `content/site.ts` แล้ว) — ชื่อ product ขั้นสุดท้ายยังรอ confirm (ดู [company-website-project memory])
- [ ] Deploy ขึ้น hosting จริง (แนะนำ Vercel) + ต่อ DNS ของ ca-professional.com เข้ากับ hosting
- [ ] อัปเดตข้อมูลติดต่อจริงใน `content/site.ts` (อีเมลบริษัท @ca-professional.com, เบอร์, LINE, ที่อยู่) — ตอนนี้ยังเป็น placeholder ทั้งหมด
- [ ] ใส่เลขทะเบียนนิติบุคคล / ข้อมูลผู้สอบบัญชีตามที่สภาวิชาชีพกำหนด
- [x] เพิ่มหน้า privacy policy (PDPA) — `/legal/privacy` (22 ก.ค. 2569)
- [ ] ทำ Open Graph image + favicon จริงแทนโลโก้ตัวอักษร "CA"
