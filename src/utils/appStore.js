import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";

const appStore = configureStore({
  reducer: {
    menu: sidebarReducer,
  },
});

export default appStore;
