import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/index.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Menu from "./pages/Menu/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/menu", element: <Menu /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
