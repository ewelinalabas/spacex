import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar';
import PastLaunches from './PastLaunches';
import UpcomingLaunches from './UpcomingLaunches';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const routing = (
  <Router>
    <NavBar />
    <div className="container">
      <Route exact path="/" component={App} />
      <Route path="/pastlaunches" component={PastLaunches} />
      <Route path="/upcominglaunches" component={UpcomingLaunches} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
