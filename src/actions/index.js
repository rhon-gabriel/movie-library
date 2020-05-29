import {
  FETCH_MOVIES_LOADING,
  ADD_FETCHED_MOVIES,
  FETCH_MOVIES_ERROR,
} from "./actionTypes";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

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

export const fetchMovies = () => {
  return (dispatch) => {
    dispatch(fetchMoviesLoading);
    axios.get(apiUrl)
      .then((res) => res.data)
      .then((data) => {
        dispatch(addFetchedMovies(data.results));
      })
      .catch((error) => {
        dispatch(fetchMoviesError(error))
      });
  };
};

export default {
  fetchMoviesLoading,
  addFetchedMovies,
  fetchMoviesError,
  fetchMovies,
};
