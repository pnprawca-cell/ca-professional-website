import { CTAButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-ink">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
        ไม่พบหน้าที่คุณกำลังหา
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-muted">
        หน้านี้อาจถูกย้าย ลบ หรือลิงก์ที่คุณใช้ไม่ถูกต้อง ลองกลับไปหน้าแรก
        หรือติดต่อทีมงานหากคุณคิดว่านี่คือความผิดพลาด
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <CTAButton href="/" variant="primary">
          กลับหน้าแรก
        </CTAButton>
        <CTAButton href="/contact" variant="secondary">
          ติดต่อเรา
        </CTAButton>
      </div>
    </section>
  );
}
