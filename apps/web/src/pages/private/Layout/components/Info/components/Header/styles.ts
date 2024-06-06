import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-bottom: 12px;
  backdrop-filter: blur(24px);
  border-bottom: 1px solid #ffffff0d;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const HeaderButtons = styled.div`
  display: flex;
  gap: 12px;
`;

export { HeaderButtons, HeaderContainer };
