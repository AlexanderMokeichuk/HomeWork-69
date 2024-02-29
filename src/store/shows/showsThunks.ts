import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiShow, Show} from "../../type";
import axiosApi from "../../axiosApi";

export const searchTvShows = createAsyncThunk<Show[], string>(
  "tvShows/search",
  async (arg) => {
    const {data: apiShows} = await axiosApi.get<ApiShow[] | []>(`/${arg}`);
    console.log(apiShows);
    const shows: Show[] = apiShows.map((item: ApiShow) => {
      return {
        id: item.show.id,
        name: item.show.name,
      };
    });

    return shows;
  }
);