import { useTheme } from "styled-components";
import { Typography } from "../Typography";
import { CardContainer, CardContent, PlayButton } from "./styles";
import { CardProps } from "./types";
import Atropos from "atropos/react";
import { Play } from "iconsax-react";

function Card({ type = "music", image, title, text, ...rest }: CardProps) {
  const theme = useTheme();

  return (
    <CardContainer>
      <Atropos
        innerClassName="card-inner"
        activeOffset={20}
        rotateXMax={2}
        rotateYMax={2}
        rotateYInvert={true}
        rotateXInvert={true}
        highlight={false}
        shadow={false}
      >
        <CardContent tabIndex={0} {...rest} data-atropos-offset="1">
          <img src={image} data-atropos-offset="1" />
          <Typography variant="title" size={16} data-atropos-offset="5">
            {title}
          </Typography>
          <Typography
            variant="text"
            size={14}
            color={theme.text.subdued}
            data-atropos-offset="5"
          >
            {text}
          </Typography>
          <PlayButton data-atropos-offset="15">
            <Play variant="Bold" />
          </PlayButton>
        </CardContent>
      </Atropos>
    </CardContainer>
  );
}

export { Card };
