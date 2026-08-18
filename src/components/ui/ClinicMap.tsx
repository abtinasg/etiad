import { siteConfig } from "@/lib/site";

type ClinicMapProps = {
  className?: string;
};

export function ClinicMap({ className = "" }: ClinicMapProps) {
  return (
    <iframe
      src={siteConfig.mapsEmbedUrl}
      title="موقعیت کلینیک ترک اعتیاد خورشید مشهد روی نقشه"
      className={`h-full w-full border-0 ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
