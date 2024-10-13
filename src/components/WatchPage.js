import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import useSuggestedVideo from "../hooks/useSuggestedVideo";
import SuggestCard from "./SuggestCard";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");
  const videos = useSelector((store) => store.video.popularVideo);
  const suggestions = useSelector((store) => store.suggestion.suggestVideo);

  const videoDetails = videos.find((video) => video.id === videoId);
  const { snippet, statistics } = videoDetails;

  useSuggestedVideo(videoId);

  return (
    <div className="flex gap-6 mt-5">
      <div>
        <div>
          {videos && videos.length > 0 ? (
            <iframe
              className="w-[920px] h-[520px] rounded-2xl mb-4"
              src={"https://www.youtube.com/embed/" + videoId}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="origin-when-cross-origin "
              allowFullScreen
            ></iframe>
          ) : (
            <p>No video available</p>
          )}
        </div>
        <div>
          <h1 className="font-bold text-xl mb-2">{snippet?.title}</h1>
          <div className="flex items-center gap-2">
            <BiUserCircle className="size-7" />
            <p className="font-semibold">{snippet?.channelTitle}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-5 ml-5 mr-10">
        <h3 className="font-bold text-xl">Suggested watch</h3>
        {suggestions && suggestions.length > 0 ? (
          suggestions.map((s) => (
            <Link key={s.id.videoId} to={"/watch?v=" + s.id}>
              <SuggestCard data={s} />
            </Link>
          ))
        ) : (
          <p>No suggestions</p>
        )}
      </div>
    </div>
  );
};
export default WatchPage;
