import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ShowInAutocomplete} from "../type";
import {searchTvShows} from "./storeThunks";

interface autocompleteState {
  shows: ShowInAutocomplete[],
  nameTvShow: string,
  fetchLoading: boolean,
}

const initialState: autocompleteState = {
  shows: [],
  nameTvShow: "",
  fetchLoading: false,
};

const autocompleteSlice = createSlice({
  name: "autocomplete",
  initialState: initialState,
  reducers: {
    resetShows: (state) => {
      state.shows = [];
    },
    changeNameTvShow: (state, action: PayloadAction<string | null>) => {
      if(action.payload) {
        state.nameTvShow = action.payload;
      } else {
        state.nameTvShow = "";
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchTvShows.fulfilled, (state, action: PayloadAction<ShowInAutocomplete[]>) => {
      state.shows = action.payload;
    });
  }
});

export const autocompleteReducer = autocompleteSlice.reducer;
export const {resetShows, changeNameTvShow} = autocompleteSlice.actions;