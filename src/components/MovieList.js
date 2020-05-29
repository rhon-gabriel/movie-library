import React from "react";
import { useSelector } from "react-redux";


function MovieList() {
  const movies = useSelector((state) => state.movies);
  return <div>Popular Movies</div>;
}

export default MovieList;
