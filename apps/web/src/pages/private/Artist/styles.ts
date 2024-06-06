import styled from "styled-components";

interface PageContainerProps {
  visible?: boolean;
}

const Container = styled.div<PageContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  z-index: 3;
  transition: all 0.4s ease-in-out;
  transform: scale(1);

  ${({ visible }) => {
    if (visible) {
      return `
        opacity: 1;
        transform: scale(1);
      `;
    }
    return `
        opacity: 0;
        transform: scale(1.2);
    `;
  }}
`;

export { Container };
