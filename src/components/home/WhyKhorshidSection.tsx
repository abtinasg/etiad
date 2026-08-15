const cards = [
  {
    title: "تجربه درمانی",
    text: "نزدیک به دو دهه فعالیت در حوزه درمان اختلالات مصرف مواد.",
    needsVerification: true,
  },
  {
    title: "تیم چندتخصصی",
    text: "همکاری پزشک، روان‌شناس، مشاور و پرستار.",
    needsVerification: true,
  },
  {
    title: "رویکرد فردمحور",
    text: "شرایط هر فرد قبل از تصمیم‌گیری درباره مسیر درمان بررسی می‌شود.",
  },
  {
    title: "محرمانگی",
    text: "اطلاعات مراجعان مطابق سیاست حفظ حریم خصوصی کلینیک مدیریت می‌شود.",
    needsVerification: true,
  },
];

export function WhyKhorshidSection() {
  return (
    <section className="section-padding bg-primary text-white" aria-labelledby="why-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <span className="block text-sm font-semibold text-accent mb-2">چرا خورشید؟</span>
          <h2 id="why-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            چرا کلینیک خورشید؟
          </h2>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <article
              key={card.title}
              className="bg-white/5 border border-white/10 rounded-[16px] p-6 lg:p-8 transition-all duration-300 hover:bg-white/10"
            >
              <h3 className="text-lg font-bold mb-3">{card.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
