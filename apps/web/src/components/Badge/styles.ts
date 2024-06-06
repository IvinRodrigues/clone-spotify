import styled from "styled-components";
import { BadgeProps } from "./types";

const BadgeContainer = styled.button<BadgeProps>`
  padding: 12px;
  border-radius: 16px;

  ${({ active, theme }) => {
    if (active) {
      return `
            color: ${theme.background.elevated.press};
            background-color: ${theme.text.base};
        `;
    }
    return `
            color: ${theme.text.base};
            background-color: ${theme.background.tinted.press};
    `;
  }}

  &:hover {
    cursor: pointer;
  }
`;

export { BadgeContainer };
