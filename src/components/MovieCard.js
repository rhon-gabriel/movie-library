import React from "react";
import MovieInfoModal from './MovieInfoModal'
import { useDispatch, useSelector } from "react-redux";
import {fetchMovie, handleModal } from '../actions/index'

function MovieCard(props) {
    const movies = props.movies
    const modalState = useSelector((state) => state.moviesReducer.modalOpen);
    const selectedMovie = useSelector((state) => state.moviesReducer.movie);
    const dispatch = useDispatch()
    const handleOpen = (id) => {
        dispatch(fetchMovie(id))
        dispatch(handleModal())
    };

    const handleClose = () => {
        dispatch(handleModal())
    }

  return (
    <div>
      <button onClick={() => handleOpen(movies.id)}>
        <div style={{ width: 100, height: 100, backgroundColor: "pink" }}>
          title: {movies.original_title}
        </div>
      </button>
      <MovieInfoModal modalState={modalState} handleClose={handleClose} movie={selectedMovie} />
    </div>
  );
}

export default MovieCard;
