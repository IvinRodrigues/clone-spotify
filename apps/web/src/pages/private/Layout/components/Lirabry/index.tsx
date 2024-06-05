import { BookSaved, Home, SearchNormal1 } from "iconsax-react";
import { ButtonIcon } from "../../../../../components/ButtonIcon";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Tooltip } from "../../../../../components/Tooltip";
import {
  LibraryContainer,
  Music,
  PanelWithScroll,
  Panel,
  MusicsContainer,
} from "./styles";
import { useLayoutEffect, useRef, useState } from "react";

function Library() {
  const libraryContainer = useRef<HTMLDivElement | null>(null);
  const [musicsHeight, setMusicsHeight] = useState<string>("600px");

  useLayoutEffect(() => {
    const totalHeight = libraryContainer.current?.clientHeight;

    const scrollMusics =
      libraryContainer.current?.querySelector("#scrollMusics");
    const scrollOffsetTop = scrollMusics?.getBoundingClientRect().top;

    if (totalHeight !== undefined && scrollOffsetTop !== undefined) {
      const finalHeight = totalHeight - scrollOffsetTop + 8;
      setMusicsHeight(`${finalHeight}px`);
    }
  }, []);
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
        <Tooltip
          id="music-tooltip"
          pinned
          title="Music"
          subtitle="Artist name"
          offset={18}
        />
        <OverlayScrollbarsComponent
          id="scrollMusics"
          className="overlayscrollbars-react"
          style={{ height: musicsHeight }}
          element="div"
          options={{
            scrollbars: {
              theme: "os-theme-light",
              autoHide: "scroll",
              autoHideDelay: 400,
            },
          }}
          defer
        >
          <MusicsContainer>
            <Music data-tooltip-id="music-tooltip" />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
          </MusicsContainer>
        </OverlayScrollbarsComponent>
      </PanelWithScroll>
    </LibraryContainer>
  );
}

export { Library };
