import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import App from './App'
import ProjectInfo from './components/projectInfo/ProjectInfo'

const Root = ({ store }) => (
    <Provider store={store}>
    <Router>
        <Route exact path="/" component={App} />
        <Route path="/project" component={ProjectInfo} />
    </Router>
  </Provider>
)

export default Root