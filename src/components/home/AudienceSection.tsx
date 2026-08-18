import Link from "next/link";

const cards = [
  {
    title: "برای خودم",
    text: "می‌خواهم درباره شرایط درمان و مراحل شروع آن اطلاعات بگیرم.",
    href: "/services/individual-counseling",
    icon: "user",
  },
  {
    title: "برای یکی از اعضای خانواده",
    text: "می‌خواهم بدانم چطور می‌توانم به یکی از نزدیکانم برای شروع درمان کمک کنم.",
    href: "/family-guide",
    icon: "family",
  },
  {
    title: "برای دریافت اطلاعات اولیه",
    text: "هنوز درباره مراجعه تصمیم نگرفته‌ام و ابتدا می‌خواهم سوالاتم را مطرح کنم.",
    href: "/contact",
    icon: "info",
  },
];

function Icon({ type }: { type: string }) {
  if (type === "family") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (type === "info") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function AudienceSection() {
  return (
    <section className="section-padding bg-bg-warm" aria-labelledby="audience-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 id="audience-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary text-center mb-10 lg:mb-14">
          برای چه کسی به دنبال راهنمایی هستید؟
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group bg-surface border border-border rounded-[16px] p-8 transition-all duration-300 hover:shadow-lg hover:border-sage hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <div className="w-14 h-14 bg-sage rounded-[12px] flex items-center justify-center text-primary mb-6 group-hover:bg-sage-light transition-colors">
                <Icon type={card.icon} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{card.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-4">{card.text}</p>
              <span className="text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                ادامه →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
