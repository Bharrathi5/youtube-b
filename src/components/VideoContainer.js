import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const result = await data.json();
    setVideos(result.items);
  };

  return (
    <div className="flex flex-wrap gap-5 m-3">
      {videos.map((video) => (
        <VideoCard key={video.id} data={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
