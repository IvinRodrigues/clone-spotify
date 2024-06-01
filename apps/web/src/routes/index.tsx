import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/private/Home";
import { Layout } from "../pages/private/Layout";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export { mainRouter };
