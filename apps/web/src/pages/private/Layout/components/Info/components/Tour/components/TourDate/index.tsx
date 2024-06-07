import { useTheme } from "styled-components";
import { Typography } from "../../../../../../../../../components/Typography";
import {
  TourDateContainer,
  TourDateInfo,
  TourDateMonthContainer,
} from "./styles";
import { TourDateProps } from "./types";

function TourDate({ data }: TourDateProps) {
  const theme = useTheme();

  const date = new Date(data.date);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const dayName = date.toLocaleDateString("default", { weekday: "short" });
  const hour = date.getHours();
  const minute = date.getMinutes();
  const time = `${hour}:${minute}`;

  function redirectToTourPage() {
    // logic to redirect
  }

  return (
    <TourDateContainer onClick={redirectToTourPage}>
      <TourDateMonthContainer>
        <Typography variant="title" size={10}>
          {month}
        </Typography>
        <Typography variant="title" size={16}>
          {day}
        </Typography>
      </TourDateMonthContainer>
      <TourDateInfo>
        <Typography variant="subtitle" size={16}>
          {data.country}
        </Typography>
        <Typography
          variant="text"
          size={12}
          style={{ lineHeight: "16px" }}
          color={theme.text.subdued}
        >
          {data.description}
          <br />
          {dayName} {time}PM - {data.location}
        </Typography>
      </TourDateInfo>
    </TourDateContainer>
  );
}

export { TourDate };
