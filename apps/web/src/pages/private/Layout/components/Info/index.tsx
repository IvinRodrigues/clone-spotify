import { Content, InfoContainer } from "./styles";
import { useEffect, useRef, useState } from "react";
import { Header } from "./components/Header";
import { Overview } from "./components/Overview";
import { About } from "./components/About";
import { Credits } from "./components/Credits";
import { Tour } from "./components/Tour";
import { Queue } from "./components/Queue";
import { Scroll } from "../../../../../components/Scroll";
import { useQueueStore } from "../../../../../stores/queue";

const detailsData = {
  id: 1,
  name: "Name 1 placeholder",
  banner: "https://picsum.photos/200/300?random=6669",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  listeners: 10000,
  credits: [
    {
      id: 1,
      name: "Name 1 placeholder",
      role: "Role 1 placeholder",
    },
    {
      id: 2,
      name: "Name 2 placeholder",
      role: "Role 2 placeholder",
    },
    {
      name: "Name 3 placeholder",
      role: "Role 3 placeholder",
    },
  ],
  tour: [
    {
      id: 1,
      date: "2025-01-01T20:30:00.000Z",
      country: "Country placeholder",
      description: "Band name placeholder",
      location: "Location placeholder",
    },
    {
      id: 1,
      date: "2025-01-01T22:30:00.000Z",
      country: "Country placeholder",
      description: "Band name placeholder",
      location: "Location placeholder",
    },
  ],
};

function Info() {
  const infoContainerRef = useRef<HTMLDivElement | null>(null);
  const { queue } = useQueueStore();
  const [details, setDetails] = useState({});

  useEffect(() => {
    function getArtistDetails() {
      setDetails(detailsData);
    }

    getArtistDetails();
  }, [queue.id]);

  return (
    <InfoContainer ref={infoContainerRef}>
      <Scroll containerRef={infoContainerRef}>
        <Header details={details} />
        <Content>
          <Overview details={details} />
          <About details={details} />
          <Credits details={details} />
          <Tour details={details} />
          <Queue />
        </Content>
      </Scroll>
    </InfoContainer>
  );
}

export { Info };
