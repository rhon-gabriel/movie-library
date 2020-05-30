import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMore } from "../actions/index";
import MovieCard from "./MovieCard";

function MovieList() {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.moviesReducer.page);
  const totalPages = useSelector((state) => state.moviesReducer.totalPages);

  return (
    <div>
      <div>Popular Movies</div>
        <MovieCard />
      <button onClick={() => dispatch(loadMore(page, totalPages))}>
        Load more
      </button>
    </div>
  );
}

export default MovieList;
