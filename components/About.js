import React, { Component } from 'react';
import { render } from 'react-dom';

class About extends Component {
  render() {
    console.log('About');
    console.log(this.props);
    return(
      <div>About</div>
    )
  }
};

export default About;