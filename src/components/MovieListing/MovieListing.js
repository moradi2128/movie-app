import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3 style={{ color: "white" }}>Loading</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3 style={{ color: "white" }}>Loading</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      {Object.keys(movies).length === 0 && Object.keys(shows).length === 0 ? (
        <div style={{ color: "white", textAlign: "center" }}>Loading ... </div>
      ) : (
        <>
          <div className="movie-list">
            <h2>Movies</h2>
            <div className="movie-container">{renderMovies}</div>
          </div>
          <div className="show-list">
            <h2>Shows</h2>
            <div className="show-container">{renderShows}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieListing;
