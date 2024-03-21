import React from "react";
import { Outlet } from "react-router-dom";

const MenuRouteWrapper = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MenuRouteWrapper;
