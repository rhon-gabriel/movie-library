import {
  FETCH_MOVIES_LOADING,
  ADD_FETCHED_MOVIES,
  FETCH_MOVIES_ERROR,
  SELECTED_MOVIE,
  HANDLE_MODAL,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  movies: [],
  movie: [],
  error: null,
  modalOpen: false,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_FETCHED_MOVIES:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies,
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SELECTED_MOVIE:
      return {
        ...state,
        loading: false,
        movie: action.payload.movie,
      };
    case HANDLE_MODAL:
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    default:
      return state;
  }
}
