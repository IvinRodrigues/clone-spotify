import { useTheme } from "styled-components";
import { Typography } from "../../../../../../../../../components/Typography";
import {
  TourDateContainer,
  TourDateInfo,
  TourDateMonthContainer,
} from "./styles";

function TourDate() {
  const theme = useTheme();

  function redirectToTourPage() {
    // logic to redirect
  }

  return (
    <TourDateContainer onClick={redirectToTourPage}>
      <TourDateMonthContainer>
        <Typography variant="title" size={10}>
          Jun
        </Typography>
        <Typography variant="title" size={16}>
          1
        </Typography>
      </TourDateMonthContainer>
      <TourDateInfo>
        <Typography variant="subtitle" size={16}>
          Country
        </Typography>
        <Typography
          variant="text"
          size={12}
          style={{ lineHeight: "16px" }}
          color={theme.text.subdued}
        >
          Description of event
          <br />
          Sat 11:30PM - Location
        </Typography>
      </TourDateInfo>
    </TourDateContainer>
  );
}

export { TourDate };
