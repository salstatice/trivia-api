import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// import logo from './logo.svg';
import './stylesheets/App.css';
import FormView from './components/FormView';
import QuestionView from './components/QuestionView';
import Header from './components/Header';
import QuizView from './components/QuizView';


class App extends Component {
  render() {

    //debugger
    console.log("HOST", process.env.HOST)
    console.log("API_URL", process.env.API_URL)

    const API_BASE_URL = "testfromapp";

    return (
    <div className="App">
      <Header path />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={QuestionView} />
          <Route path="/add" component={FormView} />
          <Route path="/play" component={QuizView} />
          <Route component={QuestionView} />
        </Switch>
      </Router>
    </div>
  );

  }
}

export default App;
