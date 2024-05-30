import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideosAPI } from "./videosAPI";

export interface VideosState {
  videos: any[];
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const videosInitialState: VideosState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: null,
};

// async thunk function
export const fetchVideosAsync = createAsyncThunk(
  "videos/fetchVideos",
  async () => {
    const videos = getVideosAPI();

    return videos;
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState: videosInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideosAsync.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message || "Something went wrong";
        state.videos = [];
      });
  },
});

export default videoSlice.reducer;
