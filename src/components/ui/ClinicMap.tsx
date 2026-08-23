"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

type ClinicMapProps = {
  className?: string;
};

export function ClinicMap({ className = "" }: ClinicMapProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative h-full w-full min-h-[inherit] bg-sage-light ${className}`}>
      {isLoading && (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-sage-light"
          aria-live="polite"
          aria-busy="true"
        >
          <div
            className="h-10 w-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin motion-reduce:animate-none motion-reduce:border-primary/40"
            aria-hidden="true"
          />
          <p className="text-sm font-medium text-text-secondary">در حال بارگذاری نقشه...</p>
        </div>
      )}
      <iframe
        src={siteConfig.mapsEmbedUrl}
        title="موقعیت کلینیک ترک اعتیاد خورشید مشهد روی نقشه"
        className={`h-full w-full border-0 transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
