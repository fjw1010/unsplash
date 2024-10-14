import { createBrowserRouter } from "react-router-dom";
import { SearchPage } from "../pages/Search";
import Layout from "../components/Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);
