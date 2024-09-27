import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useVideo from "../hooks/useVideo";

const VideoContainer = () => {
  useVideo();
  const videos = useSelector((store) => store.video?.popularVideo);

  return (
    <div className="flex flex-wrap gap-5 m-3">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard data={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
