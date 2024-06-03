import { PropsWithChildren } from "react";
import { PlacesType } from "react-tooltip";

interface TooltipProps extends PropsWithChildren {
  id: string;
  place?: PlacesType;
  title: string;
  subtitle?: string;
  pinned?: boolean;
  offset?: number;
}

export type { TooltipProps };
