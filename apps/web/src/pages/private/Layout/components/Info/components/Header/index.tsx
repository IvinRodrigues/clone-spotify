import { CloseCircle, More } from "iconsax-react";
import { ButtonIcon } from "../../../../../../../components/ButtonIcon";
import { Typography } from "../../../../../../../components/Typography";
import { HeaderButtons, HeaderContainer } from "./styles";
import { Tooltip } from "../../../../../../../components/Tooltip";

function Header() {
  return (
    <HeaderContainer>
      <Typography variant="title" size={14}>
        Artist name
      </Typography>
      <HeaderButtons>
        <ButtonIcon size="big" rounded data-tooltip-id="more-tooltip">
          <More />
        </ButtonIcon>
        <Tooltip
          id="more-tooltip"
          place="top-end"
          title="More options for Artist Name"
        />
        <ButtonIcon size="big" rounded data-tooltip-id="close-tooltip">
          <CloseCircle />
        </ButtonIcon>
        <Tooltip id="close-tooltip" place="top" title="Close" />
      </HeaderButtons>
    </HeaderContainer>
  );
}

export { Header };
