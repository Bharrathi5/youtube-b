import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideo } from "../utils/videoSlice";
import { YOUTUBE_API_URL } from "../utils/constants";
import { useEffect } from "react";

const VideoContainer = () => {
  const dispatch = useDispatch();

  const videos = useSelector((store) => store.video.popularVideo);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const result = await data.json();
    dispatch(addPopularVideo(result.items));
  };
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
