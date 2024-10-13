import { addPopularVideo } from "../utils/videoSlice";
import { YOUTUBE_API_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useVideo = () => {
  const dispatch = useDispatch();
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [endOfResults, setEndOfResults] = useState(false);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async (pageToken = "") => {
    setLoading(true);

    const url = `${YOUTUBE_API_URL}${
      pageToken ? `&pageToken=${pageToken}` : ""
    }`;
    const data = await fetch(url);
    const result = await data.json();

    if (result.items) {
      dispatch(addPopularVideo(result.items));
      if (result.nextPageToken) {
        setNextPageToken(result.nextPageToken);
      } else {
        setEndOfResults(true);
      }
    } else {
      setEndOfResults(true);
    }

    setLoading(false);
  };

  const loadMoreVideos = () => {
    if (nextPageToken && !loading && !endOfResults) {
      getVideos(nextPageToken);
    }
  };

  return { loadMoreVideos, loading, nextPageToken, endOfResults };
};

export default useVideo;
