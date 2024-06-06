import { styled, keyframes } from "styled-components";

interface ContentProps {
  width: number;
}

interface AnimationContainer {
  visible: boolean;
}

const fadeScaleUp = keyframes`
 0% { opacity: 0; transform: scale(.99) }
 100% { opacity: 1; transform: scale(1) }
`;

const OutletContainer = styled.main`
  grid-area: main;
  background-color: ${({ theme }) => theme.background.default.base};
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #ffffff0d;
  opacity: 0;
  animation-name: ${fadeScaleUp};
  animation-duration: 1.6s;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;
  position: relative;
`;

const Content = styled.div<ContentProps>`
  width: ${({ width }) => `${width}px`};
  padding-bottom: 24px;
`;

const ElementTransition = styled.div<AnimationContainer>`
  width: 200%;
  height: 200%;
  left: calc(50% - 100%);
  ${({ visible }) => {
    if (visible) {
      return `
        top: -20%;
      `;
    }
    return `
        top: -200%;
    `;
  }};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background.default.base};
  position: fixed;
  transition: all 1s ease-in-out;
  z-index: 2;
`;

const OutletAnimationContainer = styled.div<AnimationContainer>`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const HomeAnimationContainer = styled.div<AnimationContainer>`
  z-index: 1;
  height: ${(visible) => (visible ? "fit-content" : "400px")};
  position: ${(visible) => (visible ? "relative" : "absolute")};
  overflow: hidden;
  visibility: ${(visible) => (visible ? "visible" : "hidden")};
`;

export {
  OutletContainer,
  Content,
  ElementTransition,
  OutletAnimationContainer,
  HomeAnimationContainer,
};
