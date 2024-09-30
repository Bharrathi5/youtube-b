import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    popularVideo: [],
  },
  reducers: {
    addPopularVideo: (state, action) => {
      state.popularVideo.push(...action.payload);
    },
  },
});

export const { addPopularVideo } = videoSlice.actions;
export default videoSlice.reducer;
