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
/faq                    คำถามที่พบบ่อย 2 กลุ่ม (SME / สำนักงานบัญชี) — เนื้อหาที่ content/faq.ts
/about                  เกี่ยวกับเรา (ความเชื่อ, เส้นทางบริษัท)
/legal/privacy          นโยบายความเป็นส่วนตัว (PDPA) — ลิงก์จาก footer และ consent ในฟอร์ม
/contact                ฟอร์มขอให้ติดต่อกลับ + ช่องทางติดต่อ
/login                  ทางเข้าระบบ Online — ลิงก์ไป AuditFlow / PractiFlow (appUrl ใน content/site.ts)
```

### หมายเหตุฟอร์ม
ฟอร์มหน้า /contact และฟอร์ม Early Access (หน้า /products/auditflow) ต่อ Formspree แล้ว (31 ก.ค. 2569)
แต่จะทำงานเมื่อใส่ `formspreeFormId` ใน `content/site.ts` — ระหว่างที่ยังว่าง ฟอร์มจะ fallback
เป็นเปิดโปรแกรมอีเมล (mailto) แบบเดิม และหน้า /legal/privacy ข้อ 2 สลับข้อความตามกลไกที่ใช้อยู่อัตโนมัติ
(logic กลางอยู่ที่ `lib/submitLead.ts` — ฟอร์มทั้งสองใช้ form ID เดียวกัน แยกประเภทด้วย field "ประเภทฟอร์ม")

วิธีเปิดใช้: สมัคร formspree.io (ฟรี 50 submissions/เดือน) → New Form → ตั้งอีเมลรับเป็นอีเมลบริษัท
→ คัดลอก form ID (ตัวท้ายของ endpoint เช่น `mqkvabcd`) มาใส่ `formspreeFormId` ใน `content/site.ts`

### ฟอร์ม Early Access (รองรับ Gate 0 pre-sell ของ Audit Platform Phase 2)
- component: `components/EarlyAccessForm.tsx` (รับ prop `productName`)
- ฝังท้ายหน้า /products/auditflow และ /products/practiflow (31 ก.ค. 2569) พร้อม consent checkbox อ้างหน้า privacy
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
- [x] Deploy ขึ้น Vercel + ต่อ DNS กับ Z.com เสร็จแล้ว (31 ก.ค. 2569) — repo: github.com/pnprawca-cell/ca-professional-website
      `ca-professional.com` เป็น production domain หลัก (A record → 216.198.79.1), `www.ca-professional.com` ตั้ง 307 redirect มาที่ apex แล้ว — ยืนยันด้วย curl ทั้งสอง URL แล้ว
- [x] เลขทะเบียนนิติบุคคล + เลขที่ใบอนุญาตผู้สอบบัญชี — ใส่ในโค้ดแล้ว โชว์ที่ footer ทุกหน้า (`content/site.ts`, `components/Footer.tsx`)
- [x] เบอร์โทร — พราวให้ลบทิ้ง (31 ก.ค. 2569) ไม่ต้องมี ตัดออกจาก `content/site.ts` และหน้า /contact แล้ว
- [ ] อัปเดตอีเมลบริษัทจริงใน `content/site.ts` — ตอนนี้ยังใช้ gmail ส่วนตัว, LINE `@caprofessional` ยืนยันเป็นของจริงแล้ว (31 ก.ค. 2569)
- [ ] สมัคร Formspree แล้วใส่ `formspreeFormId` ใน `content/site.ts` (โค้ดฟอร์ม + privacy รองรับแล้ว — ดู "หมายเหตุฟอร์ม" ด้านบน)
- [x] เพิ่มหน้า privacy policy (PDPA) — `/legal/privacy` (22 ก.ค. 2569)
- [x] Open Graph image + favicon — generate จากโค้ดด้วยธีมแบรนด์แล้ว (31 ก.ค. 2569: `app/opengraph-image.tsx`, `app/icon.tsx` + sitemap/robots/404/JSON-LD)
      ยังใช้ mark ตัวอักษร "CA" อยู่ — เมื่อมีโลโก้จริง แทนได้ด้วยไฟล์ `app/opengraph-image.png` / `app/icon.png`
      หมายเหตุ: ข้อความบนภาพ OG เป็นอังกฤษ เพราะ engine วาดภาพของ Next วางวรรณยุกต์ไทยซ้อนสระบนไม่ได้ (รายละเอียดใน comment ของไฟล์)
