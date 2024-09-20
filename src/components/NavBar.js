import React from "react";
import { useSelector } from "react-redux";
import NavClose from "./NavClose";
import NavOpen from "./NavOpen";

const NavBar = () => {
  const isSidebarOpen = useSelector((store) => store.menu.isBarOpen);

  return <div>{isSidebarOpen ? <NavOpen /> : <NavClose />}</div>;
};

export default NavBar;
