import { HTMLAttributes } from "react";
import { SectionType } from "../../../../data/home";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  section: SectionType;
}

export type { SectionProps };
