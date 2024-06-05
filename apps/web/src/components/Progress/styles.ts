import styled from "styled-components";
import { ProgressProps } from "./types";

const ProgressWrapper = styled.input<ProgressProps>`
  width: ${({ size }) => (size === undefined ? "100%" : `${size}px`)};
  -webkit-appearance: none;
  appearance: none;
  border-radius: 4px;
  height: 4px;
  background: ${({ theme, value }) => `linear-gradient(
    to right,
    ${theme.text.base} 0%,
    ${theme.text.base} ${value}%,
    ${theme.background.elevated.base} ${value}%,
    ${theme.background.elevated.base} 100%
  )`};
  transition: all 0.2s ease-in-out;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.text.base};
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    border-radius: 8px;
    height: 8px;
    background: ${({ theme, value }) => `linear-gradient(
    to right,
    ${theme.text.success} 0%,
    ${theme.text.success} ${value}%,
    ${theme.background.elevated.base} ${value}%,
    ${theme.background.elevated.base} 100%
  )`};
    cursor: pointer;

    &::-webkit-slider-thumb {
      width: 14px;
      height: 14px;
      opacity: 1;
    }
  }
`;

export { ProgressWrapper };
