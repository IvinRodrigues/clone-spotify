import { ButtonHTMLAttributes, ReactElement } from "react";

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  size?: "big" | "medium" | "small";
  rounded?: boolean;
  children: ReactElement;
}

export type { ButtonIconProps };
