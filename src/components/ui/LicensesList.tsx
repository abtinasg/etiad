import { siteConfig } from "@/lib/site";

type LicensesListProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function LicensesList({ className = "", variant = "light" }: LicensesListProps) {
  const cardClass =
    variant === "dark"
      ? "bg-white/5 border-white/10 text-white"
      : "bg-surface border-border text-primary";
  const subtitleClass =
    variant === "dark" ? "text-white/70" : "text-text-secondary";

  return (
    <div className={className}>
      <ul className="grid sm:grid-cols-3 gap-4">
        {siteConfig.licenses.map((license) => (
          <li
            key={license}
            className={`rounded-[16px] border p-5 ${cardClass}`}
          >
            <p className="font-bold leading-relaxed">{license}</p>
            <p className={`mt-2 text-sm ${subtitleClass}`}>
              از {siteConfig.licensesIssuer}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
