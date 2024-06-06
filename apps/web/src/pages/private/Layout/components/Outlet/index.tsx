import { Header } from "./components/Header";
import {
  Content,
  ElementTransition,
  HomeAnimationContainer,
  OutletAnimationContainer,
  OutletContainer,
} from "./styles";
import { Outlet } from "react-router-dom";
import { useRef } from "react";
import { useCalculateLayout } from "../../../../../hooks/useCalculateLayout";
import { Scroll } from "../../../../../components/Scroll";
import { Home } from "../../../Home";
import { useOutletAnimation } from "../../../../../hooks/useOutletAnimation";

function OutletContent() {
  const outletContainerRef = useRef<HTMLDivElement | null>(null);
  const elementTransitionRef = useRef<HTMLDivElement | null>(null);
  const { width } = useCalculateLayout(outletContainerRef);
  const { visible } = useOutletAnimation();

  return (
    <OutletContainer ref={outletContainerRef}>
      <Scroll
        containerRef={outletContainerRef}
        oberserver={visible}
        animatedItems
      >
        <Header />
        <Content width={width}>
          <OutletAnimationContainer visible={visible}>
            <Outlet />
          </OutletAnimationContainer>
          <ElementTransition ref={elementTransitionRef} visible={visible} />
          <HomeAnimationContainer visible={visible}>
            <Home />
          </HomeAnimationContainer>
        </Content>
      </Scroll>
    </OutletContainer>
  );
}

export { OutletContent };
