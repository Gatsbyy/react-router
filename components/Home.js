import React, { Component } from 'react';
import { render } from 'react-dom';

class Home extends Component {
  render() {
    console.log('Home');
    console.log(this.props);
    return(
      <div>Home</div>
    )
  }
};

export default Home;