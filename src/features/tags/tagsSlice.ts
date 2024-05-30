import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTagsAPI } from "./tagsAPI";

export interface TagsState {
  tags: any[];
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const tagsInitialState: TagsState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: null,
};

// async thunk function
export const fetchTagsAsync = createAsyncThunk("tags/fetchTags", async () => {
  const tags = getTagsAPI();

  return tags;
});

const tagsSlice = createSlice({
  name: "tags",
  initialState: tagsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTagsAsync.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTagsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTagsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message || "Something went wrong";
        state.tags = [];
      });
  },
});

export default tagsSlice.reducer;
