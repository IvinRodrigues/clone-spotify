import styled from "styled-components";

interface AboutBannerProps {
  banner: string;
}

const InfoContainer = styled.aside`
  background-color: ${({ theme }) => theme.background.default.base};
  display: flex;
  flex-direction: column;
  border-radius: 12px;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 12px 16px;
`;

const HeaderButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 12px 24px;
  border-radius: 12px;
`;

const MusicOverview = styled.div`
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

const About = styled.div`
  background-color: ${({ theme }) => theme.background.elevated.base};
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
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

const MusicOverviewTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
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

const CreditArtist = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
`;

const CreditArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: space-between;
`;

const Tour = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const TourDate = styled.div`
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

const TourInfo = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
`;

const QueuePreview = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  img {
    width: 56px;
    height: 56px;
    border-radius: 4px;
    object-fit: cover;
  }
`;

const QueueInfo = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
`;

export {
  InfoContainer,
  Header,
  HeaderButtons,
  Content,
  MusicOverview,
  MusicOverviewTitleContainer,
  About,
  AboutBanner,
  AboutContent,
  SectionPanel,
  SectionPanelHeader,
  CreditArtist,
  CreditArtistInfo,
  Tour,
  TourDate,
  TourInfo,
  QueuePreview,
  QueueInfo,
};
