import { siteConfig } from "@/lib/site";

export function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-surface border-t border-border shadow-lg safe-area-pb"
      role="navigation"
      aria-label="تماس سریع"
    >
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={siteConfig.phoneTel}
          className="flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold rounded-[12px] transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          تماس
        </a>
        <a
          href={siteConfig.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 bg-sage text-primary font-bold rounded-[12px] transition-colors hover:bg-sage-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          مسیریابی
        </a>
      </div>
    </div>
  );
}
