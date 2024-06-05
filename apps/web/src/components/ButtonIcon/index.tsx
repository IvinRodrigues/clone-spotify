import { cloneElement } from "react";
import { ButtonIconContainer } from "./styles";
import { ButtonIconProps } from "./types";
import { useTheme } from "styled-components";

function ButtonIcon({
  active = false,
  size = "medium",
  rounded = false,
  children,
  ...rest
}: ButtonIconProps) {
  const theme = useTheme();
  const icon = cloneElement(children, {
    size: getIconSize(size),
    color: getIconColor(active),
    variant: getIconVariant(active),
  });

  function getIconVariant(active: boolean) {
    if (active) {
      return "Bold";
    }
    return "Outline";
  }

  function getIconColor(active: boolean) {
    if (active) {
      return theme.text.base;
    }
    return theme.text.subdued;
  }

  function getIconSize(size: string) {
    if (size === "big") {
      return 24;
    } else if (size === "medium") {
      return 18;
    } else {
      return 14;
    }
  }

  return (
    <ButtonIconContainer
      active={active}
      size={size}
      rounded={rounded}
      {...rest}
    >
      {icon}
    </ButtonIconContainer>
  );
}

export { ButtonIcon };
