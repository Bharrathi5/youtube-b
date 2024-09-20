import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="flex mt-16">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
