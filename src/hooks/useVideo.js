import { addPopularVideo } from "../utils/videoSlice";
import { YOUTUBE_API_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useVideo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const result = await data.json();
    dispatch(addPopularVideo(result.items));
  };
};

export default useVideo;
