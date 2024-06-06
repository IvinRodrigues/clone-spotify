import { RefObject, useLayoutEffect, useState } from "react";

interface DimensionsInterface {
  width: number;
  height: number;
}

function useCalculateLayout(
  containerRef: RefObject<HTMLDivElement>,
): DimensionsInterface {
  const [dimensions, setDimensions] = useState<DimensionsInterface>({
    width: 200,
    height: 0,
  });

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (container) {
      const totalHeight = container.clientHeight;
      const totalWidth = container.clientWidth;
      const scrollElement = container.querySelector("[layout-id='scroll']");
      const padding = 12;
      const scrollElementOffsetTop = scrollElement?.getBoundingClientRect().top;

      if (
        totalHeight !== undefined &&
        totalWidth !== undefined &&
        scrollElementOffsetTop !== undefined
      ) {
        const finalHeight =
          totalHeight - Math.round(scrollElementOffsetTop) + padding;

        setDimensions({ width: totalWidth, height: finalHeight });
      }
    }
  }, []);

  return dimensions;
}

export { useCalculateLayout };
