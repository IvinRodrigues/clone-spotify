import { useState } from "react";
import { Typography } from "../Typography";
import { ChipContainer } from "./styles";
import { ChipProps } from "./types";

function Chip({ active = false, onInteract = () => {}, ...rest }: ChipProps) {
  const [internalActive, setInternalActive] = useState(active);
  const label = internalActive ? "Unfollow" : "Follow";

  function handleOnClick() {
    setInternalActive(!internalActive);
    onInteract(internalActive);
  }

  return (
    <ChipContainer active={internalActive} onClick={handleOnClick} {...rest}>
      <Typography variant="subtitle" size={14}>
        {label}
      </Typography>
    </ChipContainer>
  );
}

export { Chip };
