import React from "react";
import { Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <div>
      DashBoardLayout
      <Outlet />
    </div>
  );
};

export default DashBoardLayout;
