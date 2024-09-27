import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");
  const videos = useSelector((store) => store.video.popularVideo);

  const videoDetails = videos.find((video) => video.id === videoId);
  const { snippet, statistics } = videoDetails;

  return (
    <div className="flex gap-6 mt-5">
      <div>
        <div>
          <iframe
            className="w-[920px] h-[520px] rounded-2xl mb-4"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="origin-when-cross-origin "
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h1 className="font-bold text-xl mb-2">{snippet?.title}</h1>
          <div className="flex items-center gap-2">
            <BiUserCircle className="size-7" />
            <p className="font-semibold">{snippet?.channelTitle}</p>
          </div>
        </div>
      </div>

      <div>suggested videos</div>
    </div>
  );
};
export default WatchPage;
