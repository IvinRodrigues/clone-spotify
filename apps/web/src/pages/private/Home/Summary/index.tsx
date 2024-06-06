import { Swiper, SwiperSlide } from "swiper/react";
import { Item, SummaryContainer } from "./styles";
import { Typography } from "../../../../components/Typography";
import { HTMLAttributes } from "react";

function Summary(props: HTMLAttributes<HTMLDivElement>) {
  const artists = Array.from({ length: 25 }).map((item, index) => ({
    id: index,
    name: "Artist name",
    image:
      "https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2021/01/957938-scaled.jpg",
  }));

  return (
    <SummaryContainer {...props}>
      <Swiper spaceBetween={12} slidesPerView="auto">
        {artists.map((artist) => (
          <SwiperSlide key={artist.id} style={{ width: "fit-content" }}>
            <Item>
              <img src={artist.image} />
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
