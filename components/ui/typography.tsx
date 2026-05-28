import { ReactNode } from "react";

/* ─── Eyebrow ─── */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`eyebrow block mb-5 font-sans text-[10px] font-bold uppercase tracking-[0.20em] text-accent ${className}`}
    >
      {children}
    </span>
  );
}

/* ─── Display Headline (large) ─── */
export function Display({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`display font-serif font-bold leading-[1.14] tracking-tight text-[clamp(2rem,3.8vw,4.4rem)] [&_em]:italic ${className}`}
    >
      {children}
    </h2>
  );
}

/* ─── Display Headline (medium) ─── */
export function DisplayMd({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`display-md font-serif font-bold leading-[1.07] tracking-tight text-[clamp(2rem,3.2vw,3.8rem)] [&_em]:italic ${className}`}
    >
      {children}
    </h2>
  );
}

/* ─── Lead / Body ─── */
export function Lead({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-serif text-[clamp(1rem,1.3vw,1.18rem)] font-normal leading-[1.78] text-text-muted max-w-[620px] ${className}`}
    >
      {children}
    </p>
  );
}

/* ─── Rule / Divider ─── */
export function Rule({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rule w-9 h-0.5 bg-accent my-7 ${className}`}
    />
  );
}
