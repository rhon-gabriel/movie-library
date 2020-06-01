import React from "react";
import MovieInfoModal from "../modal/MovieInfoModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie, handleModal } from "../../actions";
import PacmanLoader from "react-spinners/PacmanLoader";
import Tag from "../ui-common/Tag";
import ProgressBar from "../ui-common/ProgressBar";
import { Grid } from "@material-ui/core";
import {
  Wrapper,
  Card,
  Poster,
  CircularBarContainer,
  TagContainer,
} from "./movieCardStyle";
import moment from "moment";

export default function MovieCard() {
  const dispatch = useDispatch();
  const handleOpen = (id) => {
    dispatch(fetchMovie(id));
    dispatch(handleModal());
  };

  const movies = useSelector((state) => state.moviesReducer.movies);
  const loading = useSelector((state) => state.moviesReducer.loading);
  const imgUrl = `http://image.tmdb.org/t/p/w185/`;

  return (
    <Wrapper container>
      <PacmanLoader color={"#ffff00"} loading={loading} />
      <Grid item xs={8}>
        <Grid container spacing={3} justify="center">
          {movies &&
            movies.map((item) => (
              <Grid item key={item.id}>
                <Card onClick={() => handleOpen(item.id)}>
                  <Poster
                    key={item.id}
                    src={imgUrl + item.poster_path}
                    alt="movie poster"
                  />
                  <CircularBarContainer>
                    <ProgressBar score={item.vote_average} fontSize="13px" />
                  </CircularBarContainer>
                  <TagContainer>
                    <Tag
                      text={moment(item.release_date).format("YYYY")}
                      width="70px"
                      color="#fff3b2"
                    />
                  </TagContainer>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Grid>
      <MovieInfoModal />
    </Wrapper>
  );
}
