import React from "react";
import NavBar from "./NavBar";
import FilterTags from "./FilterTags";
import VideoContainer from "./VideoContainer";

const Body = () => {
  return (
    <div className="flex w-screen">
      <NavBar />
      <div className="flex flex-col w-11/12">
        <FilterTags />
        <VideoContainer />
      </div>
    </div>
  );
};

export default Body;
