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
    console.log("testing")
    console.log(process.env.PUBLIC_URL)

    return (
    <div className="App">
      <Header path />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={QuestionView} />
          <Route exact path="/add" component={FormView} />
          <Route exact path="/play" component={QuizView} />
          <Route component={QuestionView} />
        </Switch>
      </Router>
    </div>
  );

  }
}

export default App;
