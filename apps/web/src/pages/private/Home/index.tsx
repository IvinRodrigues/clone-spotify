import { useEffect, useLayoutEffect, useRef } from "react";
import { Section } from "./Section";
import { Summary } from "./Summary";
import { HomeContainer } from "./styles";
import { useHomeStore } from "../../../stores/home";

function Home() {
  const { home } = useHomeStore();

  console.log(home);

  return (
    <HomeContainer>
      <Summary
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="400"
        artists={home.summary}
      />
      {home.sections.map((section, index) => {
        const delay = index === 0 ? 600 : index === 1 ? 800 : 0;
        return (
          <Section
            key={section.id}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay={delay}
            section={section}
          />
        );
      })}
    </HomeContainer>
  );
}

export { Home };
