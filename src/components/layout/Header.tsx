"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/site";
import { clinicImages } from "@/lib/images";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "/", label: "خانه" },
  { href: "/services", label: "خدمات" },
  { href: "/doctors", label: "تیم درمان" },
  { href: "/family-guide", label: "راهنمای خانواده" },
  { href: "/about", label: "درباره ما" },
  { href: "/articles", label: "مقالات" },
  { href: "/contact", label: "تماس" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="absolute inset-0 -z-10 bg-bg-warm/95 backdrop-blur-md" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-lg"
          aria-label="کلینیک خورشید — صفحه اصلی"
        >
          <span className="w-11 h-11 flex items-center justify-center shrink-0">
            <Image
              src={clinicImages.logo.src}
              alt={clinicImages.logo.alt}
              width={44}
              height={44}
              className="w-11 h-11 object-contain"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-xl font-extrabold text-primary">{siteConfig.brand}</span>
            <span className="text-xs text-text-secondary font-medium hidden sm:block">
              {siteConfig.brandSub}
            </span>
          </span>
        </Link>

        {menuOpen && (
          <div
            className="fixed inset-0 top-20 z-30 bg-black/40 lg:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <nav
          className={`lg:flex items-center gap-1 ${
            menuOpen
              ? "fixed inset-x-0 top-20 bg-bg-warm z-40 flex flex-col p-4 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto"
              : "hidden"
          }`}
          aria-label="منوی اصلی"
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 lg:py-2 text-base lg:text-sm font-medium text-text-secondary hover:text-primary hover:bg-sage rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button href={siteConfig.phoneTel} variant="primary" size="sm" className="hidden md:inline-flex">
            تماس با کلینیک
          </Button>
          <button
            type="button"
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-sage transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
          >
            <span className={`block w-5 h-0.5 bg-primary transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-5 h-0.5 bg-primary transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-primary transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
