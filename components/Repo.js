import React, { Component } from 'react';
import { render } from 'react-dom';

class Repo extends Component {
  render() {
    console.log('Repo');
    console.log(this.props);
    return(
      <div>{this.props.match.params.userName}</div>
    )
  }
};

export default Repo;