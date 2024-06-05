import { CloseCircle, More } from "iconsax-react";
import { ButtonIcon } from "../../../../../../../components/ButtonIcon";
import { Typography } from "../../../../../../../components/Typography";
import { HeaderButtons, HeaderContainer } from "./styles";
import { Tooltip } from "../../../../../../../components/Tooltip";

function Header() {
  function redirectToArtist() {
    // logic to redirect
  }

  function closeInfo() {
    // logic to redirect
  }

  function moreOptionsToggleVisibility() {
    // logic to show options float panel
  }

  return (
    <HeaderContainer>
      <Typography variant="title" size={14} link onClick={redirectToArtist}>
        Artist name
      </Typography>
      <HeaderButtons>
        <ButtonIcon
          size="big"
          rounded
          data-tooltip-id="more-tooltip"
          onClick={moreOptionsToggleVisibility}
        >
          <More />
        </ButtonIcon>
        <Tooltip
          id="more-tooltip"
          place="top-end"
          title="More options for Artist Name"
        />
        <ButtonIcon
          size="big"
          rounded
          data-tooltip-id="close-tooltip"
          onClick={closeInfo}
        >
          <CloseCircle />
        </ButtonIcon>
        <Tooltip id="close-tooltip" place="top" title="Close" />
      </HeaderButtons>
    </HeaderContainer>
  );
}

export { Header };
