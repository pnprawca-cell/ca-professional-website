import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import ProductPeek from "@/components/ProductPeek";
import { LaptopShot } from "@/components/home/Visuals";
import {
  IconArrowRight,
  IconBuilding,
  IconCalculator,
  IconChartDoc,
  IconCheckSolid,
  IconClipboard,
  IconCloud,
  IconDoc,
  IconLaptop,
  IconSeal,
  IconShield,
  IconSync,
  IconTable,
  IconUsers,
} from "@/components/home/Icons";
import { company, signupUrl } from "@/content/site";

/* ภาพถ่าย: Unsplash License (ใช้เชิงพาณิชย์ได้ ไม่ต้องให้เครดิต) ดาวน์โหลดเก็บในเว็บเอง ไม่พึ่งเซิร์ฟเวอร์ภายนอก
   ที่มาของแต่ละไฟล์ (id ของ Unsplash) บันทึกไว้ท้ายชื่อในคอมเมนต์ข้างรายการด้านล่าง */
import imgService from "@/public/images/home/service-documents.jpg";
import imgAuditFlow from "@/public/images/home/auditflow-laptop.jpg";
import imgPractiFlow from "@/public/images/home/practiflow-desk.jpg";
import imgWholesale from "@/public/images/home/industry-wholesale-retail.jpg";
import imgManufacturing from "@/public/images/home/industry-manufacturing.jpg";
import imgConstruction from "@/public/images/home/industry-construction.jpg";
import imgRealEstate from "@/public/images/home/industry-real-estate.jpg";
import imgHospitality from "@/public/images/home/industry-hospitality.jpg";
import imgImportExport from "@/public/images/home/industry-import-export.jpg";
import imgLogistics from "@/public/images/home/industry-logistics.jpg";
import imgProfessional from "@/public/images/home/industry-professional-services.jpg";

/**
 * หน้าแรก — layout ตามภาพตัวอย่างที่พราวเลือก เนื้อหาเป็นข้อมูลจริงของเราทั้งหมด (25 ก.ย. 2569)
 * ข้อตกลงที่ห้ามย้อน: ไม่มีรูปคนใน hero, ไม่มีรีวิวลูกค้า (ใช้ "ธุรกิจที่เราดูแล" แทน),
 * ตัวเลขเดียวที่ยืนยันแล้วคือ "กว่า 200 บริษัท" — ห้ามเติมตัวเลขที่ยังไม่ได้ยืนยัน เช่น จำนวนปี
 */

const clientCount = "200";

/** ภาพถ่ายเต็มกรอบของ parent (parent ต้อง relative) — next/image ทำ srcset + blur placeholder ให้เอง */
function Photo({
  src,
  alt,
  sizes,
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  sizes: string;
  className?: string;
}) {
  return <Image src={src} alt={alt} fill sizes={sizes} placeholder="blur" className={`object-cover ${className}`} />;
}

/** เงานุ่มสำหรับพื้นผิวที่ลอยขึ้นมา (การ์ด ป้าย) */
const lift = "shadow-[0_1px_2px_rgb(31_30_29/0.04),0_16px_40px_-20px_rgb(31_30_29/0.18)]";

/* ─── ปุ่ม ─── */

function Btn({
  href,
  children,
  tone = "accent",
}: {
  href: string;
  children: ReactNode;
  tone?: "accent" | "dark" | "outline" | "outline-light";
}) {
  const tones = {
    accent: "bg-accent-ink text-card hover:bg-[#8f3f1d]",
    dark: "bg-foreground text-background hover:bg-black",
    outline: "border border-foreground/25 bg-card/60 text-foreground hover:border-foreground/50 hover:bg-card",
    "outline-light": "border border-background/35 text-background hover:bg-background/10",
  };
  const cls = `group inline-flex items-center justify-center gap-2.5 rounded-lg px-6 py-3 text-[15px] font-medium transition-colors ${tones[tone]}`;
  const inner = (
    <>
      {children}
      <IconArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5" />
    </>
  );
  return /^https?:\/\//.test(href) ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** ป้ายหัว section ตามภาพตัวอย่าง — เป็นภาษาอังกฤษจึงใช้ตัวพิมพ์ใหญ่ + เว้นระยะได้ */
function Kicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-background/70" : "text-accent-ink"}`}>
      {children}
    </p>
  );
}

/* ─── เนื้อหา ─── */

const pillars = [
  {
    icon: IconDoc,
    audience: "สำหรับเจ้าของธุรกิจ",
    name: "บริการสอบบัญชี",
    description: "ตรวจสอบงบการเงินโดยผู้สอบบัญชีรับอนุญาต สำหรับบริษัท SME ตามมาตรฐานไทย",
    points: ["งบการเงินตามแบบ DBD", "มาตรฐาน TSA / TFRS for NPAEs", "ตรงเวลา อธิบายเป็นภาษาคน", "แจ้งราคาชัดเจนก่อนเริ่มงาน"],
    cta: { label: "ขอใบเสนอราคา", href: "/contact", tone: "accent" as const },
    photo: { src: imgService /* 1554224155-6726b3ff858f */, alt: "เอกสารงบการเงิน ปากกา และเครื่องคิดเลขบนโต๊ะทำงาน" },
  },
  {
    icon: IconLaptop,
    audience: "สำหรับผู้สอบบัญชี",
    name: "AuditFlow",
    description: "ระบบทำงานสอบบัญชีครบวงจร ออกแบบจากงานตรวจสอบจริง",
    points: ["ผูกกับ Trial Balance อัตโนมัติ", "Lead Schedule และ Working Paper", "Cal Tax พร้อม NPAE", "มีทั้งรุ่น Online และ Offline"],
    cta: { label: "นัด Demo 30 นาที", href: "/products/auditflow#demo", tone: "dark" as const },
    photo: { src: imgAuditFlow /* 1460925895917-afdab827c52f */, alt: "โน้ตบุ๊กเปิดหน้ารายงานตัวเลขและกราฟบนโต๊ะกระจก" },
  },
  {
    icon: IconUsers,
    audience: "สำหรับสำนักงานบัญชี",
    name: "PractiFlow",
    description: "ระบบบริหารสำนักงานบัญชี และงานลูกค้าแบบครบวงจร",
    points: ["ลูกค้าและงานอยู่ในที่เดียว", "ติดตาม deadline และสถานะงาน", "ใบแจ้งหนี้ค่าบริการ", "ทดลองฟรี 30 วัน ไม่ต้องผูกบัตร"],
    cta: { label: "ดูรายละเอียด", href: "/products/practiflow", tone: "accent" as const },
    photo: { src: imgPractiFlow /* 1558478551-1a378f63328e */, alt: "โต๊ะทำงานสำนักงาน มีโน้ตบุ๊กและสมุดวางแผนงาน" },
  },
];

const features = [
  { icon: IconSync, label: "ผูกกับ Trial Balance อัตโนมัติ" },
  { icon: IconClipboard, label: "Lead Schedule และ Working Paper" },
  { icon: IconCalculator, label: "Cal Tax พร้อม NPAE" },
  { icon: IconShield, label: "แบบฟอร์มมาตรฐาน TSA / DBD" },
];

const steps = [
  { icon: IconDoc, title: "Trial Balance", sub: "นำเข้าข้อมูลอัตโนมัติ" },
  { icon: IconClipboard, title: "Working Paper", sub: "บันทึกและตรวจสอบ" },
  { icon: IconTable, title: "Lead Schedule", sub: "สรุปความเชื่อมโยง" },
  { icon: IconCalculator, title: "Cal Tax", sub: "คำนวณภาษีอัตโนมัติ" },
  { icon: IconChartDoc, title: "Financial Statements", sub: "จัดทำงบการเงิน" },
  { icon: IconSeal, title: "Audit Report", sub: "พร้อมยื่น DBD" },
];

const reasons = [
  { icon: IconSeal, title: "ผู้สอบบัญชีรับอนุญาต", value: `CPA No. ${company.auditorLicenseNumber}` },
  { icon: IconShield, title: "มาตรฐานที่ใช้", value: "TSA · TFRS for NPAEs · DBD" },
  { icon: IconBuilding, title: "บริษัทที่ตรวจสอบแล้ว", value: `${clientCount}+ บริษัท` },
  { icon: IconLaptop, title: "เครื่องมือของเราเอง", value: "ใช้กับงานจริงทุกสัปดาห์" },
  { icon: IconCloud, title: "เลือกได้ตามนโยบายข้อมูล", value: "Online หรือ Offline" },
];

/**
 * ประเภทธุรกิจที่ตรวจสอบ — แทนรีวิวลูกค้า (พราวเคาะ 25 ก.ย. 2569)
 * พราวรับรายการนี้แล้ว (25 ก.ย. 2569) — ถ้าพอร์ตลูกค้าเปลี่ยน แก้ชื่อและภาพที่นี่
 */
const industries = [
  { name: "ค้าส่งและค้าปลีก", src: imgWholesale /* 1644079446600-219068676743 */, alt: "คลังสินค้าขนาดใหญ่ ชั้นวางสินค้าเรียงยาว" },
  { name: "ผลิตและแปรรูป", src: imgManufacturing /* 1647427060118-4911c9821b82 */, alt: "เครื่องจักรสีส้มเรียงในโรงงานผลิต" },
  { name: "ก่อสร้างและรับเหมา", src: imgConstruction /* 1599707254554-027aeb4deacd */, alt: "ปั้นจั่นสีเหลืองข้างอาคารที่กำลังก่อสร้าง" },
  { name: "อสังหาริมทรัพย์", src: imgRealEstate /* 1602082550187-3f954840a0f7 */, alt: "อาคารสูงสีขาวใต้ท้องฟ้าสีฟ้า" },
  { name: "ร้านอาหารและโรงแรม", src: imgHospitality /* 1538334421852-687c439c92f4 */, alt: "โต๊ะและเก้าอี้ไม้ภายในร้านอาหาร" },
  { name: "นำเข้าและส่งออก", src: imgImportExport /* 1605732562742-3023a888e56e */, alt: "ตู้คอนเทนเนอร์สีส้มซ้อนกันที่ท่าเรือ" },
  { name: "ขนส่งและโลจิสติกส์", src: imgLogistics /* 1776521905669-97fa944bf30c */, alt: "รถบรรทุกสีขาววิ่งบนทางหลวง" },
  { name: "บริการวิชาชีพ", src: imgProfessional /* 1431540015161-0bf868a2d407 */, alt: "ห้องประชุมสำนักงาน โต๊ะประชุมไม้และเก้าอี้" },
];

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-surface/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 md:pt-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-8 lg:pb-24">
          <div className="relative z-10 max-w-xl">
            <Kicker>Audit × Technology × Real Experience</Kicker>
            <h1 className="mt-5 text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl xl:text-6xl">
              {/* ห่อวลีด้วย inline-block กันเบราว์เซอร์ตัดกลางคำไทย ("สอบ/บัญชี") */}
              <span className="inline-block">สำนักงานสอบบัญชีไทย</span>{" "}
              <span className="inline-block">
                ที่ทำงานด้วย<span className="text-accent-ink">เทคโนโลยี</span>
              </span>{" "}
              <span className="inline-block">ของเราเอง</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              ตรวจสอบงบการเงินของธุรกิจ SME ตามมาตรฐานไทย ด้วยผู้สอบบัญชีรับอนุญาต
              และระบบที่เราสร้างเองจากงานจริง งานจึงเป็นระบบ รวดเร็ว และตรวจสอบย้อนหลังได้ง่าย
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Btn href="/contact">ขอใบเสนอราคางานสอบบัญชี</Btn>
              <Btn href="/products/auditflow" tone="outline">
                รู้จักระบบของเรา
              </Btn>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      {/* ═══ 3 เสาหลัก ═══ */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3 md:py-20">
          {pillars.map((p) => (
            <article
              key={p.name}
              className={`group/card relative flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-transform duration-300 hover:-translate-y-1 ${lift}`}
            >
              {/* ภาพจริงหัวการ์ด — ไอคอนวางทับขอบล่างของภาพ */}
              <div className="relative h-44 overflow-hidden">
                <Photo
                  src={p.photo.src}
                  alt={p.photo.alt}
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 100vw"
                  className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
              <div className="relative flex flex-1 flex-col px-7 pb-7">
                <div className="-mt-6 flex items-end gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border-4 border-card bg-accent-soft text-accent-ink">
                    <p.icon size={22} />
                  </span>
                  <span className="pb-1 text-sm font-semibold text-accent-ink">{p.audience}</span>
                </div>
                <h2 className="relative mt-5 text-3xl font-bold tracking-tight">{p.name}</h2>
                <p className="relative mt-2 text-[15px] leading-relaxed text-muted">{p.description}</p>
                <ul className="relative mt-6 flex-1 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[15px]">
                      <IconCheckSolid className="mt-0.5 shrink-0 text-foreground" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-8">
                  <Btn href={p.cta.href} tone={p.cta.tone}>
                    {p.cta.label}
                  </Btn>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ AUDITFLOW ═══ */}
      <section className="relative overflow-hidden bg-surface">
        {/* วงแสงนุ่มหลังโน้ตบุ๊ก */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(255_255_255/0.9),transparent)]"
        />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.2fr)_minmax(0,0.85fr)] lg:gap-10">
          <div>
            <Kicker>AuditFlow</Kicker>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              <span className="inline-block">จาก Trial Balance</span>{" "}
              <span className="inline-block">ถึงงบการเงิน</span>{" "}
              <span className="inline-block">ในระบบเดียว</span>
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              ระบบที่ช่วยให้การทำงานสอบบัญชีเป็นระบบ รวดเร็ว และตรวจสอบย้อนหลังได้ง่าย
              ทุกขั้นดึงยอดต่อจากขั้นก่อนหน้า ไม่ต้องคัดลอกตัวเลขข้ามไฟล์
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col xl:flex-row">
              <Btn href="/products/auditflow">ดูรายละเอียด AuditFlow</Btn>
              <Btn href="/products/auditflow#demo" tone="outline">
                นัด Demo
              </Btn>
            </div>
          </div>

          <LaptopShot />

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {features.map((f) => (
              <li
                key={f.label}
                className={`flex items-center gap-3.5 rounded-xl border border-line bg-card px-4 py-3.5 text-[15px] font-medium ${lift}`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                  <f.icon size={19} />
                </span>
                {f.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ ขั้นตอนงาน ═══ */}
      <section aria-labelledby="flow-title" className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 id="flow-title" className="sr-only">
            ขั้นตอนงานสอบบัญชีใน AuditFlow
          </h2>
          <ol className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {steps.map((s, i) => (
              <li key={s.title} className="relative flex flex-col items-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-accent-soft/50 text-accent-ink">
                  <s.icon size={26} />
                </span>
                <p className="mt-4 font-semibold tracking-tight">
                  {i + 1}. {s.title}
                </p>
                <p className="mt-1 text-sm text-muted">{s.sub}</p>
                {i < steps.length - 1 && (
                  <IconArrowRight
                    size={20}
                    className="absolute -right-4 top-[22px] hidden translate-x-1/2 text-accent lg:block"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ ทำไมต้องเลือกเรา ═══ */}
      <section className="bg-accent-soft/35">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12">
          <div>
            <Kicker>Why CA Professional</Kicker>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">ทำไมต้องเลือกเรา</h2>
          </div>
          <ul className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-line">
            {reasons.map((r) => (
              <li key={r.title} className="flex flex-col items-center px-3 text-center">
                <r.icon size={30} className="text-accent-ink" />
                <p className="mt-3 font-semibold tracking-tight">{r.title}</p>
                <p className="mt-1 text-sm text-muted">{r.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ ธุรกิจที่เราดูแล (แทนรีวิว) ═══ */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-20 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12">
          <div>
            <Kicker>Industries We Serve</Kicker>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">ธุรกิจที่เราดูแล</h2>
            <p className="mt-3 leading-relaxed text-muted">
              แต่ละธุรกิจมีจุดเสี่ยงไม่เหมือนกัน เราวางแผนงานตรวจตามลักษณะของธุรกิจนั้น
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {industries.map((ind) => (
              <li
                key={ind.name}
                className={`group/ind relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface ${lift}`}
              >
                <Photo
                  src={ind.src}
                  alt={ind.alt}
                  sizes="(min-width: 1280px) 240px, (min-width: 768px) 20vw, 50vw"
                  className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/ind:scale-105"
                />
                {/* ไล่เงาเข้มด้านล่าง ให้ชื่อธุรกิจสีขาวอ่านออกบนทุกภาพ */}
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <span className="absolute inset-x-4 bottom-3.5 font-semibold leading-snug text-white">
                  {ind.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative overflow-hidden bg-foreground">
        {/* แสงอุ่นมุมขวา + ตารางเส้นจาง ๆ ให้พื้นเข้มมีมิติ */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[640px] rounded-full bg-[radial-gradient(closest-side,rgb(201_100_66/0.35),transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_left,black,transparent_70%)]"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-5 py-16 md:py-20 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Kicker light>Let&apos;s Work Together</Kicker>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-background md:text-4xl">
              ให้เราช่วยดูแลงานสอบบัญชีของคุณ
            </h2>
            <p className="mt-3 max-w-xl leading-[1.75] text-background/75">
              ปรึกษาฟรี ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด เพื่อหาวิธีที่เหมาะกับธุรกิจหรือสำนักงานของคุณ
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Btn href="/contact">ขอใบเสนอราคา</Btn>
            <Btn href={signupUrl({ product: "practiflow", plan: "pm_trial" })} tone="outline-light">
              ทดลอง PractiFlow ฟรี
            </Btn>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * ภาพ hero — หน้าจอ Lead Schedule จอเดียว วางตรง ไม่มีกรอบเทาซ้อน
 * + ป้ายผู้สอบบัญชีรับอนุญาต (ตำแหน่งเดียวกับป้ายชื่อในภาพตัวอย่าง)
 *
 * ป้ายวางใต้หน้าจอแบบเยื้องขวา ไม่ทับหน้าจอเลย: แถบล่างของ ProductPeek มีข้อความทั้งซ้ายและขวา
 * ทับตรงไหนก็บังเนื้อหา (เคยลองทับแล้วดูเหมือนชนกัน — 25 ก.ย. 2569)
 */
function HeroVisual() {
  return (
    <div className="relative px-4 py-8 sm:px-8 lg:px-7 lg:py-9">
      {/* พื้นหลัง: แผ่นไล่สีที่มีมุมครบทั้งสี่ อยู่ในคอลัมน์ของตัวเอง + จุดตารางจาง ๆ */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent-soft/80 via-surface to-surface/40"
      />
      <div
        aria-hidden
        className="absolute inset-0 rounded-[2rem] opacity-70 [background-image:radial-gradient(rgb(31_30_29/0.12)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:radial-gradient(ellipse_at_top_right,black_10%,transparent_70%)]"
      />

      <div className="relative">
        {/* หน้าจอ: ถอดกรอบเทา (mat) ของ ProductPeek ออก เหลือหน้าต่างขาวกับเงานุ่ม */}
        <div className={`rounded-2xl [&>[role=img]]:bg-transparent [&>[role=img]]:p-0 sm:[&>[role=img]]:p-0 ${lift}`}>
          <ProductPeek />
        </div>

        {/* ป้ายผู้สอบบัญชีรับอนุญาต — เยื้องออกซ้ายของหน้าจอ ให้เห็นเป็นชั้น โดยไม่บังตัวเลข */}
        <div
          className={`relative mt-4 flex w-fit items-center gap-4 rounded-2xl border border-line bg-card p-4 pr-6 lg:-ml-8 ${lift}`}
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
            <IconSeal size={24} />
          </span>
          <div>
            <p className="font-semibold tracking-tight">ผู้สอบบัญชีรับอนุญาต (CPA)</p>
            <p className="mt-0.5 text-sm text-muted">
              เลขทะเบียน {company.auditorLicenseNumber} · กว่า {clientCount} บริษัท
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
