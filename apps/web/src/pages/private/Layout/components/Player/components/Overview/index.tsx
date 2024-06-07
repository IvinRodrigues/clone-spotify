import { Heart } from "iconsax-react";
import { ButtonIcon } from "../../../../../../../components/ButtonIcon";
import { Typography } from "../../../../../../../components/Typography";
import { InfoContainer, OverviewContainer } from "./styles";
import { Tooltip } from "../../../../../../../components/Tooltip";
import { useTheme } from "styled-components";
import { useQueueStore } from "../../../../../../../stores/queue";

function Overview() {
  const theme = useTheme();
  const { queue } = useQueueStore();

  function openInfo() {
    // logic to open
  }

  function redirectToArtist() {
    // logic to redirect
  }

  function redirectToAlbum() {
    // logic to redirect
  }

  function likeSong() {
    // logic to like
  }

  return (
    <OverviewContainer>
      <img src={queue?.album.picture} onClick={openInfo} />
      <InfoContainer>
        <Typography variant="subtitle" size={14} link onClick={redirectToAlbum}>
          {queue?.name}
        </Typography>
        <Typography
          variant="text"
          size={12}
          color={theme.text.subdued}
          link
          onClick={redirectToArtist}
        >
          {queue?.author.name}
        </Typography>
      </InfoContainer>
      <ButtonIcon
        size="medium"
        rounded={true}
        data-tooltip-id="player-like-tooltip"
        onClick={likeSong}
      >
        <Heart />
      </ButtonIcon>
      <Tooltip
        id="player-like-tooltip"
        place="top"
        title="Add to Liked Songs"
      />
    </OverviewContainer>
  );
}

export { Overview };
