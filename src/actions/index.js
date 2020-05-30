import {
  FETCH_MOVIES_LOADING,
  ADD_FETCHED_MOVIES,
  FETCH_MOVIES_ERROR,
  SELECTED_MOVIE,
  SET_PAGE,
  SET_TOTAL_PAGES,
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
const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: {
      page: page,
    },
  };
};

const totalPages = (totalPages) => {
  return {
    type: SET_TOTAL_PAGES,
    payload: {
      totalPages: totalPages,
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

export const fetchMovieList = (pageNumber) => {
  return (dispatch) => {
    dispatch(fetchMoviesLoading);
    axios.get(`${apiUrl}popular?api_key=${API_KEY}&page=${pageNumber}`)
      .then((res) => res.data)
      .then((data) => {
        dispatch(setPage(data.page))
        dispatch(addFetchedMovies(data.results));
        dispatch(totalPages(data.total_pages))
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

export const loadMore = (page, totalPages) => {
  return (dispatch) => {
      if (page < totalPages) {
        dispatch(fetchMovieList(page + 1));
      }
  };
}

export default {
  fetchMovieList,
  fetchMovie,
  handleModal
};
