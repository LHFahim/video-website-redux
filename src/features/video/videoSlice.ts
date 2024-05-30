import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideoAPI } from "./videoAPI";

export interface VideoState {
  video: object;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const videoItemInitialState: VideoState = {
  video: {},
  isLoading: false,
  isError: false,
  error: null,
};

// async thunk function
export const fetchVideoItemAsync = createAsyncThunk(
  "videos/fetchVideo",
  async (videoId: number) => {
    const video = getVideoAPI(videoId);

    return video;
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState: videoItemInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoItemAsync.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideoItemAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideoItemAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message || "Something went wrong";
        state.video = {};
      });
  },
});

export default videoSlice.reducer;
