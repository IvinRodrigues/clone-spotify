import styled from "styled-components";
import { ButtonIconProps } from "./types";

interface ButtonIconContainerProps extends ButtonIconProps {
  iconVariant: "Bold" | "Broken" | "Bulk" | "Linear" | "Outline" | "TwoTone";
}

const ButtonIconContainer = styled.button<ButtonIconContainerProps>`
  ${({ rounded, size }) => {
    if (size === "big") {
      return `
          width: 48px;
          height: 48px;
          border-radius: ${rounded ? "48px" : "4px;"};
      `;
    } else {
      return `
          width: 32px;
          height: 32px;
          border-radius: ${rounded ? "32px" : "4px"};
      `;
    }
  }}

  background-color: ${({ theme, transparent }) =>
    transparent ? "transparent" : theme.background.interactive.base};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ rounded }) => (rounded ? "#ffffff0d" : "transparent")};
  transition: 0.2s all ease-in-out;

  svg,
  path {
    transition: 0.2s all ease-in-out;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.background.tinted.base};

    path {
      ${({ theme, iconVariant }) => {
        if (iconVariant === "Bold") {
          return `fill: ${theme.text.base}`;
        } else {
          return `stroke: ${theme.text.base}`;
        }
      }};
    }
  }
`;

export { ButtonIconContainer };
