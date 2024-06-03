import { useTheme } from "styled-components";
import { Typography } from "../../../../../../../components/Typography";
import { AboutBanner, AboutContainer, AboutContent } from "./styles";
import { SectionPanelHeader } from "../../styles";
import { Chip } from "../../../../../../../components/Chip";

function About() {
  const theme = useTheme();
  return (
    <AboutContainer>
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
    </AboutContainer>
  );
}

export { About };
