import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideosAPI } from "./relatedVideosAPI";

export interface RelatedVideosState {
  videos: any[];
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const videosInitialState: RelatedVideosState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: null,
};

// async thunk function
export const fetchRelatedVideosAsync = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ tags, id }: any) => {
    const videos = getRelatedVideosAPI({ tags, id });

    return videos;
  }
);

const relatedVideoSlice = createSlice({
  name: "relatedVideos",
  initialState: videosInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideosAsync.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchRelatedVideosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message || "Something went wrong";
        state.videos = [];
      });
  },
});

export default relatedVideoSlice.reducer;
