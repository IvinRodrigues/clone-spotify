import styled from "styled-components";
import { ButtonIconProps } from "./types";

const ButtonIconContainer = styled.button<ButtonIconProps>`
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

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: 0.2s all ease-in-out;

  svg,
  path {
    transition: 0.2s all ease-in-out;
  }

  &:hover {
    cursor: pointer;
    background-color: #141414;

    path {
      fill: ${({ theme }) => theme.text.base};
    }
  }
`;

export { ButtonIconContainer };
