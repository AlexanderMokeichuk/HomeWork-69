import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiShow, ApiShows, Show, ShowInAutocomplete} from "../type";
import axiosApi from "../axiosApi";

export const searchTvShows = createAsyncThunk<ShowInAutocomplete[], string>(
  "autocomplete/search/TvShows",
  async (arg) => {
    const {data: apiShows} = await axiosApi.get<ApiShows[] | []>(`/search/shows?q=${arg}`);
    const shows: ShowInAutocomplete[] = apiShows.map((item: ApiShows) => {
      return {
        id: item.show.id,
        name: item.show.name,
      };
    });

    return shows;
  }
);

export const searchTvShow = createAsyncThunk<Show, string>(
  "autocomplete/search/TvShow",
  async (arg) => {
    const {data: apiShow} = await axiosApi.get<ApiShow>(`/shows/${arg}`);
    const show: Show = {
      name: apiShow.name,
      image: apiShow.image,
      summary: apiShow.summary,
      url: apiShow.url,
    };

    return show;
  }
);