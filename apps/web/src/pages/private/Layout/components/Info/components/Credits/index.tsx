import { useTheme } from "styled-components";
import { Typography } from "../../../../../../../components/Typography";
import { SectionPanel, SectionPanelHeader } from "../../styles";
import { CreditArtist } from "./components/CreditArtist";

function Credits() {
  const theme = useTheme();

  return (
    <SectionPanel>
      <SectionPanelHeader>
        <Typography variant="title" size={14}>
          Credits
        </Typography>
        <Typography variant="link" size={14} color={theme.text.subdued}>
          Show all
        </Typography>
      </SectionPanelHeader>
      <CreditArtist />
      <CreditArtist />
      <CreditArtist />
    </SectionPanel>
  );
}

export { Credits };