import React, { Component } from 'react';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom';

class App extends Component{
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/repos" activeClassName="active">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App;
