import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/site";

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="مسیر صفحه" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-border" aria-hidden="true">/</span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-text font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
