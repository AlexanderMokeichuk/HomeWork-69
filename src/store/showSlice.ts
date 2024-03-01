import {Show} from "../type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {searchTvShow} from "./storeThunks";

interface ShowState {
  show: Show,
  loading: boolean,
}

const initialState: ShowState = {
  show: {
    name: "",
    image: {
      medium: "",
      original: "",
    },
    summary: "",
    url: "",
  },
  loading: false
};

const showSlice = createSlice({
  name: "show",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase((searchTvShow.pending), (state) => {
      state.loading = true;
    });
    builder.addCase((searchTvShow.fulfilled), (state, {payload: show}: PayloadAction<Show>) => {
      state.loading = false;
      state.show = show;
    });
    builder.addCase((searchTvShow.rejected), (state) => {
      state.loading = false;
    });
  }
});

export const showReducer = showSlice.reducer;
