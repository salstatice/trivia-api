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

console.log("Host", process.env.HOST)
console.log("API_URL", process.env.API_URL)

class App extends Component {
  render() {
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
