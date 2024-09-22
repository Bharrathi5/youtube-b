import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import searchSliceReducer from "./searchSlice";
import videoReducer from "./videoSlice";

const appStore = configureStore({
  reducer: {
    menu: sidebarReducer,
    search: searchSliceReducer,
    video: videoReducer,
  },
});

export default appStore;
