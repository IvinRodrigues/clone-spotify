import { Layout } from "../pages/private/Layout";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/private/Home";
import { Artist } from "../pages/private/Artist";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "artist/:id",
        element: <Artist />,
      },
    ],
  },
]);

export { mainRouter };
