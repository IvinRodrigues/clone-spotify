import { useEffect, useLayoutEffect, useRef } from "react";
import { Section } from "./Section";
import { Summary } from "./Summary";
import { HomeContainer } from "./styles";

function Home() {
  return (
    <HomeContainer>
      <Summary
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="400"
      />
      <Section
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="600"
      />
      <Section
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="800"
      />
      <Section data-aos="fade-left" data-aos-duration="1000" />
      <Section data-aos="fade-left" data-aos-duration="1000" />
    </HomeContainer>
  );
}

export { Home };
