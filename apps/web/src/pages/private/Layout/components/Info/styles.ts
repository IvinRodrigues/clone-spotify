import { styled, keyframes } from "styled-components";

const fadeLeft = keyframes`
 0% { opacity: 0; transform: translateX(20px) }
 100% { opacity: 1; transform: translateY(0) }
`;

const InfoContainer = styled.aside`
  background-color: ${({ theme }) => theme.background.default.base};
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  grid-area: info;
  overflow: hidden;
  border: 1px solid #ffffff0d;
  opacity: 0;
  animation-name: ${fadeLeft};
  animation-duration: 1.6s;
  animation-delay: 0.8s;
  animation-fill-mode: forwards;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 12px 12px;
  border-radius: 12px;
`;

const SectionPanel = styled.div`
  background-color: ${({ theme }) => theme.background.elevated.base};
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px 12px;
  border-radius: 12px;
  border: 1px solid #ffffff0d;
`;

const SectionPanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

export { InfoContainer, Content, SectionPanel, SectionPanelHeader };
