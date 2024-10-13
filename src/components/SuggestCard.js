import React from "react";

const SuggestCard = ({ data }) => {
  const { snippet } = data;
  console.log(data);

  return (
    <div className="grid grid-cols-2 gap-3 ">
      <div>
        <img
          className="w-48  rounded-2xl"
          src={snippet?.thumbnails?.medium?.url}
          alt="video_thumbnail"
        />
      </div>
      <div>
        <h3 className="font-bold text-sm">{snippet?.title}</h3>
        <p className="text-slate-500">{snippet?.channelTitle}</p>
      </div>
    </div>
  );
};

export default SuggestCard;
