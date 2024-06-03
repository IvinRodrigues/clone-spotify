import styled from "styled-components";

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const OverviewTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

export { OverviewContainer, OverviewTitleContainer };
