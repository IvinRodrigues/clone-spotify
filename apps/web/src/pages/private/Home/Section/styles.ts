import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 32px;
`;

const SectionHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 12px;
`;

const SectionContent = styled.div`
  display: flex;
`;

export { SectionContainer, SectionHeader, SectionContent };
