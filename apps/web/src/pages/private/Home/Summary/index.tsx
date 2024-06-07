import { Swiper, SwiperSlide } from "swiper/react";
import { Item, SummaryContainer } from "./styles";
import { Typography } from "../../../../components/Typography";
import { SummaryProps } from "./types";

function Summary({ artists, ...rest }: SummaryProps) {
  return (
    <SummaryContainer {...rest}>
      <Swiper spaceBetween={12} slidesPerView="auto">
        {artists.map((artist) => (
          <SwiperSlide key={artist.id} style={{ width: "fit-content" }}>
            <Item>
              <img src={artist.picture} />
              <Typography variant="title" size={14}>
                {artist.name}
              </Typography>
            </Item>
          </SwiperSlide>
        ))}
      </Swiper>
    </SummaryContainer>
  );
}

export { Summary };
