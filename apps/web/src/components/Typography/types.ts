import { HTMLAttributes, PropsWithChildren } from "react";

interface TypographyPops extends HTMLAttributes<HTMLSpanElement> {
  variant?: "title" | "subtitle" | "text" | "link";
  as?: string;
  size?: number;
  color?: string;
  link?: boolean;
}

export type { TypographyPops };
