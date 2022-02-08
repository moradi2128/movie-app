import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
export const store = configureStore(
  {
    reducer: moviesReducer,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ /
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
);
