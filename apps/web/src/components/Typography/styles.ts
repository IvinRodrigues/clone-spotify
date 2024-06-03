import styled from "styled-components";
import { TypographyPops } from "./types";

const TypographyText = styled.span<TypographyPops>`
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  vertical-align: middle;
  line-height: auto;
  transition: all 0.2s ease-in-out;

  ${({ size, color, theme, variant }) => {
    if (variant === "title") {
      return `
            color: ${color ?? theme.text.base};
            font-size: ${size === undefined ? "24px" : `${size}px`};
            font-weight: bold;
        `;
    } else if (variant === "subtitle") {
      return `
            color: ${color ?? theme.text.base};
            font-size: ${size === undefined ? "18px" : `${size}px`};
            font-weight: medium;
        `;
    } else if (variant === "text") {
      return `
            color: ${color ?? theme.text.base};
            font-size: ${size === undefined ? "14px" : `${size}px`};
            font-weight: regular;
        `;
    } else {
      return `
            color: ${color ?? theme.text.base};
            font-size: ${size === undefined ? "14px" : `${size}px`};
            font-weight: bold;
            text-decoration: solid underline 2px transparent;

            &:hover {
              cursor: pointer;
              text-decoration: solid underline 2px;
            }
        `;
    }
  }}
`;

export { TypographyText };
