import { useTheme } from "styled-components";
import { Typography } from "../Typography";
import {
  CardContainer,
  CardContent,
  CardContentContainer,
  PlayButton,
} from "./styles";
import { CardProps } from "./types";
import Atropos from "atropos/react";
import { Play } from "iconsax-react";

function Card({
  type = "music",
  image,
  title,
  text,
  onClick = () => {},
  onPlay = () => {},
  ...rest
}: CardProps) {
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
        <CardContentContainer
          tabIndex={0}
          {...rest}
          data-atropos-offset="1"
          type={type}
        >
          <CardContent onClick={onClick}>
            <img src={image} data-atropos-offset="1" />
            <Typography variant="title" size={16} data-atropos-offset="5">
              {title}
            </Typography>
            <Typography
              variant="text"
              size={14}
              color={theme.text.subdued}
              style={{ lineHeight: "18px" }}
              data-atropos-offset="2"
            >
              {text}
            </Typography>
          </CardContent>
          <PlayButton data-atropos-offset="15" onClick={onPlay}>
            <Play variant="Bold" />
          </PlayButton>
        </CardContentContainer>
      </Atropos>
    </CardContainer>
  );
}

export { Card };
