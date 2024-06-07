import { useTheme } from "styled-components";
import { Typography } from "../../../../components/Typography";
import { SectionContainer, SectionContent, SectionHeader } from "./styles";
import { Card } from "../../../../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { useOutletAnimation } from "../../../../hooks/useOutletAnimation";
import { SectionProps } from "./types";
import { useQueueStore } from "../../../../stores/queue";

function Section({ section, ...rest }: SectionProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { playSong } = useQueueStore();
  const { toggleVisibility } = useOutletAnimation();

  function handleOnPlay(item) {
    const song = {
      id: item.id,
      name: item.name,
      duration: "2:00",
      album: {
        id: 1,
        picture: item.picture,
      },
      author: {
        id: 1,
        name: "Author placeholder",
      },
    };

    playSong(song);
  }

  function redirectToArtist() {
    toggleVisibility();
    setTimeout(() => {
      navigate(`/artist/1`);
    }, 200);
  }

  function arrayToString(array: any, separator = ", ") {
    return array.map((item: any) => item.name).join(separator);
  }

  function getDescription(item: any) {
    let description = "";

    if (item.type === "mix") {
      const artists = arrayToString(item.artists);
      const artistsTruncated = `${artists.slice(0, 46)}...`;
      description = artistsTruncated;
    }

    if (item.type === "playlist") {
      description = `By ${item.author.name}`;
    }

    if (item.type === "artist") {
      description = "Artist";
    }

    if (item.type === "music") {
      description = item.artist.name;
    }

    if (item.type === "album") {
      description = item.artist.name;
    }

    return description;
  }

  return (
    <SectionContainer {...rest}>
      <SectionHeader>
        <Typography variant="title" size={24} link>
          {section.name}
        </Typography>
        <Typography variant="link" color={theme.text.subdued}>
          Show all
        </Typography>
      </SectionHeader>
      <SectionContent>
        <Swiper spaceBetween={12} slidesPerView="auto">
          {section.items.map((item) => {
            const type = item.type === "artist" ? "artist" : "music";

            return (
              <SwiperSlide key={item.id} style={{ width: "fit-content" }}>
                <Card
                  image={item.picture}
                  type={type}
                  title={item.name}
                  text={getDescription(item)}
                  onClick={redirectToArtist}
                  onPlay={() => handleOnPlay(item)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SectionContent>
    </SectionContainer>
  );
}

export { Section };
