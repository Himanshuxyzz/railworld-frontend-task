import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/index.jsx";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Menu from "./pages/Menu/index.jsx";
import ExploreMoreMenu from "./pages/Menu/ExploreMoreMenu.jsx";
import MenuRouteWrapper from "./pages/Menu/MenuRouteWrapper.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/menu",
//     element: <Menu />,
//     children: [
//       {
//         path: "/menu/a",
//         element: <Home />,
//       },
//     ],
//   },
// ]);

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
          { path: "abc", element: <ExploreMoreMenu /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<MenuRouteWrapper />}>
            <Route path="" element={<Menu />} />
            <Route path="abc" element={<ExploreMoreMenu />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
