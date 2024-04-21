import React from "react";
import { Outlet } from "react-router-dom";
import SidebarComponent from "../components/SidebarComponent";
import ProjectDashboardRoutes from "../utils/ProjectDashboardRoutes";
import Navbar from "../components/Navbar";

const LayoutPage = () => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex-none h-screen">
        <SidebarComponent />
      </div>
      <div className="flex flex-col w-full h-min">
        <div className="flex-1 w-full">
          <Navbar />
        </div>
        <div className="flex-1 w-full h-max justify-items-center justify-center align-top">
          <Outlet />
          <ProjectDashboardRoutes />
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
