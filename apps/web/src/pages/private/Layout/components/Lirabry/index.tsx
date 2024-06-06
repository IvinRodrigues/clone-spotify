import { BookSaved, Home, SearchNormal1 } from "iconsax-react";
import { ButtonIcon } from "../../../../../components/ButtonIcon";
import { Tooltip } from "../../../../../components/Tooltip";
import {
  LibraryContainer,
  Music,
  PanelWithScroll,
  Panel,
  MusicsContainer,
} from "./styles";
import { useRef } from "react";
import { Scroll } from "../../../../../components/Scroll";

function Library() {
  const libraryContainer = useRef<HTMLDivElement | null>(null);

  const artists = Array.from({ length: 25 }).map((item, index) => ({
    id: index,
    name: "Artist name",
    image:
      "https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2021/01/957938-scaled.jpg",
  }));

  return (
    <LibraryContainer ref={libraryContainer}>
      <Panel>
        <>
          <ButtonIcon size="big" active data-tooltip-id="home-tooltip">
            <Home />
          </ButtonIcon>
          <Tooltip id="home-tooltip" title="Home" />
        </>
        <>
          <ButtonIcon size="big" data-tooltip-id="search-tooltip">
            <SearchNormal1 />
          </ButtonIcon>
          <Tooltip id="search-tooltip" title="Search" />
        </>
      </Panel>
      <PanelWithScroll>
        <ButtonIcon size="big" data-tooltip-id="library-tooltip">
          <BookSaved />
        </ButtonIcon>
        <Tooltip id="library-tooltip" title="Library" />
        {artists.map((artist) => (
          <Tooltip
            id={`music-tooltip-${artist.id}`}
            title={artist.name}
            pinned
          />
        ))}
        <Scroll containerRef={libraryContainer} animatedItems>
          <MusicsContainer>
            {artists.map((artist, index) => {
              const delay = index < 12 ? `${index}00` : 0;
              return (
                <Music
                  src={artist.image}
                  data-tooltip-id={`music-tooltip-${artist.id}`}
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay={delay}
                  tabIndex={0}
                />
              );
            })}
          </MusicsContainer>
        </Scroll>
      </PanelWithScroll>
    </LibraryContainer>
  );
}

export { Library };
