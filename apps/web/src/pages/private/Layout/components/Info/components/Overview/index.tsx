import { Heart } from "iconsax-react";
import { ButtonIcon } from "../../../../../../../components/ButtonIcon";
import { Typography } from "../../../../../../../components/Typography";
import { OverviewContainer, OverviewTitleContainer } from "./styles";
import { Tooltip } from "../../../../../../../components/Tooltip";
import { useTheme } from "styled-components";

function Overview() {
  const theme = useTheme();

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
      <img
        src="https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2021/01/957938-scaled.jpg"
        onClick={redirectToAlbum}
      />
      <OverviewTitleContainer>
        <Typography variant="title" link onClick={redirectToAlbum}>
          Music name
        </Typography>
        <ButtonIcon
          size="big"
          rounded
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
        Artist
      </Typography>
    </OverviewContainer>
  );
}

export { Overview };
