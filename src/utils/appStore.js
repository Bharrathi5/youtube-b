import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import searchSliceReducer from "./searchSlice";
import videoReducer from "./videoSlice";
import suggestionReducer from "./suggestSlice";

const appStore = configureStore({
  reducer: {
    menu: sidebarReducer,
    search: searchSliceReducer,
    video: videoReducer,
    suggestion: suggestionReducer,
  },
});

export default appStore;
