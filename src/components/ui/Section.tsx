import { type HTMLAttributes } from "react";
import { Container } from "./Container";

const backgrounds = {
  white: "bg-white",
  sand: "bg-sand-selvedge",
  dark: "bg-indus-deep text-white",
} as const;

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  bg?: keyof typeof backgrounds;
}

export function Section({
  bg = "white",
  className = "",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={`py-16 sm:py-20 ${backgrounds[bg]} ${className}`.trim()}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}
