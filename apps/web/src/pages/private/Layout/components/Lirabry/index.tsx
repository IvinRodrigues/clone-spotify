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
import { useLibraryStore } from "../../../../../stores/library";

function Library() {
  const { library } = useLibraryStore();
  const libraryContainer = useRef<HTMLDivElement | null>(null);

  return (
    <LibraryContainer ref={libraryContainer}>
      <Panel>
        <>
          <ButtonIcon size="big" active={true} data-tooltip-id="home-tooltip">
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
        {library.map((playlist) => (
          <Tooltip
            key={playlist.id}
            id={`music-tooltip-${playlist.id}`}
            title={playlist.name}
            pinned={playlist.pinned}
          />
        ))}
        <Scroll containerRef={libraryContainer} animatedItems>
          <MusicsContainer>
            {library.map((playlist, index) => {
              const delay = index < 12 ? `${index}00` : 0;
              return (
                <Music
                  key={playlist.id}
                  src={playlist.picture}
                  data-tooltip-id={`music-tooltip-${playlist.id}`}
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
