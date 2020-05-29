import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieList } from '../actions/index'
import MovieCard from './MovieCard'


function MovieList() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchMovieList());
  }, [])
  
  const movies = useSelector((state) => state.moviesReducer.movies);
  return (
    <div>
      <div>Popular Movies</div>
      {movies && movies.map(movie => {
        return(
          <MovieCard key={movie.id} movies={movie} />
          )
        })}
    </div>
  )
}

export default MovieList;
