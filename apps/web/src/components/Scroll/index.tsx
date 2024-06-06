import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useCalculateLayout } from "../../hooks/useCalculateLayout";
import { ScrollProps } from "./types";

function Scroll({
  children,
  containerRef = null,
  animatedItems = false,
  oberserver,
}: ScrollProps) {
  const { height } = useCalculateLayout(containerRef);

  function handleScroll(ref: any) {
    const container = ref.current;
    if (container) {
      const containerHeight = container.clientHeight;
      const scrollTop = container.scrollTop;
      const scrollBottom = scrollTop + containerHeight;

      const elementsToAnimate = container.querySelectorAll("[data-aos]");

      Array.from(elementsToAnimate).map((element: any) => {
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top + scrollTop - container.offsetTop;
        const elementBottom = elementTop + elementRect.height;

        if (elementBottom > scrollTop && elementTop < scrollBottom) {
          if (!element.classList.contains("aos-animate")) {
            element.classList.add("aos-animate");
          }
        } else {
          if (element.classList.contains("aos-animate")) {
            element.classList.remove("aos-animate");
            element.removeAttribute("data-aos-delay");
          }
        }
        return null;
      });
    }
  }

  useLayoutEffect(() => {
    setTimeout(() => {
      if (animatedItems) {
        handleScroll(containerRef);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (oberserver) {
        handleScroll(containerRef);
      }
    }, 200);
  }, [oberserver]);

  return (
    <OverlayScrollbarsComponent
      className="overlayscrollbars-react custom-scrollbar"
      layout-id="scroll"
      style={{ height: height }}
      element="div"
      events={{
        scroll() {
          animatedItems ? handleScroll(containerRef) : null;
        },
      }}
      options={{
        overflow: {
          x: "hidden",
        },
        scrollbars: {
          visibility: "auto",
          theme: "os-theme-light",
          autoHide: "scroll",
          autoHideDelay: 400,
        },
      }}
      defer
    >
      {children}
    </OverlayScrollbarsComponent>
  );
}

export { Scroll };
