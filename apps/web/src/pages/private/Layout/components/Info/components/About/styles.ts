import styled from "styled-components";

interface AboutBannerProps {
  banner: string;
}

const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.background.elevated.base};
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

const AboutBanner = styled.div<AboutBannerProps>`
  width: 100%;
  height: 260px;
  padding: 24px 16px;
  background-color: ${({ theme }) => theme.background.elevated.highlight};
  background-image: url(${({ banner }) => banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
`;

const AboutContent = styled.div`
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export { AboutContainer, AboutBanner, AboutContent };
