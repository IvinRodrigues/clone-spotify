import styled from "styled-components";

const SummaryContainer = styled.section`
  display: flex;
`;

const Item = styled.div`
  background-color: ${({ theme }) => theme.background.tinted.press};
  width: 300px;
  gap: 16px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  margin-left: 12px;
  border: 1px solid #ffffff0d;
  transition: all 0.2s ease-in-out;

  img {
    width: 64px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  &:hover {
    background-color: ${({ theme }) => theme.background.tinted.base};
    cursor: pointer;
  }
`;

export { SummaryContainer, Item };
