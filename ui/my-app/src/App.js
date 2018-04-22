import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TweetContent from './components/TweetContent';
import TimeFrameTweet from './components/TimeFrameTweet';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul class="nav nav-pills">
            <li class="active"><Link to={'/content'}>Content</Link></li>
            <li><Link to={'/timeFrame'}>Time Frame</Link></li>
          </ul>

          <Switch>
            <Route exact path='/content' component={TweetContent} />
            <Route exact path='/timeFrame' component={TimeFrameTweet} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
