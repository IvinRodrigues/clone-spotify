import { useTheme } from "styled-components";
import { Typography } from "../../../../../../../components/Typography";
import { AboutBanner, AboutContainer, AboutContent } from "./styles";
import { SectionPanelHeader } from "../../styles";
import { Chip } from "../../../../../../../components/Chip";
import { PropsWithDetails } from "../../types";

function About({ details }: PropsWithDetails) {
  const theme = useTheme();

  function openAboutModal() {
    // logic to open modal
  }

  function redirectToArtistPage() {
    // logic to redirect
  }

  return (
    <AboutContainer onClick={openAboutModal}>
      <AboutBanner banner={details.banner}>
        <Typography variant="title" size={14}>
          About the artist
        </Typography>
      </AboutBanner>
      <AboutContent>
        <SectionPanelHeader>
          <Typography
            variant="title"
            size={14}
            link
            onClick={redirectToArtistPage}
          >
            {details.name}
          </Typography>
          <Chip />
        </SectionPanelHeader>
        <Typography variant="text" color={theme.text.subdued}>
          {details.listeners} monthly listeners
        </Typography>
        <Typography variant="text" color={theme.text.subdued}>
          {details.description}
        </Typography>
      </AboutContent>
    </AboutContainer>
  );
}

export { About };
