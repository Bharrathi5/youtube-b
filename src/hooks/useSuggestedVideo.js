import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSuggestVideo } from "../utils/suggestSlice";

const useSuggestedVideo = (videoId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getSuggestedVideos();
    return () => dispatch(addSuggestVideo([]));
  }, [videoId]);

  const getSuggestedVideos = async () => {
    const url =
      "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=" +
      videoId +
      "&part=id%2Csnippet&type=video&maxResults=50";
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      if (result.items) {
        dispatch(addSuggestVideo(result.items));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export default useSuggestedVideo;
