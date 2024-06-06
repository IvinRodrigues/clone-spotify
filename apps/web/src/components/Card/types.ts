import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  type: "music" | "artist";
  image: string;
  title: string;
  text?: string;
}

export type { CardProps };
