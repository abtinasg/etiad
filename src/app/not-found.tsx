import Link from "next/link";
import { Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="section-padding bg-bg-warm min-h-[60vh] flex items-center">
      <Container narrow className="text-center">
        <h1 className="text-4xl font-extrabold text-primary mb-4">صفحه پیدا نشد</h1>
        <p className="text-text-secondary mb-8">
          صفحه مورد نظر وجود ندارد یا آدرس آن تغییر کرده است.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary">بازگشت به خانه</Button>
          <Button href={siteConfig.phoneTel} variant="outline">
            تماس با کلینیک
          </Button>
        </div>
        <p className="mt-8 text-sm text-text-secondary">
          <Link href="/contact" className="text-primary hover:text-accent">صفحه تماس</Link>
          {" · "}
          <Link href="/services" className="text-primary hover:text-accent">خدمات</Link>
        </p>
      </Container>
    </div>
  );
}
