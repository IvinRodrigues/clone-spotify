import { PropsWithChildren } from "react";

interface BadgeProps extends PropsWithChildren {
  active?: boolean;
  onActive?: (active: boolean) => void;
}

export type { BadgeProps };
