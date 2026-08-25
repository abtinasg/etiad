"use client";

import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";
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

function updateSiteHeaderHeight() {
  const height = document.getElementById("site-header")?.offsetHeight ?? 0;
  document.documentElement.style.setProperty("--site-header-h", `${height}px`);
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    updateSiteHeaderHeight();
    window.addEventListener("resize", updateSiteHeaderHeight);
    return () => window.removeEventListener("resize", updateSiteHeaderHeight);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    document.body.classList.toggle("mobile-menu-open", menuOpen);
    updateSiteHeaderHeight();

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [menuOpen]);

  const mobileMenu =
    menuOpen &&
    mounted &&
    createPortal(
      <>
        <div
          className="fixed inset-x-0 bottom-0 z-[80] bg-black/40 lg:hidden"
          style={{ top: "var(--site-header-h, 7.5rem)" }}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        <nav
          className="fixed inset-x-0 bottom-0 z-[90] flex flex-col bg-bg-warm p-4 pb-6 shadow-lg lg:hidden overflow-y-auto"
          style={{
            top: "var(--site-header-h, 7.5rem)",
            maxHeight: "calc(100vh - var(--site-header-h, 7.5rem))",
          }}
          aria-label="منوی اصلی"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-[12px] px-4 py-3.5 text-base font-semibold text-text-secondary transition-colors hover:bg-sage hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-border pt-4">
            <p className="mb-3 text-center text-sm text-text-secondary">
              {siteConfig.workingHoursResponse}
            </p>
            <Button
              href={siteConfig.phoneTel}
              variant="primary"
              size="lg"
              className="w-full"
            >
              تماس با کلینیک
            </Button>
          </div>
        </nav>
      </>,
      document.body
    );

  return (
    <>
      <header className={`transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""}`}>
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

          <nav className="hidden lg:flex items-center gap-1" aria-label="منوی اصلی">
            <ul className="flex items-center gap-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary hover:bg-sage rounded-lg transition-colors"
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
              <span
                className={`block w-5 h-0.5 bg-primary transition-transform ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-primary transition-opacity ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-primary transition-transform ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>
      {mobileMenu}
    </>
  );
}
