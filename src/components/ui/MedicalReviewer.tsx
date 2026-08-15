import { siteConfig } from "@/lib/site";

type MedicalReviewerProps = {
  author?: string;
  medicalReviewer?: string;
  publishedAt?: string;
  lastReviewed?: string;
};

export function MedicalReviewer({
  author = "تیم محتوای کلینیک خورشید",
  medicalReviewer,
  publishedAt,
  lastReviewed,
}: MedicalReviewerProps) {
  return (
    <aside
      className="bg-sage-light border border-border rounded-[16px] p-6 not-prose"
      aria-label="اطلاعات نویسنده و بازبینی"
    >
      <dl className="space-y-2 text-sm">
        <div className="flex gap-2">
          <dt className="text-text-secondary shrink-0">نویسنده:</dt>
          <dd className="font-medium text-text">{author}</dd>
        </div>
        {medicalReviewer && (
          <div className="flex gap-2">
            <dt className="text-text-secondary shrink-0">بازبینی پزشکی:</dt>
            <dd className="font-medium text-text">{medicalReviewer}</dd>
          </div>
        )}
        {publishedAt && (
          <div className="flex gap-2">
            <dt className="text-text-secondary shrink-0">تاریخ انتشار:</dt>
            <dd className="text-text">{publishedAt}</dd>
          </div>
        )}
        {lastReviewed && (
          <div className="flex gap-2">
            <dt className="text-text-secondary shrink-0">آخرین بازبینی:</dt>
            <dd className="text-text">{lastReviewed}</dd>
          </div>
        )}
      </dl>
      <p className="mt-4 text-xs text-text-secondary border-t border-border pt-4">
        {siteConfig.medicalDisclaimer}
      </p>
    </aside>
  );
}
