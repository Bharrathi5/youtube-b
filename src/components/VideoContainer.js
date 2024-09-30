import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useVideo from "../hooks/useVideo";

const VideoContainer = () => {
  const { loadMoreVideos, loading, nextPageToken, endOfResults } = useVideo();
  const videos = useSelector((store) => store.video?.popularVideo);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.scrollHeight
    ) {
      if (nextPageToken && !loading) {
        loadMoreVideos();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, nextPageToken]);

  return (
    <div className="flex flex-wrap gap-5 m-3">
      {videos && videos.length > 0 ? (
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard data={video} />
          </Link>
        ))
      ) : (
        <p>No video available</p>
      )}

      {loading && <p>loading...</p>}
      {endOfResults && <div></div>}
    </div>
  );
};

export default VideoContainer;
