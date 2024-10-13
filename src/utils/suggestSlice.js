import { createSlice } from "@reduxjs/toolkit";

const suggestSlice = createSlice({
  name: "suggestion",
  initialState: { suggestVideo: [] },
  reducers: {
    addSuggestVideo: (state, action) => {
      state.suggestVideo = action.payload;
    },
  },
});
export const { addSuggestVideo } = suggestSlice.actions;
export default suggestSlice.reducer;
