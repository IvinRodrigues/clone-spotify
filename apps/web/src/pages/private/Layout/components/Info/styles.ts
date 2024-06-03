import styled from "styled-components";

const InfoContainer = styled.aside`
  background-color: ${({ theme }) => theme.background.default.base};
  display: flex;
  flex-direction: column;
  border-radius: 12px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 12px 24px;
  border-radius: 12px;
`;

const SectionPanel = styled.div`
  background-color: ${({ theme }) => theme.background.elevated.base};
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px 12px;
  border-radius: 4px;
`;

const SectionPanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

export { InfoContainer, Content, SectionPanel, SectionPanelHeader };
