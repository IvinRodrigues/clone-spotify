import styled from "styled-components";

const CardContainer = styled.div``;

const CardContent = styled.div`
  width: 232px;
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

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 12px;
  }

  &:hover,
  &:focus-within {
    cursor: pointer;
    background-color: ${({ theme }) => theme.background.tinted.base};

    button {
      opacity: 1;
      top: 150px;
    }
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
  top: 160px;
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

export { CardContainer, CardContent, PlayButton };
