import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/index.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Menu from "./pages/Menu/index.jsx";
import ExploreMoreMenu from "./pages/Menu/ExploreMoreMenu.jsx";
import MenuRouteWrapper from "./pages/Menu/MenuRouteWrapper.jsx";
import SeeMoreMenu from "./pages/Menu/SeeMoreMenu.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "menu",
        element: <MenuRouteWrapper />,
        children: [
          {
            path: "",
            element: <Menu />,
          },
          { path: "explore-more", element: <ExploreMoreMenu /> },
          { path: "see-more", element: <SeeMoreMenu /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
