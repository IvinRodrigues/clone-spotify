import { useEffect } from "react";
import { useOutletAnimation } from "../../../hooks/useOutletAnimation";
import { Container } from "./styles";
import { Typography } from "../../../components/Typography";

function Artist() {
  const { visible, toggleVisibility } = useOutletAnimation();

  useEffect(() => {
    if (!visible) {
      toggleVisibility();
    }
  }, []);

  return (
    <Container visible={visible}>
      <Typography variant="title" data-aos="fade-left" data-aos-duration="1000">
        Artist page
      </Typography>
    </Container>
  );
}

export { Artist };
