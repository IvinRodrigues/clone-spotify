import styled from "styled-components";

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const PlayButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  svg,
  path {
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.text.success};

    path {
      fill: ${({ theme }) => theme.text.base};
    }
  }
`;

export { ControlsWrapper, PlayButton };
