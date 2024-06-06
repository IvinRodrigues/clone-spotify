import { styled, keyframes } from "styled-components";

const fadeUp = keyframes`
 0% { opacity: 0; transform: translateY(20px) }
 100% { opacity: 1; transform: translateY(0) }
`;

const PlayerContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-area: player;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  opacity: 0;
  animation-name: ${fadeUp};
  animation-duration: 1.6s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;

export { PlayerContainer };
