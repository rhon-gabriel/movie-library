import {
  FETCH_MOVIES_LOADING,
  ADD_FETCHED_MOVIES,
  FETCH_MOVIES_ERROR,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  movies: [],
  error: null,
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
    default:
      return state;
  }
}
