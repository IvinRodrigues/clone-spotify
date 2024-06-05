import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./routes";
import { theme } from "./styles/theme/theme";
import { ThemeProvider } from "styled-components";

import "./styles/reset.css";
import "overlayscrollbars/overlayscrollbars.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={mainRouter} />
      </ThemeProvider>
    </>
  );
}

export default App;
