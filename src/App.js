import React from "react";
import MovieList from "./components/movieList/MovieList";
import ProjectInfo from "./components/projectInfo/ProjectInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header/Header'
import styled from "styled-components";
import img from './assets/images/main.jpg';

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Switch>
          <Route path="/" component={MovieList} exact/>
          <Route path="/project" component={ProjectInfo} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

const Wrapper = styled.div`
  flex-grow: 1; 
  height: 100%;
  background: url(${img}) center top no-repeat; 
  background-size: 120% 190%;
`;