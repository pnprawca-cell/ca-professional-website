import { ImageResponse } from "next/og";

// Metadata ของไอคอน — Next.js อ่านไปสร้าง <link rel="icon" ...>
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * ฝังฟอนต์ Anuphan น้ำหนัก 600 เฉพาะตัวอักษร "CA" (~1KB)
 * ถ้าไม่ฝัง Satori จะใช้ฟอนต์ default ที่มีแต่น้ำหนักปกติ ทำให้ตัวอักษรบางเกินไป
 * เมื่อย่อเหลือ 32px และ fontWeight ที่ตั้งไว้จะไม่มีผลเลย
 */
async function loadAnuphanCA(): Promise<ArrayBuffer> {
  const cssUrl =
    "https://fonts.googleapis.com/css2?family=Anuphan:wght@600&text=CA";
  const css = await (await fetch(cssUrl, { cache: "force-cache" })).text();
  const match = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
  if (!match) throw new Error("Anuphan: ไม่พบไฟล์ ttf ใน CSS ที่ Google Fonts ส่งกลับมา");

  const res = await fetch(match[1], { cache: "force-cache" });
  if (!res.ok) throw new Error(`Anuphan: ดาวน์โหลดฟอนต์ไม่สำเร็จ (${res.status})`);
  return res.arrayBuffer();
}

/** ตราสัญลักษณ์ "CA" — สี่เหลี่ยมมุมมนสีหมึก ตัวอักษรสีงาช้าง (ชุดเดียวกับการ์ด OG) */
export default async function Icon() {
  let fonts:
    | { name: string; data: ArrayBuffer; weight: 600; style: "normal" }[]
    | undefined;

  try {
    fonts = [
      { name: "Anuphan", data: await loadAnuphanCA(), weight: 600, style: "normal" },
    ];
  } catch {
    // ไม่มีเน็ตตอน build → ใช้ฟอนต์ default แทน ไอคอนยังอ่านออกแค่เส้นบางลง
    fonts = undefined;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
          backgroundColor: "#1f1e1d",
          color: "#faf9f5",
          fontSize: 16,
          fontWeight: 600,
          letterSpacing: -0.4,
          fontFamily: fonts ? "Anuphan" : undefined,
        }}
      >
        CA
      </div>
    ),
    { ...size, fonts }
  );
}
