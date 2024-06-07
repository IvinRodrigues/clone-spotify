import { useTheme } from "styled-components";
import { Typography } from "../../../../../../../components/Typography";
import { SectionPanel, SectionPanelHeader } from "../../styles";
import { CreditArtist } from "./components/CreditArtist";
import { PropsWithDetails } from "../../types";

function Credits({ details }: PropsWithDetails) {
  const theme = useTheme();

  function openCreditsModal() {
    // logic to open modal
  }

  return (
    <SectionPanel>
      <SectionPanelHeader>
        <Typography variant="title" size={14}>
          Credits
        </Typography>
        <Typography
          variant="link"
          size={14}
          color={theme.text.subdued}
          onClick={openCreditsModal}
        >
          Show all
        </Typography>
      </SectionPanelHeader>
      <CreditArtist id={details.id} name={details.name} role="Main Artist" />
      {details.credits?.map((artist) => (
        <CreditArtist
          key={artist.id}
          id={artist.id}
          name={artist.name}
          role={artist.role}
        />
      ))}
    </SectionPanel>
  );
}

export { Credits };
