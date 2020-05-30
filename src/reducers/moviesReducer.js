import {
  FETCH_MOVIES_LOADING,
  ADD_FETCHED_MOVIES,
  FETCH_MOVIES_ERROR,
  SELECTED_MOVIE,
  SET_PAGE,
  HANDLE_MODAL,
  SET_TOTAL_PAGES,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  movies: [],
  movie: [],
  error: null,
  page: null,
  totalPages: null,
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
        movies: [...state.movies, ...action.payload.movies],
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload.page,
      };
      case SET_TOTAL_PAGES:
        return {
          ...state,
          totalPages: action.payload.totalPages
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
