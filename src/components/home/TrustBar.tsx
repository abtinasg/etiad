const items = [
  { title: "۲۰ سال تجربه", subtitle: "نزدیک به دو دهه فعالیت", needsVerification: true },
  { title: "مجوز رسمی", subtitle: "وزارت بهداشت و درمان" },
  { title: "حفظ محرمانگی", subtitle: "مدیریت اطلاعات مراجعان" },
  { title: "وکیل‌آباد مشهد", subtitle: "موقعیت مناسب در مشهد" },
];

export function TrustBar() {
  return (
    <section className="bg-surface border-y border-border py-6" aria-label="نشان‌های اعتماد">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {items.map((item) => (
            <div key={item.title} className="text-center lg:text-right px-2">
              <p className="font-bold text-primary text-sm lg:text-base">{item.title}</p>
              <p className="text-xs lg:text-sm text-text-secondary mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
