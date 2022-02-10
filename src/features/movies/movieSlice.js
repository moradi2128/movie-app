import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "marvel";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${seriesText}&type=series`
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
  movies: {},
  shows: {},
  moviesOrShowDetail: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, payload) => {
      state.movies = payload;
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

export const { removeFetchAsyncMoviesOrShowsDetail } = movieSlice.actions;
export const getAllMovies = (state) => state.movies;
export const getAllShows = (state) => state.shows;
export const getAllMoviesOrShowDetail = (state) => state.moviesOrShowDetail;
export default movieSlice.reducer;
