import { styled, keyframes } from "styled-components";

const fadeRight = keyframes`
 0% { opacity: 0; transform: translateX(-20px) }
 100% { opacity: 1; transform: translateY(0) }
`;

const LibraryContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
  grid-area: library;
  position: relative;
  z-index: 1;
`;

const Panel = styled.nav`
  background-color: ${({ theme }) => theme.background.default.base};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #ffffff0d;
  animation-name: ${fadeRight};
  animation-duration: 1.6s;
  animation-fill-mode: forwards;
`;

const PanelWithScroll = styled.nav`
  background-color: ${({ theme }) => theme.background.default.base};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 24px;
  border-radius: 12px;
  border: 1px solid #ffffff0d;
  opacity: 0;
  animation-name: ${fadeRight};
  animation-duration: 1.6s;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;

  button {
    margin-left: 12px;
  }
`;

const MusicsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding-bottom: 12px;
`;

const Music = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  object-fit: cover;
  border: 1px solid #ffffff0d;
  cursor: pointer;
`;

export { LibraryContainer, Panel, PanelWithScroll, MusicsContainer, Music };
