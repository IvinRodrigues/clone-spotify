import styled from "styled-components";
import { ChipProps } from "./types";

const ChipContainer = styled.button<ChipProps>`
  background-color: ${({ theme, active }) =>
    active ? theme.text.success : "transparent"};
  padding: 8px 16px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme, active }) =>
    active ? "transparent" : theme.text.subdued};
  border-radius: 16px;
  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme, active }) =>
      !active && theme.background.tinted.base};
  }
`;

export { ChipContainer };
