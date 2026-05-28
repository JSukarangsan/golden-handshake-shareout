import { ReactNode } from "react";

type SectionVariant = "light" | "alt" | "dark" | "dark2" | "custom";
type Act = "case" | "design" | "context" | "synth";
type WrapWidth = "normal" | "wide" | "center";

const variantClass: Record<string, string> = {
  light: "section-light",
  alt: "section-alt",
  dark: "section-dark",
  dark2: "section-dark2",
  custom: "",
};

const wrapClass: Record<string, string> = {
  normal: "px-20 py-[88px] max-w-[1060px] w-full",
  wide: "px-20 py-[88px] w-full",
  center: "px-20 py-[88px] max-w-[860px] mx-auto",
};

export function Section({
  id,
  variant = "light",
  act,
  wrap = "normal",
  style,
  className = "",
  children,
}: {
  id?: string;
  variant?: SectionVariant;
  act?: Act;
  wrap?: WrapWidth;
  style?: React.CSSProperties;
  className?: string;
  children: ReactNode;
}) {
  const actClass = act ? `act-${act}` : "";
  return (
    <section
      id={id}
      className={`min-h-screen w-full flex flex-col justify-center relative overflow-hidden ${variantClass[variant]} ${actClass} ${className}`}
      style={style}
    >
      <div className={wrapClass[wrap]}>{children}</div>
    </section>
  );
}
