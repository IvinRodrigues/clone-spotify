import { Outlet } from "react-router-dom";
import { Grid, MainContent } from "./styles";
import { Info } from "./components/Info";
import { Player } from "./components/Player";
import { Library } from "./components/Lirabry";

function Layout() {
  return (
    <Grid>
      <Library />
      <MainContent>
        <Outlet />
      </MainContent>
      <Info />
      <Player />
    </Grid>
  );
}

export { Layout };
