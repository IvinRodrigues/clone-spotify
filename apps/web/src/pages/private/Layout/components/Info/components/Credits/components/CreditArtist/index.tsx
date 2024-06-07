import { useTheme } from "styled-components";
import { Chip } from "../../../../../../../../../components/Chip";
import { Typography } from "../../../../../../../../../components/Typography";
import { CreditArtistContainer, CreditArtistInfo } from "./styles";
import { CreditArtistProps } from "./types";

function CreditArtist({ id, name, role }: CreditArtistProps) {
  const theme = useTheme();
  const hasId = id !== undefined;

  return (
    <CreditArtistContainer>
      <CreditArtistInfo>
        <Typography variant="subtitle" size={14} link={hasId}>
          {name}
        </Typography>
        <Typography variant="text" size={12} color={theme.text.subdued}>
          {role}
        </Typography>
      </CreditArtistInfo>
      {hasId && <Chip />}
    </CreditArtistContainer>
  );
}

export { CreditArtist };
