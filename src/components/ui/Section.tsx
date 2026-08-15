import type { ReactNode } from "react";

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  id?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  centered = false,
  id,
}: SectionHeaderProps) {
  return (
    <header
      className={`mb-10 lg:mb-14 ${centered ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}`}
    >
      {label && (
        <span className="block text-sm font-semibold text-accent mb-2">
          {label}
        </span>
      )}
      <h2
        id={id}
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary leading-tight mb-4"
      >
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}

type ContainerProps = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function Container({
  children,
  className = "",
  narrow = false,
}: ContainerProps) {
  return (
    <div
      className={`mx-auto px-5 sm:px-6 lg:px-8 ${narrow ? "max-w-3xl" : "max-w-7xl"} ${className}`}
    >
      {children}
    </div>
  );
}
