import MovieListing from "../../components/MovieListing/MovieListing";
import "./Movie.scss";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Movie = (props) => {
  const {type}=props
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return (
    <div className="movie">
      <MovieListing type={type} />
    </div>
  );
};

export default Movie;
