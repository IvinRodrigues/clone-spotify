import styled from "styled-components";

const LibraryContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
  grid-area: library;
`;

const Panel = styled.nav`
  background-color: ${({ theme }) => theme.background.default.base};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 12px;
  border-radius: 12px;
`;

const PanelWithScroll = styled.nav`
  background-color: ${({ theme }) => theme.background.default.base};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 24px;
  border-radius: 12px;

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

const Music = styled.div`
  background-color: ${({ theme }) => theme.text.annoucement};
  width: 48px;
  height: 48px;
  border-radius: 4px;
  cursor: pointer;
`;

export { LibraryContainer, Panel, PanelWithScroll, MusicsContainer, Music };
