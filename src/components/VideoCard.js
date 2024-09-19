import React from "react";

const VideoCard = ({ data }) => {
  console.log(data);
  const { snippet, statistics } = data;
  console.log(snippet);

  return (
    <div className="flex flex-col w-80 gap-2">
      <div>
        <img
          className="w-80 rounded-2xl"
          src={snippet?.thumbnails?.standard?.url}
          alt="video_thumbnail"
        />
      </div>
      <div>
        <h3 className="font-bold text-sm">{snippet?.title}</h3>
        <p className="text-slate-500">{snippet?.channelTitle}</p>
        <p className="text-slate-500">{statistics?.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
