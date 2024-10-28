import { useEffect } from "react";
import { COMMENT_API, options} from "../utils/constants";
import { useDispatch } from "react-redux";
//import { addComment } from "../utils/commentSlice";

const useComment = (videoId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getComment();
    //return () => dispatch(addComment([]));
  }, [videoId]);

  const getComment = async () => {
    const url =
      COMMENT_API + videoId + "&maxResults=100";
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    //   if (result.items) {
    //     dispatch(addComment(result.items));
    //   }
    } catch (error) {
      console.error(error);
    }
  };
};

export default useComment;
