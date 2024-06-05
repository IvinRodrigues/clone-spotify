import styled from "styled-components";

const TourDateContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const TourDateMonthContainer = styled.div`
  background-color: ${({ theme }) => theme.background.default.highlight};
  width: 60px;
  height: 60px;
  border-radius: 4px;
  display: flex;
  gap: 6px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TourDateInfo = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
`;

export { TourDateContainer, TourDateMonthContainer, TourDateInfo };
