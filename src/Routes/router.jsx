import { createBrowserRouter } from "react-router";
import Header from "../Components/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "/news",
    element: <h2>News Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error</h2>,
  },
]);
