import { useTheme } from "styled-components";
import { Typography } from "../../../../components/Typography";
import { SectionContainer, SectionContent, SectionHeader } from "./styles";
import { Card } from "../../../../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletAnimation } from "../../../../hooks/useOutletAnimation";

function Section(props: HTMLAttributes<HTMLDivElement>) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { toggleVisibility } = useOutletAnimation();
  const artists = Array.from({ length: 25 }).map((item, index) => ({
    id: index,
    name: "Artist name",
    image:
      "https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2021/01/957938-scaled.jpg",
  }));

  function redirectToArtist() {
    toggleVisibility();
    setTimeout(() => {
      navigate("/artist/1");
    }, 200);
  }

  return (
    <SectionContainer {...props}>
      <SectionHeader>
        <Typography variant="title" size={24} link>
          Section name
        </Typography>
        <Typography variant="link" color={theme.text.subdued}>
          Show all
        </Typography>
      </SectionHeader>
      <SectionContent>
        <Swiper spaceBetween={12} slidesPerView="auto">
          {artists.map((artist) => (
            <SwiperSlide key={artist.id} style={{ width: "fit-content" }}>
              <Card
                image="https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2021/01/957938-scaled.jpg"
                type="music"
                title="Test"
                text="test text"
                onClick={redirectToArtist}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionContent>
    </SectionContainer>
  );
}

export { Section };
