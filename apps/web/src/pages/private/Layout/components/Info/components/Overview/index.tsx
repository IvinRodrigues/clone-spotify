import { Heart } from "iconsax-react";
import { ButtonIcon } from "../../../../../../../components/ButtonIcon";
import { Typography } from "../../../../../../../components/Typography";
import { OverviewContainer, OverviewTitleContainer } from "./styles";
import { Tooltip } from "../../../../../../../components/Tooltip";
import { useTheme } from "styled-components";
import { useQueueStore } from "../../../../../../../stores/queue";
import { PropsWithDetails } from "../../types";

function Overview({ details }: PropsWithDetails) {
  const theme = useTheme();
  const { queue } = useQueueStore();

  function redirectToAlbum() {
    // logic to redirect
  }

  function likeSong() {
    // logic to like
  }

  function redirectToArtist() {
    // logic to redirect
  }

  return (
    <OverviewContainer>
      <img src={queue?.album.picture} onClick={redirectToAlbum} />
      <OverviewTitleContainer>
        <Typography variant="title" link onClick={redirectToAlbum}>
          {queue.name}
        </Typography>
        <ButtonIcon
          size="big"
          rounded={true}
          data-tooltip-id="info-like-tooltip"
          onClick={likeSong}
        >
          <Heart />
        </ButtonIcon>
        <Tooltip
          id="info-like-tooltip"
          place="top-end"
          title="Add to Liked Songs"
        />
      </OverviewTitleContainer>
      <Typography
        variant="text"
        color={theme.text.subdued}
        link
        onClick={redirectToArtist}
      >
        {details.name}
      </Typography>
    </OverviewContainer>
  );
}

export { Overview };
