import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { loadMore } from "./actions";
import MovieCard from "./components/movieCard/MovieCard";
import Header from "./components/header/Header";
import img from "./assets/images/main.jpg";

export default function App() {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.moviesReducer.page);
  const totalPages = useSelector((state) => state.moviesReducer.totalPages);

  return (
    <Wrapper>
      <Header />
      <MovieCard />
      <Bottom>
        <LoadMoreButton onClick={() => dispatch(loadMore(page, totalPages))}>
          <Text>Load more...</Text>
        </LoadMoreButton>
      </Bottom>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  background: url(${img}) center top no-repeat;
  background-size: 120% 190%;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;
export const LoadMoreButton = styled.div`
  font-size: 16px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  width: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.08), 0 0 5px rgb(147, 163, 175, 4);
`;

export const Text = styled.h5`
  cursor: pointer;
  font-size: 18px;
  color: #ffffff;
  background: linear-gradient(to right, #c9d6ff, #e2e2e2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;
