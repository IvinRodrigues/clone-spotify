import { Tooltip as ReactTooltip } from "react-tooltip";
import { TooltipProps } from "./types";
import { Typography } from "../Typography";
import { SubtitleContainer, TooltipContent } from "./styles";
import { Paperclip2 } from "iconsax-react";
import { useTheme } from "styled-components";

export function Tooltip({
  id,
  place = "right",
  title,
  subtitle,
  pinned = false,
  offset = 4,
  ...rest
}: TooltipProps) {
  const theme = useTheme();

  return (
    <ReactTooltip
      className="custom-tooltip"
      id={id}
      offset={offset}
      place={place}
      opacity={1}
      noArrow
      {...rest}
    >
      <TooltipContent>
        <Typography variant="subtitle" size={14}>
          {title}
        </Typography>
        {subtitle && (
          <SubtitleContainer>
            {pinned && <Paperclip2 size={16} color={theme.text.success} />}
            <Typography variant="text" size={12}>
              {subtitle}
            </Typography>
          </SubtitleContainer>
        )}
      </TooltipContent>
    </ReactTooltip>
  );
}
