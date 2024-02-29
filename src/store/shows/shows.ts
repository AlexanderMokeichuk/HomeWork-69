import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Show} from "../../type";
import {searchTvShows} from "./showsThunks";

interface TvShowsState {
  shows: Show[],
  fetchLoading: boolean,
}

const initialState: TvShowsState = {
  shows: [],
  fetchLoading: false,
};

const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: initialState,
  reducers: {
    resetShows: (state) => {
      state.shows = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchTvShows.fulfilled, (state, action: PayloadAction<Show[]>) => {
      state.shows = action.payload;
    });
  }
});

export const tvShowsReducer = tvShowsSlice.reducer;
export const {resetShows} = tvShowsSlice.actions;