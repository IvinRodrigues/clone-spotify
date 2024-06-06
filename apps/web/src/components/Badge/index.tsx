import { useState } from "react";
import { BadgeContainer } from "./styles";
import { BadgeProps } from "./types";

function Badge({
  active = false,
  onActive = () => {},
  children,
  ...rest
}: BadgeProps) {
  const [internalActive, setInternalActive] = useState<boolean>(false);

  function handleOnClick() {
    const newInternalActive = !internalActive;

    setInternalActive(newInternalActive);
    onActive(newInternalActive);
  }

  return (
    <BadgeContainer active={active} onClick={handleOnClick} {...rest}>
      {children}
    </BadgeContainer>
  );
}

export { Badge };
