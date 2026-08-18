import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-primary text-white border-primary hover:bg-primary-hover hover:border-primary-hover",
  outline:
    "bg-transparent text-primary border-primary hover:bg-sage",
  accent:
    "bg-accent text-white border-accent hover:bg-accent-light hover:border-accent-light",
  ghost: "bg-transparent text-primary border-transparent hover:bg-sage",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-3.5 text-lg",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold border-2 rounded-[12px] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external || href.startsWith("tel:") || href.startsWith("http")) {
      const isHttp = href.startsWith("http");
      return (
        <a
          href={href}
          className={classes}
          {...(isHttp || external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button type="button" className={classes}>{children}</button>;
}
