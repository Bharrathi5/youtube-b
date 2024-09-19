import React from "react";
import { useSelector } from "react-redux";
import NavClose from "./NavClose";

const NavBar = () => {
  const isSidebarOpen = useSelector((store) => store.menu.isBarOpen);

  return <div>{isSidebarOpen ? <div>SideBar</div> : <NavClose />}</div>;
};

export default NavBar;
