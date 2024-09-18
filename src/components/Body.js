import React from "react";
import NavBar from "./NavBar";
import FilterTags from "./FilterTags";
import VideoContainer from "./VideoContainer";

const Body = () => {
  return (
    <div className="flex">
      <NavBar />
      <div className="flex flex-col">
        <FilterTags />
        <VideoContainer />
      </div>
    </div>
  );
};

export default Body;
