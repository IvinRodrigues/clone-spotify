import { CloseCircle, More } from "iconsax-react";
import { ButtonIcon } from "../../../../../../../components/ButtonIcon";
import { Typography } from "../../../../../../../components/Typography";
import { HeaderButtons, HeaderContainer } from "./styles";
import { Tooltip } from "../../../../../../../components/Tooltip";
import { PropsWithDetails } from "../../types";

function Header({ details }: PropsWithDetails) {
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
        {details.name}
      </Typography>
      <HeaderButtons>
        <ButtonIcon
          size="medium"
          rounded={true}
          data-tooltip-id="more-tooltip"
          onClick={moreOptionsToggleVisibility}
        >
          <More />
        </ButtonIcon>
        <Tooltip
          id="more-tooltip"
          place="top-end"
          title={`More options for ${details.name}`}
        />
        <ButtonIcon
          size="medium"
          rounded={true}
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
