import { Grid } from "./styles";
import { Info } from "./components/Info";
import { Player } from "./components/Player";
import { Library } from "./components/Lirabry";
import { OutletContent } from "./components/Outlet";
import { OutletAnimationProvider } from "../../../contexts/outletAnimationContext";

function Layout() {
  return (
    <OutletAnimationProvider>
      <Grid>
        <Library />
        <OutletContent />
        <Info />
        <Player />
      </Grid>
    </OutletAnimationProvider>
  );
}

export { Layout };
