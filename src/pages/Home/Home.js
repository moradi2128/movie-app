import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import MovieBanner from "../../components/MovieBanner/MovieBanner";

import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return (
    <div className="home">
      <div className="banner">
        <div className="banner-content">
          <div className="banner-search">
            <input
              className="input-search"
              type="text"
              placeholder="Film , TV , Series , ..."
            />
            <i className="fa fa-search"></i>
          </div>
          <div className="content-center">
            <h1>Marvel</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ut
              saepe corrupti obcaecati modi. Incidunt cumque cum accusamus
              sapiente nulla tempore? Nulla quos pariatur fuga consequuntur iure
              dolore, voluptatibus cupiditate.
            </p>
            <div>
              <button type="button" className="btn-primary">
                <i className="fa fa-play"></i>
              </button>
              <button type="button" className="btn-secondary">
                More Details
              </button>
            </div>
          </div>
          <div className="movie-recently">
            <MovieBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
