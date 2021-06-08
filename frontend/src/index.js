import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

console.log("This is the process.env", process.env.PUBLIC_URL)

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}><App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


 //"start": "HOST='127.0.0.1' PORT='5000' react-scripts start",
