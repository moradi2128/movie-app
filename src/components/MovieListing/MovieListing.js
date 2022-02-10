import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import Loading from "../Loading/Loading";

const MovieListing = (props) => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  return (
    <>
      {props.type === "movie" ? (
        <>
          {Object.keys(movies).length === 0 &&
          Object.keys(shows).length === 0 ? (
            <Loading />
          ) : (
            <>
              <h1 className="media-title">Movie</h1>
              <div className="movie-container">
                {movies.Response === "True"
                  ? movies.Search.map((movie, index) => {
                      return <MovieCard key={index} data={movie} />;
                    })
                  : null}
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {Object.keys(movies).length === 0 &&
          Object.keys(shows).length === 0 ? (
            <div className="loading">
              <span>Loading ...</span>
            </div>
          ) : (
            <>
              <h1 className="media-title">Series</h1>
              <div className="movie-container">
                {shows.Response === "True"
                  ? shows.Search.map((shows, index) => {
                      return <MovieCard key={index} data={shows} />;
                    })
                  : null}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default MovieListing;
