import { createSlice } from "@reduxjs/toolkit";

const sideBar = createSlice({
  name: "menu",
  initialState: {
    isBarOpen: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isBarOpen = !state.isBarOpen;
    },
  },
});

export const { toggleSidebar } = sideBar.actions;
export default sideBar.reducer;
