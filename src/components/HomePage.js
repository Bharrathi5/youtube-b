import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="flex ">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
