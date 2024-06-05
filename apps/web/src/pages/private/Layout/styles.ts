import styled from "styled-components";

const Grid = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background.elevated.press};
  display: grid;
  gap: 8px;
  padding: 8px;
  grid-template-columns: 70px 1fr 420px;
  grid-template-rows: 1fr 74px;
  grid-template-areas:
    "library main   info"
    "player  player player";
`;

const MainContent = styled.main`
  grid-area: "main";
  background-color: red;
`;

export { Grid, MainContent };
