# Prompt ส่งงาน — หน้าสมัครและชำระเงิน 2 product

คู่กับ `2026-08-07-signup-payment-design.md` · เปิด session ใหม่ในโฟลเดอร์ที่ระบุ แล้ววาง prompt ทั้งบล็อก

**ลำดับ:** 1 → 2 → (3 ขนานได้) → 4 → 5 · prompt 3 (เว็บ) ทำพร้อม 2 ได้ แต่อย่า merge ก่อน 2 ขึ้นจริง ไม่งั้นปุ่มบนเว็บจะพาไปหน้าที่ยังไม่มี

---

## Prompt 1 — Audit-platform · ช่วง 1: ปิดช่องโหว่ + แก้ราคา

**โฟลเดอร์:** `C:\Users\pnoun\.claude\Audit-platform`

```
อ่านสเปกนี้ก่อนเริ่ม: C:\Users\pnoun\.claude\website\docs\superpowers\specs\2026-08-07-signup-payment-design.md
ทำเฉพาะช่วงที่ 1 ตามตารางใน §13 เท่านั้น — คือ §5.2 กับ §5.6 ห้ามทำช่วงอื่น

บริบท: เรากำลังจะเปิดหน้าสมัครสาธารณะที่ portal.ca-professional.com (พราวเคาะ 7 ส.ค. 2569)
ช่วงนี้คืองานที่ต้องเสร็จก่อนปุ่มสมัครขึ้นเว็บ และทำได้ทันทีโดยไม่ต้องรออะไร

งานที่ 1 — ปิดช่องยึด tenant (§5.2)
วันนี้ /setup เปิดให้ใครก็ได้ที่รู้ URL ตราบใดที่ tenant ยังไม่มีผู้ใช้สักคน
(src/app/setup/page.tsx เรียก needsFirstRunSetup()) ตอนนี้ไม่เป็นปัญหาเพราะ provision
ด้วย CLI แล้วตั้งค่าทันที แต่พอเปิดสมัครเองจะมีหน้าต่างระหว่างสมัครกับอนุมัติ
ที่คนเดาชื่อสำนักงานถูกเข้าไปยึด tenant ได้
- เพิ่มค่าสถานะ pending_activation ใน tenants.status
- ระหว่างสถานะนี้ request-listener ต้องปฏิเสธทุก path ของ tenant นั้น ตอบหน้า "รอการอนุมัติ"
- อนุมัติแล้วออก setup token อายุ 7 วัน เก็บเฉพาะ hash ในทะเบียน ใช้ได้ครั้งเดียว
- /setup ที่ไม่มี token ถูกต้อง = 404

งานที่ 2 — เลิกใช้ PENDING_DAYS (§4)
effectiveStatus วันนี้คืน pending_payment = ใช้งานได้เต็ม 14 วันนับจากวันสมัคร
พอเปิดสมัครสาธารณะมันแปลว่าใครก็สมัครแล้วใช้ระบบเต็มฟรี 14 วัน แล้วสมัครใหม่ได้เรื่อย ๆ
- แทน pending_payment ด้วย pending_activation ทั้ง state.ts และ DB
- ลบค่าคงที่ PENDING_DAYS
- migration แปลงแถวที่เป็น pending_payment อยู่ให้เป็น pending_activation
- การต่ออายุไม่ใช้สถานะนี้ ลูกค้าที่ active อยู่แล้วออกใบต่ออายุได้โดยสถานะไม่เปลี่ยน
  แล้ว periodOnApprove ต่องวดตอนอนุมัติเหมือนเดิม — ต้องมี test ยืนยันว่าไม่พัง

งานที่ 3 — ราคาให้ตรงเว็บ (§5.6)
PLAN_PRICING ใน src/lib/billing/defs.ts เป็นราคาชุดเก่า ราคาจริงคือชุดที่ประกาศบนเว็บ
(มาจาก one-pager ฉบับลูกค้า ส.ค. 2569) พราวยืนยันแล้วว่าเว็บถูก
  online_10  590 / 5,900   (เดิม 690 / 6,900)
  online_50  2,190 / 21,900 (เดิม 1,990 / 19,900)
  online_100 3,490 → 3,590 / 34,900 → 35,900
ราคาก่อน VAT ทั้งหมด · ใบที่ออกไปแล้ว snapshot ราคาไว้แล้วจึงไม่กระทบ — ต้องมี test ยืนยันข้อนี้

ข้อบังคับ
- กติกา 9: ทำเฉพาะที่สเปกระบุ เห็นว่าควรเพิ่มอะไรให้เสนอก่อน
- กติกา 10: ทุก rule ต้องมี automated test และผ่านทั้งหมดก่อน commit
- สำรอง data/registry.db ก่อนรัน migration
- ใช้ superpowers:writing-plans ทำแผนก่อน แล้ว superpowers:test-driven-development ตอนเขียน
- จบงานอัปเดต PROGRESS.md
```

---

## Prompt 2 — Audit-platform · ช่วง 2: AuditFlow ขายเองได้

**โฟลเดอร์:** `C:\Users\pnoun\.claude\Audit-platform` · **ต้องรอ:** prompt 1 เสร็จ + พราวย้าย nameserver ไป Cloudflare แล้ว

```
อ่านสเปกนี้ก่อนเริ่ม: C:\Users\pnoun\.claude\website\docs\superpowers\specs\2026-08-07-signup-payment-design.md
ทำเฉพาะช่วงที่ 2 ตามตารางใน §13 — คือ §5.1, §5.4, §5.7 และอีเมล 3 แบบใหม่ใน §8
ช่วงที่ 1 (pending_activation + setup token + ราคา) เสร็จไปแล้ว อย่าทำซ้ำ

เป้าหมายของช่วงนี้: ลูกค้าสมัคร AuditFlow เอง จ่าย แนบสลิป และเราอนุมัติได้ครบวง

งานที่ 1 — ย้ายพอร์ทัลไป portal.ca-professional.com (§5.1)
พอร์ทัล C2 ถูกวางให้เสิร์ฟเมื่อ host === TENANT_BASE_DOMAIN เป๊ะ แต่ apex ชี้ Vercel
หน้า /portal/signup จึงเข้าไม่ได้ทั้งที่โค้ดพร้อม
- เพิ่ม env PORTAL_HOST แล้วให้ /portal/* เสิร์ฟตามค่านี้แทน
- เพิ่ม portal และ pm ในรายการ slug สงวนใน src/lib/tenants/defs.ts (ปัจจุบันมี app, www)
- ปรับ test ที่ยึด host เดิม
docs/hosting-options-d4.md §4 ประเมินงานนี้ไว้เองว่า ~ครึ่งวัน และเก็บไว้เป็นทางออกสำรอง
ตอนนั้นไม่ทำเพราะจะย้ายไปโดเมน product อยู่แล้ว — คำสั่งเปิดหน้าสมัครก่อนถึงเฟส B
ทำให้เหตุผลนั้นหมดไป

งานที่ 2 — หน้าใบแจ้งหนี้สาธารณะ /i/<token> (§5.4)
ลูกค้าใหม่ยังไม่มีบัญชี แนบสลิปที่ /billing ไม่ได้ (อยู่หลัง login)
- แสดงใบแจ้งหนี้เต็ม + QR พร้อมเพย์ + เลขบัญชี + ยอดโอนสุทธิหลังหัก ณ ที่จ่าย + ปุ่มอัปสลิป
- token สุ่ม 32 ไบต์ เก็บเฉพาะ hash · อายุ = วันครบกำหนดชำระ + 30 วัน · ผูกกับใบเดียว
- อัปโหลดใช้ slips.ts เดิม (JPEG/PNG/PDF ≤10MB) · อัปทับได้ เก็บทุกไฟล์ ไม่ทับของเดิม
- rate limit ต่อ token และต่อ IP — นี่เป็น endpoint สาธารณะที่รับไฟล์
ทรงเดียวกับ /p/[token] ของ PractiFlow ที่ใช้แนวนี้อยู่แล้ว

งานที่ 3 — ปฏิเสธและล้างคำขอค้าง (§5.7)
- ปุ่มปฏิเสธคำขอในหน้า admin พร้อมเหตุผลที่ส่งไปในอีเมล ลูกค้าอัปสลิปใหม่ได้ที่ลิงก์เดิม
- ปุ่มลบลูกค้าที่ pending_activation เกิน 60 วันโดยไม่ชำระ:
  ลบไฟล์ฐานข้อมูล + void ใบแจ้งหนี้พร้อมเหตุผล (ห้ามลบแถว) + ลง billing_events

งานที่ 4 — อีเมล 3 แบบใหม่ (§8)
  slip-received  ลูกค้าอัปสลิปแล้ว กำลังตรวจสอบ
  activated      เปิดสิทธิแล้ว พร้อมลิงก์ตั้งรหัสผ่านผู้ดูแลคนแรก
  slip-rejected  สลิปไม่ผ่าน พร้อมเหตุผล
- ข้อความอยู่ใน emails.ts (pure) ตัวส่งอยู่ notify.ts ตามโครงเดิม
- ผู้รับของอีเมลรอบสมัคร = อีเมลที่กรอกในฟอร์ม (ยังไม่มี user ในระบบ)
  หลังเปิดสิทธิแล้วกลับไปใช้ billingRecipients() เดิม
- กติกา 1: ภาษาไทยทั้งฉบับ · กติกา 11: ห้าม hardcode ชื่อ/ที่อยู่/บัญชีของบริษัท
- อีเมลห้าม throw ออกไปหาเส้นทางเงิน — วินัยเดิมของ notify.ts

ข้อบังคับ
- กติกา 9 / กติกา 10 เหมือนเดิม
- E2E บน sandbox ด้วย host จริง (portal + <slug>) ก่อนบอกว่าเสร็จ
- ใช้ superpowers:writing-plans → test-driven-development → verification-before-completion
- จบงานอัปเดต PROGRESS.md
```

---

## Prompt 3 — website · หน้าร้าน

**โฟลเดอร์:** `C:\Users\pnoun\.claude\website` · **branch:** `feature/signup-and-payment` · ทำขนานกับ prompt 2 ได้ แต่อย่า merge ก่อนพอร์ทัลขึ้นจริง

```
อ่านสเปกนี้ก่อนเริ่ม: docs/superpowers/specs/2026-08-07-signup-payment-design.md
ทำเฉพาะ §7 ทั้งหมด (งานฝั่งเว็บบริษัท) — ห้ามแตะ repo อื่น

บริบท: เว็บนี้เป็นหน้าร้านอย่างเดียว ไม่มี DB ไม่รับเงิน ไม่รับไฟล์ ไม่เก็บข้อมูลส่วนบุคคล
เพิ่มจากวันนี้ ระบบสมัครและชำระเงินจริงอยู่ที่ portal.ca-professional.com คนละ origin
โดยตั้งใจ (คำตัดสิน A5 — กัน XSS ที่เว็บขายลามถึง session ระบบสอบบัญชี)

1. /pricing
   - ปุ่ม "สมัครใช้งาน" ต่อแผน ลิงก์ไป portal พร้อม ?product=&plan=&cycle=
   - ลบแผน Free ≤5 ราย ของ PractiFlow ออก เหลือทางลองก่อนซื้อเป็น "ทดลองฟรี 30 วัน"
     อย่างเดียว (พราวเคาะ 7 ส.ค. 2569 — ตอนนี้เว็บสัญญาไว้สองอย่างพร้อมกันซึ่งทับกันเอง)
   - ราคาบนหน้านี้ถูกอยู่แล้ว ห้ามแก้ตัวเลข ฝั่งระบบจะแก้ให้ตรงกับหน้านี้เอง
     ลบคอมเมนต์เตือนเรื่องราคาไม่ตรง (app/pricing/page.tsx บรรทัด ~16) เมื่อฝั่งนั้นแก้เสร็จ

2. /products/auditflow และ /products/practiflow
   - เพิ่มปุ่มสมัคร คู่กับปุ่มนัด demo ที่มีอยู่ ไม่ใช่แทนที่

3. /signup (หน้าใหม่)
   - หน้าเลือก product 2 การ์ด สำหรับคนที่เข้ามาจาก nav โดยไม่ผ่านหน้าราคา
   - อธิบายวิธีชำระเงิน: โอนแล้วแนบสลิป · หัก ณ ที่จ่าย 3% ได้ตามปกติ ·
     ได้ใบกำกับภาษีเต็มจำนวน · เปิดสิทธิภายใน 1 วันทำการหลังตรวจสลิป

4. /login — เลิกบอกให้ติดต่อทีมงานเปิดบัญชี ชี้ appUrl จริงทั้งสอง product

5. /legal/privacy — เพิ่มว่าข้อมูลการสมัครและสลิปโอนเงินถูกส่งไปประมวลผลที่ระบบ
   ของบริษัทซึ่งตั้งอยู่ในประเทศไทย

6. content/site.ts — appUrl เป็น URL จริง (เลิกเป็น placeholder) + เพิ่ม portalUrl

ข้อบังคับ
- AGENTS.md: Next.js เวอร์ชันนี้มี breaking changes อ่าน node_modules/next/dist/docs/
  ก่อนเขียนโค้ด
- เสียงและดีไซน์ตาม PRODUCT.md + DESIGN.md — ห้ามเขียนคำโฆษณาเวอร์เกินจริง
  ห้ามพูดว่า product ตัวไหน "ยังไม่เปิด"
- ใช้สกิล impeccable สำหรับงาน UI · WCAG 2.1 AA เป็นค่าเริ่มต้น
- ยืนยันด้วย browser จริงก่อนบอกว่าเสร็จ รวมความกว้าง 320px
- จบงานอัปเดต STRUCTURE.md (sitemap + checklist)
```

---

## Prompt 4 — Audit-platform · ช่วง 3: รองรับ product ที่สอง

**โฟลเดอร์:** `C:\Users\pnoun\.claude\Audit-platform` · **ต้องรอ:** prompt 2 เสร็จ

```
อ่านสเปกนี้ก่อนเริ่ม: C:\Users\pnoun\.claude\website\docs\superpowers\specs\2026-08-07-signup-payment-design.md
ทำเฉพาะช่วงที่ 3 ตามตารางใน §13 — คือ §5.3 (migration V5) และ §5.5 (คิวเปิดสิทธิ)
ช่วง 1 และ 2 เสร็จไปแล้ว

เป้าหมาย: ให้พอร์ทัลออกใบแจ้งหนี้และใบกำกับภาษีให้ PractiFlow ได้ แม้ระบบปลายทาง
ยังไม่พร้อม — PractiFlow จะมาต่อในช่วง 4

งานที่ 1 — migration V5 (§5.3)
สคีมาวันนี้ subscriptions.slug เป็น UNIQUE และ REFERENCES tenants(slug)
= หนึ่งลูกค้ามีได้แค่หนึ่ง subscription และต้องมี tenant ของ AuditFlow เสมอ
ทั้งสองข้อใช้กับลูกค้าที่ซื้อ PractiFlow อย่างเดียวไม่ได้

เปลี่ยนความหมายของตาราง tenants เป็น "ทะเบียนลูกค้า" — หนึ่ง slug = หนึ่งนิติบุคคลผู้ซื้อ
ถือ subscription ได้หลาย product และมี billing_profiles ชุดเดียว (ถูกต้องอยู่แล้วสำหรับ
ลูกค้าที่ซื้อทั้งสองตัว)
  tenants       + db_provisioned INTEGER NOT NULL DEFAULT 1
  subscriptions + product TEXT NOT NULL DEFAULT 'auditflow'
                + trial_ends_at TEXT
                UNIQUE(slug) → UNIQUE(slug, product)
  invoices      + product TEXT NOT NULL DEFAULT 'auditflow'
                + pay_token_hash TEXT + pay_token_expires_at TEXT
  ใหม่ entitlements (id, slug, product, action, period_end, status,
                     attempts, last_error, created_at, updated_at)

db_provisioned เป็นตัวกรองของทุกสคริปต์ที่วนไฟล์ฐานข้อมูล (migrate-all, backup,
tenant-admin) — ลูกค้า PractiFlow อย่างเดียวต้องไม่ทำให้สคริปต์พัง ตรวจให้ครบทุกตัว

การเปลี่ยน UNIQUE ต้องสร้างตารางใหม่แล้วย้ายข้อมูล ใช้แบบเดียวกับ __new_tax_invoices
ที่ทำไปแล้วใน V4 · สำรอง data/registry.db ก่อนรัน

เลขรันเอกสารยังเป็นชุดเดียว INV-<พ.ศ.>-NNNN / RCT-<พ.ศ.>-NNNN ปนกันทั้งสอง product
เพราะผู้ขายคือนิติบุคคลเดียว การแยกชุดเลขต่อ product ทำให้กระทบยอด VAT ตอนยื่นยากขึ้น
โดยไม่ได้อะไรกลับมา — ห้ามแยก

เพิ่มราคา PractiFlow เข้า PLAN_PRICING (ก่อน VAT):
  S  30 ราย   590 / 5,900
  M  120 ราย  1,490 / 14,900
  L  300 ราย  2,990 / 29,900

งานที่ 2 — คิวเปิดสิทธิ (§5.5)
approvePayment ต้องไม่พังเพราะ product ปลายทางล่ม — วินัยเดียวกับ notify.ts
ที่ห้าม throw ออกไปหาเส้นทางเงิน
- อนุมัติ → เงินและใบกำกับภาษีจบในธุรกรรมเดิม + เขียนแถว entitlements สถานะ queued
- AuditFlow: process เดียวกัน เรียก provision/ต่ออายุตรง ๆ
- PractiFlow: POST ไป endpoint ภายในของ pm พร้อมลายเซ็น HMAC + timestamp กัน replay
  (ตัวรับจะมาในช่วง 4 — ช่วงนี้ทำฝั่งส่งให้เสร็จ ล้มเหลวแล้วค้างในคิวถือว่าถูกต้อง)
- ล้มเหลว → attempts++ เก็บ last_error ลองใหม่แบบถอยหลัง
  หน้า admin แสดงรายการที่ยังไม่สำเร็จพร้อมปุ่มยิงซ้ำ
- ยิงซ้ำด้วย payload เดิมต้องได้ผลเดิม ไม่สร้าง tenant ซ้ำ
- ทุกครั้งที่ยิง สำเร็จหรือไม่ ลง billing_events

ข้อบังคับ
- กติกา 9 / กติกา 10 เหมือนเดิม
- นี่คือ migration ที่แตะสคีมาที่มีเงินอยู่ — test ต้องครอบคลุมทั้ง migrate ขึ้น
  และข้อมูลเดิมยังอ่านได้ถูกต้องหลัง migrate
- ใช้ superpowers:writing-plans → test-driven-development → verification-before-completion
```

---

## Prompt 5 — PractiFlow · ช่วง 4: เปิดสิทธิได้จริง

**โฟลเดอร์:** `C:\Users\pnoun\.claude\Practice Management\practice-mgmt` · **ต้องรอ:** prompt 4 เสร็จ + มีที่รัน PractiFlow ที่ host `pm`

```
อ่านสเปกนี้ก่อนเริ่ม: C:\Users\pnoun\.claude\website\docs\superpowers\specs\2026-08-07-signup-payment-design.md
ทำเฉพาะ §6 ทั้งหมด — ห้ามแตะ repo อื่น

บริบท: เรากำลังเปิดขาย PractiFlow แบบสมัครเองผ่านเว็บบริษัท ชั้นเงินและเอกสาร
(ใบแจ้งหนี้ สลิป ใบกำกับภาษี) อยู่ที่พอร์ทัลของ Audit-platform ทั้งหมด — repo นี้
รับผิดชอบแค่ "สิทธิใช้งาน" คือ subscription state + gate หมดอายุ + โควตา
ห้ามออกเอกสารเงินเอง ห้ามรับสลิปเอง

ระวังชื่อชนกัน: Practice_Mgmt_Backlog.md มีงาน "A1 Billing ไทย" ซึ่งคือการที่สำนักงาน
ออกใบแจ้งหนี้ให้ลูกค้า SME ของตัวเอง — คนละเรื่องกับงานนี้ ตั้งชื่อโมดูลว่า
subscription/ ไม่ใช่ billing/ เพื่อไม่ให้ปนกันตั้งแต่ต้น

1. subscription + gate (§6.1)
   - Prisma model Subscription: tenantId (unique), plan, cycle, status,
     periodStart, periodEnd, trialEndsAt, createdAt, updatedAt
   - คัดลอกไฟล์ src/lib/billing/state.ts จาก C:\Users\pnoun\.claude\Audit-platform
     มาทั้งไฟล์ — เป็น pure ล้วน ไม่แตะ DB ไม่แตะเวลาจริง (now รับเป็น parameter เสมอ)
     เอามาแล้วเพิ่มการรองรับสถานะ trial
     ค่าคงที่: TRIAL_DAYS = 30 · GRACE_DAYS = 14 · RENEWAL_WINDOW_DAYS = 30
   - gate ใน src/proxy.ts: expired → บล็อกทุก method ที่ไม่ใช่ GET/HEAD/OPTIONS
     ยกเว้น /login /logout /billing
   - แบนเนอร์ในแอปเมื่อ trial เหลือ ≤7 วัน หรือ active เหลือ ≤30 วัน หรืออยู่ใน grace

2. โควตา (§6.2)
   - นับแถว Client ต่อ tenantId เทียบแผน: S 30 · M 120 · L 300
   - เกินโควตา = สร้างลูกค้าใหม่ไม่ได้ ของเดิมยังใช้ได้ทั้งหมด (ห้ามล็อกข้อมูลเดิม)
   - ระหว่าง trial ใช้โควตาของแผน M

3. endpoint รับคำสั่งเปิดสิทธิ (§6.3)
   POST /api/internal/entitlement — loopback เท่านั้น + ลายเซ็น HMAC ด้วย secret
   ที่แชร์กับพอร์ทัล + timestamp กัน replay
   รับ { slug, action: "grant"|"renew"|"revoke", plan, cycle, periodEnd,
         trialEndsAt?, ownerEmail, firmName }
   - grant = สร้าง Tenant + owner user (ยังไม่มีรหัสผ่าน) + subscription แล้วคืน setup token
   - ยิงซ้ำด้วย payload เดิมต้องได้ผลเดิม ไม่สร้าง tenant ซ้ำ (idempotent ด้วย slug)
   - ทุกครั้งลง ActivityLog

4. หน้า /billing แบบบาง (§6.4)
   แผนปัจจุบัน วันหมดอายุ จำนวนลูกค้าที่ใช้ไปเทียบโควตา และลิงก์ไปพอร์ทัลเพื่อต่ออายุ
   ไม่ออกใบเอง ไม่รับสลิปเอง

ข้อบังคับ
- AGENTS.md: Next.js เวอร์ชันนี้มี breaking changes อ่าน node_modules/next/dist/docs/
  ก่อนเขียนโค้ด
- session.ts ถูก import จาก proxy.ts ที่รันบน edge — ห้าม import โมดูล node-only
  เข้า proxy เด็ดขาด (บทเรียนเดิมของ passwords.ts / storage.ts)
- test ทุก rule ด้วย node --test แบบเดียวกับไฟล์ *.test.ts ที่มีอยู่ และเพิ่ม script ใน package.json
- E2E บน sandbox (next start พอร์ตแยก + สำเนา dev.db) ตาม pipeline มาตรฐานใน Backlog
- ใช้ superpowers:writing-plans → test-driven-development → verification-before-completion
- จบงาน sync สถานะกลับไปที่ Practice_Mgmt_Backlog.md
```

---

## สิ่งที่พราวต้องทำเอง ก่อน prompt 2 จะเริ่มได้

1. ย้าย nameserver `ca-professional.com` จาก Z.com ไป Cloudflare — **ยก record ของ Vercel (apex + `www`) ไปให้ครบก่อน ไม่งั้นเว็บบริษัทล่ม**
2. เพิ่ม DNS: `portal` และ `pm` แบบ proxied ชี้เข้า tunnel เดียวกับที่ใช้อยู่ · `*` สำหรับ tenant ของ AuditFlow
3. กรอก Platform Settings ให้ครบ (ชื่อ/ที่อยู่/เลขผู้เสียภาษีผู้ขาย/บัญชีธนาคาร/เลขพร้อมเพย์) — ระบบไม่ยอมให้สมัครแผนเสียเงินถ้ายังไม่ครบ
4. ก่อนรับลูกค้ารายแรกที่ไม่ใช่เราเอง (รวมแผนฟรีและ trial): ลง Cloudflare + Microsoft (OneDrive) ในตาราง sub-processor ของ `docs/legal/03-dpa.md` §5
