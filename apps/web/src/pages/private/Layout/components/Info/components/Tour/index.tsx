import { useTheme } from "styled-components";
import { Typography } from "../../../../../../../components/Typography";
import { SectionPanel, SectionPanelHeader } from "../../styles";
import { TourDate } from "./components/TourDate";

function Tour() {
  const theme = useTheme();

  function redirectToTourPage() {
    // logic to redirect
  }

  return (
    <SectionPanel>
      <SectionPanelHeader>
        <Typography variant="title" size={14}>
          On tour
        </Typography>
        <Typography
          variant="link"
          size={14}
          color={theme.text.subdued}
          onClick={redirectToTourPage}
        >
          Show all
        </Typography>
      </SectionPanelHeader>
      <TourDate />
      <TourDate />
    </SectionPanel>
  );
}

export { Tour };
