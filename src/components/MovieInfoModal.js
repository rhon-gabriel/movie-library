import React from "react";
import Modal from "@material-ui/core/Modal";
import { useSelector, useDispatch } from "react-redux";
import { handleModal } from "../actions/";

function MovieInfoModal() {
  const selectedMovie = useSelector((state) => state.moviesReducer.movie);
  const modalState = useSelector((state) => state.moviesReducer.modalOpen);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(handleModal());
  };

  const imgUrl = `http://image.tmdb.org/t/p/w185/${selectedMovie.poster_path}`;
  return (
    <Modal
      style={styles.modal}
      open={modalState}
      onClose={handleClose}
      BackdropProps={{ style: styles.backdrop }}
    >
      <div>
        title: {selectedMovie.title}
        <img src={imgUrl} alt="movie poster" />
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
  backdrop: {
    backgroundColor: "transparent",
  },
};

export default MovieInfoModal;
