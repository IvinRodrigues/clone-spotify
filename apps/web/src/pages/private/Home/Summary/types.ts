import { HTMLAttributes } from "react";
import { ArtistType } from "../../../../data/home";

interface SummaryProps extends HTMLAttributes<HTMLDivElement> {
  artists: ArtistType[];
}

export type { SummaryProps };
