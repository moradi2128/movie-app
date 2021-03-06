import "./MovieBanner.scss";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      <div className="movie-banner-container">
        {movies.Search.slice(0, 6).map((movie, index) => {
          return (
            <div className="card-item" key={index}>
              <Link to={`/${movie.Type}/${movie.imdbID}`}>
                <div className="card-top">
                  <img src={movie.Poster} alt={movie.Title} />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    ) : (
      <div style={{ color: "white", textAlign: "center", width: "100%" }}>
        Not Found
      </div>
    );
  return (
    <div className="movie-wrapper">
      {Object.keys(movies).length === 0 ? (
        <div style={{ color: "white", textAlign: "center", width: "100%" }}>
          Loading ...{" "}
        </div>
      ) : (
        <>
          {renderMovies}
          <Link className="more-item" to="/movie">
            <span>More</span>
            <i className="fa fa-arrow-circle-o-right"></i>
          </Link>
        </>
      )}
    </div>
  );
};

export default MovieListing;
