import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function FinalCTASection() {
  return (
    <section className="section-padding bg-primary text-white" aria-labelledby="final-cta-title">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <h2 id="final-cta-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6">
          برای شروع، کافی است سوالتان را مطرح کنید.
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-8">
          برای دریافت اطلاعات درباره شرایط مراجعه و هماهنگی اولیه با کلینیک خورشید تماس بگیرید.
        </p>
        <a
          href={siteConfig.phoneTel}
          className="block text-3xl sm:text-4xl font-extrabold mb-8 hover:text-accent transition-colors"
        >
          {siteConfig.phoneDisplay}
        </a>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={siteConfig.phoneTel} variant="accent" size="lg">
            تماس با کلینیک
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="!border-white/30 !text-white hover:!bg-white/10">
            مشاهده آدرس و ساعات کاری
          </Button>
        </div>
      </div>
    </section>
  );
}
