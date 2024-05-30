import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import filterSlice from "../features/filter/filterSlice";
import relatedVideosSlice from "../features/relatedVideos/relatedVideosSlice";
import tagsSlice from "../features/tags/tagsSlice";
import videoSlice from "../features/video/videoSlice";
import videosSlice from "../features/videos/videosSlice";

export const store = configureStore({
  reducer: {
    videos: videosSlice,
    tags: tagsSlice,
    videoItem: videoSlice,
    relatedVideos: relatedVideosSlice,
    filter: filterSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
