import { useTheme } from "styled-components";
import { Chip } from "../../../../../../../../../components/Chip";
import { Typography } from "../../../../../../../../../components/Typography";
import { CreditArtistContainer, CreditArtistInfo } from "./styles";

function CreditArtist() {
  const theme = useTheme();

  return (
    <CreditArtistContainer>
      <CreditArtistInfo>
        <Typography variant="subtitle" size={14} link>
          Artist name
        </Typography>
        <Typography variant="text" size={12} color={theme.text.subdued}>
          Role
        </Typography>
      </CreditArtistInfo>
      <Chip />
    </CreditArtistContainer>
  );
}

export { CreditArtist };
