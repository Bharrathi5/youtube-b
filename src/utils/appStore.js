import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import searchSliceReducer from "./searchSlice";

const appStore = configureStore({
  reducer: {
    menu: sidebarReducer,
    search: searchSliceReducer,
  },
});

export default appStore;
