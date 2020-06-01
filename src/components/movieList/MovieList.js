import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMore } from "../../actions";
import MovieCard from "../movieCard/MovieCard";
import { Wrapper, Bottom, LoadMoreButton, Text } from './movieListStyle'

function MovieList() {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.moviesReducer.page);
  const totalPages = useSelector((state) => state.moviesReducer.totalPages);

  return (
    <Wrapper>
      <MovieCard />
      <Bottom>
        <LoadMoreButton onClick={() => dispatch(loadMore(page, totalPages))}>
          <Text>Load more...</Text>
        </LoadMoreButton>
      </Bottom>
    </Wrapper>
  );
}

export default MovieList;