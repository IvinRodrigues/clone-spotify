import { Content, InfoContainer } from "./styles";
import { useRef } from "react";
import { Header } from "./components/Header";
import { Overview } from "./components/Overview";
import { About } from "./components/About";
import { Credits } from "./components/Credits";
import { Tour } from "./components/Tour";
import { Queue } from "./components/Queue";
import { Scroll } from "../../../../../components/Scroll";

function Info() {
  const infoContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <InfoContainer ref={infoContainerRef}>
      <Scroll containerRef={infoContainerRef}>
        <Header />
        <Content>
          <Overview />
          <About />
          <Credits />
          <Tour />
          <Queue />
        </Content>
      </Scroll>
    </InfoContainer>
  );
}

export { Info };
