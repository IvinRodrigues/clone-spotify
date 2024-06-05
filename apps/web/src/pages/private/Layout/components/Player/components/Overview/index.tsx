import { Heart } from "iconsax-react";
import { ButtonIcon } from "../../../../../../../components/ButtonIcon";
import { Typography } from "../../../../../../../components/Typography";
import { InfoContainer, OverviewContainer } from "./styles";
import { Tooltip } from "../../../../../../../components/Tooltip";
import { useTheme } from "styled-components";

function Overview() {
  const theme = useTheme();

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
      <img
        src="https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2021/01/957938-scaled.jpg"
        onClick={openInfo}
      />
      <InfoContainer>
        <Typography variant="subtitle" size={14} link onClick={redirectToAlbum}>
          Song name
        </Typography>
        <Typography
          variant="text"
          size={12}
          color={theme.text.subdued}
          link
          onClick={redirectToArtist}
        >
          Artist name
        </Typography>
      </InfoContainer>
      <ButtonIcon
        size="medium"
        rounded
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
