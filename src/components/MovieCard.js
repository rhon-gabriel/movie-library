import React from "react";
import MovieInfoModal from "./MovieInfoModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie, handleModal } from "../actions/index";

function MovieCard() {
  const movies = useSelector((state) => state.moviesReducer.movies);

  const dispatch = useDispatch();
  const handleOpen = (id) => {
    dispatch(fetchMovie(id));
    dispatch(handleModal());
  };

  return (
    <div>
      {movies &&
        movies.map((item) => {
          return (
            <button onClick={() => handleOpen(item.id)}>
              <div style={styles.card}>title: {item.original_title}</div>
            </button>
          );
        })}
      <MovieInfoModal />
    </div>
  );
}

const styles = {
  card: {
    width: 100,
    height: 100,
    backgroundColor: "pink",
  },
};

export default MovieCard;
