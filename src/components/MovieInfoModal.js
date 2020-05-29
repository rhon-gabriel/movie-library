import React from "react";
import Modal from "@material-ui/core/Modal";

function MovieInfoModal(props) {
  const {movie, handleClose, modalState} = props;
  const movieImg = `http://image.tmdb.org/t/p/w185/${movie.poster_path}`

  return (
    <Modal style={styles.modal} open={modalState} onClose={handleClose}>
      <div>title: {movie.title}
      <img src={movieImg} alt="movie poster"/>
      </div>
    </Modal>
  );
}

const styles = {
  modal: {
    position: "absolute",
    width: 400,
    height: 400,
    border: "2px solid #000",
    backgroundColor: "blue",
  },
};

export default MovieInfoModal;
