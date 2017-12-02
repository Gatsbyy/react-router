import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Home from './components/Home';
import Repos from './components/Repos';
import Repo from './components/Repo';

render((
  <Router>
    <div>
      <Route path="/" component={App}/>
      <Route path="/repos" component={Repos}/>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
), document.getElementById('app'));
