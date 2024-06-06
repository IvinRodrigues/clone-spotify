import { PropsWithChildren } from "react";

interface ScrollProps extends PropsWithChildren {
  containerRef?: any;
  animatedItems?: boolean;
  oberserver?: any;
}

export type { ScrollProps };
