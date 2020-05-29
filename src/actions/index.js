import {
  FETCH_MOVIES_LOADING,
  ADD_FETCHED_MOVIES,
  FETCH_MOVIES_ERROR,
  SELECTED_MOVIE,
  HANDLE_MODAL
} from "./actionTypes";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const apiUrl = `https://api.themoviedb.org/3/movie/`;

const fetchMoviesLoading = () => {
  return {
    type: FETCH_MOVIES_LOADING,
  };
};

const addFetchedMovies = (movies) => {
  return {
    type: ADD_FETCHED_MOVIES,
    payload: {
      movies: movies,
    },
  };
};

const fetchMoviesError = (error) => {
  return {
    type: FETCH_MOVIES_ERROR,
    payload: {
      error: error,
    },
  };
};

const fetchSelectedMovie = (movie) => {
  return {
    type: SELECTED_MOVIE,
    payload: {
      movie: movie,
    },
  };
};

export const fetchMovieList = () => {
  return (dispatch) => {
    dispatch(fetchMoviesLoading);
    axios.get(`${apiUrl}popular?api_key=${API_KEY}&page=1`)
      .then((res) => res.data)
      .then((data) => {
        dispatch(addFetchedMovies(data.results));
      })
      .catch((error) => {
        dispatch(fetchMoviesError(error))
      });
  };
};

export const fetchMovie = (id) => {
  return (dispatch) => {
    dispatch(fetchMoviesLoading);
    axios.get(`${apiUrl}${id}?api_key=${API_KEY}`)
      .then((res) => res.data)
      .then((data) => {
        dispatch(fetchSelectedMovie(data));
      })
      .catch((error) => {
        dispatch(fetchMoviesError(error))
      });
  };
};

export const handleModal = () => {
  return {
    type: HANDLE_MODAL,
  };
};

export default {
  fetchMovieList,
  fetchMovie,
  handleModal
};
