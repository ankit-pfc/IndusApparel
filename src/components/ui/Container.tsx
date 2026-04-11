import { type ElementType, type HTMLAttributes } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function Container({
  as: Tag = "div",
  className = "",
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
}
