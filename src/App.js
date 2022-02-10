import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Header from "./components/Header/Header";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <section className="container">
          <div className="container-right">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/movie" element={<Movie type="movie" />} />
              <Route path="/series" element={<Movie type="series" />} />
              <Route path="/movie/:imdbId" element={<MovieDetail />} />
              <Route path="/series/:imdbId" element={<MovieDetail />} />
              <Route element={<PageNotFound />} />
            </Routes>
          </div>
        </section>
      </Router>
    </div>
  );
}

export default App;
