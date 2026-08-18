import { siteConfig } from "@/lib/site";

export function UtilityBar() {
  return (
    <div className="bg-sage-light border-b border-border text-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
        <span className="text-text-secondary font-medium">
          {siteConfig.shortName}
        </span>
        <div className="flex items-center gap-2 sm:gap-4 text-text-secondary">
          <span>{siteConfig.workingHoursResponse}</span>
        </div>
      </div>
    </div>
  );
}
