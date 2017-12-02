import React, { Component } from 'react';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom';

class Repos extends Component {
  render() {
    console.log('Repos');
    console.log(this.props);
    return(
      <div>
        <p>Repos</p>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        </ul>
      </div>
    )
  }
};

export default Repos;