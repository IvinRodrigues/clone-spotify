import styled from "styled-components";

interface CardContentInterface {
  type: "music" | "artist";
}

const CardContainer = styled.div`
  position: relative;
`;

const CardContentContainer = styled.div<CardContentInterface>`
  width: 232px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({ type }) => (type === "artist" ? "50%" : "12px")};
    object-fit: cover;
  }

  &:hover,
  &:focus-within {
    button {
      opacity: 1;
      top: 150px;
    }
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 12px 24px;
  border-radius: 12px;
  transition: all 0.4s ease-in-out;
  border: 1px solid #ffffff0d;
  background-color: ${({ theme }) => theme.background.tinted.press};
  overflow: hidden;
  position: relative;

  &:hover,
  &:focus-within {
    cursor: pointer;
    background-color: ${({ theme }) => theme.background.tinted.base};
  }
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.text.success};
  position: absolute;
  top: 172px;
  right: 24px;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  transform-origin: center center;

  &:hover {
    cursor: pointer;
    width: 60px;
    height: 60px;
    box-shadow: 0 0 64px ${({ theme }) => theme.text.success};
  }
`;

export { CardContainer, CardContentContainer, CardContent, PlayButton };
