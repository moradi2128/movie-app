import MovieListing from "../../components/MovieListing/MovieListing";
import "./Movie.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  getAddSearch
} from "../../features/movies/movieSlice";

const Movie = (props) => {
  const searchData = useSelector(getAddSearch);
  const { type } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies(searchData.payload));
    dispatch(fetchAsyncShows(searchData.payload));
  }, [dispatch]);
  return (
    <div className="movie">
      <MovieListing type={type} />
    </div>
  );
};

export default Movie;
