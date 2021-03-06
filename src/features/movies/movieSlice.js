import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (search) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${search}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (search) => {
    const seriesText = "Friends";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${search}&type=series`
    );
    return response.data;
  }
);
export const fetchAsyncMoviesOrShowsDetail = createAsyncThunk(
  "movies/fetchAsyncMoviesOrShowsDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  search: { payload: "marvel" },
  movies: {},
  shows: {},
  moviesOrShowDetail: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addSearchValue: (state, payload) => {
      state.search.payload = payload.payload;
    },
    removeFetchAsyncMoviesOrShowsDetail: (state) => {
      state.moviesOrShowDetail = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched succesfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched succesfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncMoviesOrShowsDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched succesfully");
      return { ...state, moviesOrShowDetail: payload };
    },
  },
});

export const { removeFetchAsyncMoviesOrShowsDetail, addSearchValue } =
  movieSlice.actions;
export const getAllMovies = (state) => state.movies;
export const getAllShows = (state) => state.shows;
export const getAllMoviesOrShowDetail = (state) => state.moviesOrShowDetail;
export const getAddSearch = (state) => state.search;
export default movieSlice.reducer;
