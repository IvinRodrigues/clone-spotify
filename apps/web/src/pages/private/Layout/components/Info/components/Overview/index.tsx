import { Heart } from "iconsax-react";
import { ButtonIcon } from "../../../../../../../components/ButtonIcon";
import { Typography } from "../../../../../../../components/Typography";
import { OverviewContainer, OverviewTitleContainer } from "./styles";
import { Tooltip } from "../../../../../../../components/Tooltip";
import { useTheme } from "styled-components";

function Overview() {
  const theme = useTheme();

  return (
    <OverviewContainer>
      <img src="https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2021/01/957938-scaled.jpg" />
      <OverviewTitleContainer>
        <Typography variant="title">Music name</Typography>
        <ButtonIcon size="big" rounded data-tooltip-id="like-tooltip">
          <Heart />
        </ButtonIcon>
        <Tooltip id="like-tooltip" place="top-end" title="Add to Like Songs" />
      </OverviewTitleContainer>
      <Typography variant="text" color={theme.text.subdued}>
        Artist
      </Typography>
    </OverviewContainer>
  );
}

export { Overview };
