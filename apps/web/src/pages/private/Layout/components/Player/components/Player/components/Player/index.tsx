import { useTheme } from "styled-components";
import { Progress } from "../../../../../../../../../components/Progress";
import { Typography } from "../../../../../../../../../components/Typography";
import { PlayerContainer } from "./styles";

function Player() {
  const theme = useTheme();

  return (
    <PlayerContainer>
      <Typography variant="title" size={12} color={theme.text.subdued}>
        0:00
      </Typography>
      <Progress />
      <Typography variant="title" size={12} color={theme.text.subdued}>
        5:00
      </Typography>
    </PlayerContainer>
  );
}

export { Player };
