import styled from "styled-components";

const OverviewContainer = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;

  img {
    width: 56px;
    height: 56px;
    border-radius: 4px;
    object-fit: cover;

    &:hover {
      cursor: pointer;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export { OverviewContainer, InfoContainer };
