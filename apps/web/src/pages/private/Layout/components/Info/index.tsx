import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Content, InfoContainer } from "./styles";
import { useLayoutEffect, useRef, useState } from "react";
import { Header } from "./components/Header";
import { Overview } from "./components/Overview";
import { About } from "./components/About";
import { Credits } from "./components/Credits";
import { Tour } from "./components/Tour";
import { Queue } from "./components/Queue";

function Info() {
  const infoContainerRef = useRef<HTMLDivElement | null>(null);
  const [infosHeight, setInfosHeight] = useState<string>("400px");

  useLayoutEffect(() => {
    const totalHeight = infoContainerRef.current?.clientHeight;
    const headerHeight = infoContainerRef.current?.children[0]?.clientHeight;

    if (totalHeight !== undefined && headerHeight !== undefined) {
      const finalHeight = totalHeight - headerHeight;
      setInfosHeight(`${finalHeight}px`);
    }
  }, []);

  return (
    <InfoContainer ref={infoContainerRef}>
      <Header />
      <OverlayScrollbarsComponent
        className="overlayscrollbars-react"
        style={{ height: infosHeight }}
        element="div"
        options={{
          scrollbars: {
            theme: "os-theme-light",
            autoHide: "scroll",
            autoHideDelay: 400,
          },
        }}
        defer
      >
        <Content>
          <Overview />
          <About />
          <Credits />
          <Tour />
          <Queue />
        </Content>
      </OverlayScrollbarsComponent>
    </InfoContainer>
  );
}

export { Info };
