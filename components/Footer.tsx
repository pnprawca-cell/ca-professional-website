import Link from "next/link";
import { nav, company } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-sm font-semibold text-background">
                CA
              </span>
              <span className="text-[15px] font-semibold tracking-tight">
                {company.shortName}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {company.nameTh}
              <br />
              {company.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <p className="mb-3 font-semibold">เมนู</p>
              <ul className="space-y-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-muted transition-colors hover:text-foreground">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/faq" className="text-muted transition-colors hover:text-foreground">
                    คำถามที่พบบ่อย
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold">ติดต่อ</p>
              <ul className="space-y-2 text-muted">
                <li>
                  <a href={`mailto:${company.email}`} className="break-all transition-colors hover:text-foreground">
                    {company.email}
                  </a>
                </li>
                <li>LINE: {company.line}</li>
                <li>{company.address}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.nameEn} สงวนลิขสิทธิ์</p>
          <p>
            เลขทะเบียนนิติบุคคล {company.registrationNumber} · ผู้สอบบัญชีรับอนุญาตเลขที่ {company.auditorLicenseNumber}
          </p>
          <Link href="/legal/privacy" className="transition-colors hover:text-foreground">
            นโยบายความเป็นส่วนตัว
          </Link>
        </div>
      </div>
    </footer>
  );
}
