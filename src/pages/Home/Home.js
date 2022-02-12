import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  addSearchValue,
  getAddSearch,
} from "../../features/movies/movieSlice";
import MovieBanner from "../../components/MovieBanner/MovieBanner";

import "./Home.scss";
import { useSelector } from "react-redux";

const Home = () => {
  const [search, setSearch] = useState("");
  const searchData = useSelector(getAddSearch);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies(searchData.payload));
    dispatch(fetchAsyncShows(searchData.payload));
  }, [dispatch, searchData]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addSearchValue(search));
    setSearch("");
  };
  return (
    <div className="home">
      <div className="banner">
        <div className="banner-content">
          <div className="banner-search">
            <form onSubmit={submitHandler}>
              <input
                className="input-search"
                type="text"
                placeholder="Film , TV , Series , ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" className="btn-search ">
                <i className="fa fa-search"></i>
              </button>
            </form>
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
