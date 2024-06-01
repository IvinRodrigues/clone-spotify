import "./styles/reset.css";
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={mainRouter} />
    </>
  );
}

export default App;
