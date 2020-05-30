import React from "react";
import MovieList from "./components/MovieList";
import ProjectInfo from "./components/ProjectInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={MovieList} exact/>
          <Route path="/project" component={ProjectInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
