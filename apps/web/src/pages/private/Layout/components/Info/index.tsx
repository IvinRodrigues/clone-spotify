import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import {
  About,
  AboutBanner,
  AboutContent,
  Content,
  CreditArtist,
  CreditArtistInfo,
  Header,
  HeaderButtons,
  InfoContainer,
  MusicOverview,
  MusicOverviewTitleContainer,
  QueueInfo,
  QueuePreview,
  SectionPanel,
  SectionPanelHeader,
  Tour,
  TourDate,
  TourInfo,
} from "./styles";
import { Typography } from "../../../../../components/Typography";
import { ButtonIcon } from "../../../../../components/ButtonIcon";
import { CloseCircle, Heart, More, Musicnote } from "iconsax-react";
import { useTheme } from "styled-components";
import { Chip } from "../../../../../components/Chip";
import { useLayoutEffect, useRef, useState } from "react";

function Info() {
  const theme = useTheme();
  const infoContainerRef = useRef<HTMLDivElement | null>(null);
  const [infosHeight, setInfosHeight] = useState<string>("800px");

  useLayoutEffect(() => {
    const totalHeight = infoContainerRef.current?.clientHeight;
    const headerHeight = infoContainerRef.current?.children[0]?.clientHeight;

    if (totalHeight !== undefined && headerHeight !== undefined) {
      const finalHeight = totalHeight - headerHeight;
      setInfosHeight(`${finalHeight}px`);
    }
  }, []);

  return (
    <InfoContainer ref={infoContainerRef}>
      <Header>
        <Typography variant="title" size={14}>
          Artist name
        </Typography>
        <HeaderButtons>
          <ButtonIcon size="big" rounded>
            <More />
          </ButtonIcon>
          <ButtonIcon size="big" rounded>
            <CloseCircle />
          </ButtonIcon>
        </HeaderButtons>
      </Header>
      <OverlayScrollbarsComponent
        className="overlayscrollbars-react"
        style={{ height: infosHeight }}
        element="div"
        options={{
          scrollbars: {
            theme: "os-theme-light",
            autoHide: "leave",
            autoHideDelay: 200,
          },
        }}
        defer
      >
        <Content>
          <MusicOverview>
            <img src="https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2021/01/957938-scaled.jpg" />
            <MusicOverviewTitleContainer>
              <Typography variant="title">Music name</Typography>
              <ButtonIcon size="big" rounded>
                <Heart />
              </ButtonIcon>
            </MusicOverviewTitleContainer>
            <Typography variant="text" color={theme.text.subdued}>
              Artist
            </Typography>
          </MusicOverview>
          <About>
            <AboutBanner banner="https://i.scdn.co/image/ab6761610000e5eb0d96912fd002f4e038b4e17e">
              <Typography variant="title" size={14}>
                About the artist
              </Typography>
            </AboutBanner>
            <AboutContent>
              <SectionPanelHeader>
                <Typography variant="title" size={14}>
                  Artist name
                </Typography>
                <Chip />
              </SectionPanelHeader>
              <Typography variant="text" color={theme.text.subdued}>
                10,000 monthly listeners
              </Typography>
              <Typography variant="text" color={theme.text.subdued}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </AboutContent>
          </About>
          <SectionPanel>
            <SectionPanelHeader>
              <Typography variant="title" size={14}>
                Credits
              </Typography>
              <Typography variant="link" size={14} color={theme.text.subdued}>
                Show all
              </Typography>
            </SectionPanelHeader>
            <CreditArtist>
              <CreditArtistInfo>
                <Typography variant="subtitle" size={14}>
                  Artist name
                </Typography>
                <Typography variant="text" size={12} color={theme.text.subdued}>
                  Role
                </Typography>
              </CreditArtistInfo>
              <Chip />
            </CreditArtist>
            <CreditArtist>
              <CreditArtistInfo>
                <Typography variant="subtitle" size={14}>
                  Artist name
                </Typography>
                <Typography variant="text" size={12} color={theme.text.subdued}>
                  Role
                </Typography>
              </CreditArtistInfo>
              <Chip />
            </CreditArtist>
            <CreditArtist>
              <CreditArtistInfo>
                <Typography variant="subtitle" size={14}>
                  Artist name
                </Typography>
                <Typography variant="text" size={12} color={theme.text.subdued}>
                  Role
                </Typography>
              </CreditArtistInfo>
            </CreditArtist>
          </SectionPanel>
          <SectionPanel>
            <SectionPanelHeader>
              <Typography variant="title" size={14}>
                On tour
              </Typography>
              <Typography variant="link" size={14} color={theme.text.subdued}>
                Show all
              </Typography>
            </SectionPanelHeader>
            <Tour>
              <TourDate>
                <Typography variant="title" size={10}>
                  Jun
                </Typography>
                <Typography variant="title" size={16}>
                  1
                </Typography>
              </TourDate>
              <TourInfo>
                <Typography variant="subtitle" size={16}>
                  Country
                </Typography>
                <Typography
                  variant="text"
                  size={12}
                  style={{ lineHeight: "16px" }}
                  color={theme.text.subdued}
                >
                  Description of event
                  <br />
                  Sat 11:30PM - Location
                </Typography>
              </TourInfo>
            </Tour>
            <Tour>
              <TourDate>
                <Typography variant="title" size={10}>
                  Jun
                </Typography>
                <Typography variant="title" size={16}>
                  1
                </Typography>
              </TourDate>
              <TourInfo>
                <Typography variant="subtitle" size={16}>
                  Country
                </Typography>
                <Typography
                  variant="text"
                  size={12}
                  style={{ lineHeight: "16px" }}
                  color={theme.text.subdued}
                >
                  Description of event
                  <br />
                  Sat 11:30PM - Location
                </Typography>
              </TourInfo>
            </Tour>
          </SectionPanel>
          <SectionPanel>
            <SectionPanelHeader>
              <Typography variant="title" size={14}>
                Next on queue
              </Typography>
              <Typography variant="link" size={14} color={theme.text.subdued}>
                Open queue
              </Typography>
            </SectionPanelHeader>
            <QueuePreview>
              <ButtonIcon size="medium">
                <Musicnote />
              </ButtonIcon>
              <img src="https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2021/01/957938-scaled.jpg" />
              <QueueInfo>
                <Typography variant="subtitle" size={16}>
                  Music name
                </Typography>
                <Typography variant="text" size={12} color={theme.text.subdued}>
                  Artist name
                </Typography>
              </QueueInfo>
            </QueuePreview>
          </SectionPanel>
        </Content>
      </OverlayScrollbarsComponent>
    </InfoContainer>
  );
}

export { Info };
