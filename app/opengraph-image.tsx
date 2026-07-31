import { ImageResponse } from "next/og";
import { company, products, siteUrl } from "@/content/site";

// Metadata ของรูป — Next.js อ่าน export 3 ตัวนี้ไปสร้าง <meta property="og:image:*">
export const alt = `${company.shortName} — ${company.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// สีแบรนด์ (ตรงกับ token ใน app/globals.css)
const ivory = "#faf9f5";
const ink = "#1f1e1d";
const terracotta = "#a34a24";
const hairline = "#e5e2d9";
const muted = "#63605b";

const domain = new URL(siteUrl).host;

/**
 * ทำไมรูปนี้เป็นภาษาอังกฤษ ทั้งที่ทั้งเว็บเป็นภาษาไทย
 *
 * ImageResponse ใช้ Satori เรนเดอร์ ซึ่ง "ไม่รองรับการวางวรรณยุกต์ซ้อนบนสระ"
 * (mark-to-mark positioning) ทดสอบแล้วทั้ง Anuphan, Noto Sans Thai, Sarabun,
 * IBM Plex Sans Thai ได้ผลเหมือนกันหมด: "ที่" ออกมาเป็น "ที" และ "เครื่อง"
 * ออกมาเป็น "เครือง" — คือวรรณยุกต์หายไป
 *
 * tagline ของบริษัท ("สำนักงานสอบบัญชีที่สร้างเครื่องมือของตัวเอง") ติดทั้งสองคำ
 * ถ้าใส่ลงไปตรง ๆ การ์ดที่แชร์ใน LINE/Facebook จะสะกดไทยผิดต่อหน้าลูกค้า
 * จึงเลือกใช้ข้อความละตินซึ่ง Satori เรนเดอร์ได้ถูกต้อง 100%
 *
 * ถ้าวันหนึ่งอยากได้การ์ดภาษาไทยจริง ๆ: ออกแบบใน Figma แล้ว export เป็นไฟล์
 * app/opengraph-image.png วางแทนไฟล์นี้ — Next.js รองรับทั้งแบบไฟล์รูปและแบบ generate
 */
const copy = {
  eyebrow: "Certified Public Accountants",
  brand: company.shortName,
  headline: "The audit firm that builds its own tools",
};

/**
 * โหลดฟอนต์ Anuphan (.ttf) จาก Google Fonts เพื่อให้ตัวอักษรบนการ์ดเป็นฟอนต์เดียว
 * กับทั้งเว็บ — Satori เรนเดอร์ได้เฉพาะฟอนต์ที่ฝังเข้าไปเอง และรองรับแค่ ttf/otf/woff
 * (ไฟล์ที่ next/font/google โหลดไว้เป็น woff2 จึงใช้ไม่ได้)
 *
 * เคล็ดลับ: เรียก CSS API โดยไม่ส่ง User-Agent ของเบราว์เซอร์ Google จะตอบเป็น
 * format('truetype') ให้ และพารามิเตอร์ `text` จะ subset เหลือเฉพาะอักขระที่ใช้จริง
 * (~5KB ต่อน้ำหนัก — ไกลจากลิมิต bundle 500KB ของ ImageResponse มาก)
 */
async function loadAnuphan(text: string, weight: 400 | 600): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=Anuphan:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(cssUrl, { cache: "force-cache" })).text();
  const match = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
  if (!match) throw new Error("Anuphan: ไม่พบไฟล์ ttf ใน CSS ที่ Google Fonts ส่งกลับมา");

  const res = await fetch(match[1], { cache: "force-cache" });
  if (!res.ok) throw new Error(`Anuphan: ดาวน์โหลดฟอนต์ไม่สำเร็จ (${res.status})`);
  return res.arrayBuffer();
}

export default async function Image() {
  const productLines = [
    `${products.auditflow.name} — ${products.auditflow.category}`,
    `${products.practiflow.name} — ${products.practiflow.category}`,
  ];
  const subsetText = ["CA", copy.eyebrow, copy.brand, copy.headline, ...productLines, domain].join("");

  // โครงสร้างเดียวกับ FontOptions ของ Satori (name / data / weight / style)
  let fonts:
    | { name: string; data: ArrayBuffer; weight: 400 | 600; style: "normal" }[]
    | undefined;

  try {
    const [regular, semibold] = await Promise.all([
      loadAnuphan(subsetText, 400),
      loadAnuphan(subsetText, 600),
    ]);
    fonts = [
      { name: "Anuphan", data: regular, weight: 400, style: "normal" },
      { name: "Anuphan", data: semibold, weight: 600, style: "normal" },
    ];
  } catch {
    // build ในเครื่องที่ไม่มีเน็ต (หรือ Google Fonts เปลี่ยน format) → ปล่อยให้ Satori
    // ใช้ฟอนต์ default ข้อความเป็นละตินอยู่แล้วจึงยังอ่านออกครบ ไม่เสี่ยงเป็นช่องว่างเปล่า
    fonts = undefined;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: ivory,
          color: ink,
          padding: "72px 80px",
          fontFamily: fonts ? "Anuphan" : undefined,
        }}
      >
        {/* หัวรูป: ตราสัญลักษณ์ CA + ชื่อย่อบริษัท */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 88,
              height: 88,
              borderRadius: 22,
              backgroundColor: ink,
              color: ivory,
              fontSize: 38,
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            CA
          </div>
          <div style={{ display: "flex", fontSize: 36, fontWeight: 600 }}>{copy.brand}</div>
        </div>

        {/* กลางรูป: ป้ายเน้นสีดินเผา (จุดเดียวในรูปที่ใช้สีเน้น) + พาดหัว */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                backgroundColor: terracotta,
                color: ivory,
                borderRadius: 999,
                padding: "12px 26px",
                fontSize: 24,
                fontWeight: 600,
                letterSpacing: 0.4,
              }}
            >
              {copy.eyebrow}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              // จำกัดความกว้างให้พาดหัวตัดเป็นสองบรรทัดที่สมดุล ไม่เหลือคำโดดบรรทัดสุดท้าย
              maxWidth: 640,
              fontSize: 62,
              fontWeight: 600,
              lineHeight: 1.24,
              letterSpacing: -1.4,
            }}
          >
            {copy.headline}
          </div>
        </div>

        {/* ท้ายรูป: เส้นคั่นบาง + ผลิตภัณฑ์สองตัว และโดเมน */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: `1px solid ${hairline}`,
            paddingTop: 28,
            fontSize: 24,
            color: muted,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {productLines.map((line) => (
              <div key={line} style={{ display: "flex" }}>
                {line}
              </div>
            ))}
          </div>
          <div style={{ display: "flex" }}>{domain}</div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
