import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ProgressWrapper } from "./styles";
import { ProgressProps } from "./types";

function Progress({ size }: ProgressProps) {
  const progressRef = useRef(null);
  const [progressValue, setProgressValue] = useState<number>(10);

  useEffect(() => {}, []);

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(event.target.value);

    setProgressValue(newValue);
  }

  return (
    <ProgressWrapper
      type="range"
      size={size}
      min={0}
      max={100}
      value={progressValue}
      ref={progressRef}
      onChange={handleOnChange}
    />
  );
}

export { Progress };
