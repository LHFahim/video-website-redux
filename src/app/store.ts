import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import videosSlice from "../features/videos/videosSlice";

export const store = configureStore({
  reducer: {
    videos: videosSlice,
    counter: counterSlice,
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
