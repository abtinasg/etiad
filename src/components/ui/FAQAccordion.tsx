"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/data/faq";

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 py-5 text-right font-semibold text-primary hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              id={`faq-btn-${index}`}
              aria-controls={`faq-panel-${index}`}
            >
              <span className="flex-1">{item.question}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className={`shrink-0 transition-transform duration-300 text-text-secondary ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-btn-${index}`}
              hidden={!isOpen}
              className="pb-5"
            >
              <p className="text-text-secondary leading-relaxed pr-8">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
