import React from "react";
import { Modal } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { handleModal } from "../../actions";
import Tag from "../ui-common/Tag";
import ProgressBar from "../ui-common/ProgressBar";
import { FirstTextLogo } from "../header/headerStyle";
import {
  ModalWrapper,
  Containter,
  LeftBox,
  LeftHeader,
  CircularBarContainer,
  TagContainer,
  Title,
  P,
  QuotesContainer,
  Tagline,
  Logo,
  TextRow,
  Text,
  RightBox,
  LeftContentTop,
  Poster,
  LeftContentBottom,
} from "../modal/modalStyle";
import imdb from "../../assets/images/Imdb.png";
import moment from "moment";

export default function MovieInfoModal() {
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state) => state.moviesReducer.movie);
  const modalState = useSelector((state) => state.moviesReducer.modalOpen);
  const imgUrl = `http://image.tmdb.org/t/p/w185/${selectedMovie.poster_path}`;
  const imdbUrl = `https://www.imdb.com/title/${selectedMovie.imdb_id}`;

  const handleClose = () => {
    dispatch(handleModal());
  };

  return (
    <Modal open={modalState} onClose={handleClose}>
      <ModalWrapper>
        <Containter>
          <LeftBox>
            <LeftHeader>
              <Title>
                <FirstTextLogo>{selectedMovie.title}</FirstTextLogo>
              </Title>
              <CircularBarContainer>
                <ProgressBar
                  text="User score"
                  score={selectedMovie.vote_average}
                  margin="10px"
                  fontSize="20px"
                />
              </CircularBarContainer>
            </LeftHeader>
            <TagContainer>
              {selectedMovie.genres &&
                selectedMovie.genres.map((el) => {
                  return (
                    <Tag
                      key={el.id}
                      text={el.name}
                      width="100px"
                      color="#ffe5ea"
                    />
                  );
                })}
            </TagContainer>
            <P>{selectedMovie.overview}</P>
            <QuotesContainer>
              {selectedMovie.tagline && (
                <Tagline>{selectedMovie.tagline}</Tagline>
              )}
            </QuotesContainer>
            <a target="_blank" rel="noopener noreferrer" href={imdbUrl}>
              <Logo src={imdb} alt="imdb logo" />
            </a>
          </LeftBox>

          <RightBox>
            <LeftContentTop>
              <Poster src={imgUrl} alt="movie poster" />
            </LeftContentTop>
            <LeftContentBottom>
              <TextRow>
                <Tag text={"Release Date:"} width="100px" color="#ff6666" />
                <Text>{moment(selectedMovie.release_date).format("ll")}</Text>
              </TextRow>
              <TextRow>
                <Tag text={"Runtime:"} width="100px" color="#ff6666" />
                <Text>{`${selectedMovie.runtime} min`}</Text>
              </TextRow>
            </LeftContentBottom>
          </RightBox>
        </Containter>
      </ModalWrapper>
    </Modal>
  );
}
