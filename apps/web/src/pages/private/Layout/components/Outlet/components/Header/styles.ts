import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  backdrop-filter: blur(24px);
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin-bottom: 12px;
  z-index: 5;
  position: sticky;
  border-bottom: 1px solid #ffffff0d;
  top: 0;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Items = styled.div`
  display: flex;
  gap: 8px;
`;

export { HeaderContainer, Navbar, Items };
