import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Concerts extends Component {
  propTypes: {
    concert: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <div className='concert'>
        <p>{this.props.concert.name}</p>
        <p>{this.props.concert.price}</p>
        <Button>Buy!</Button>
      </div>
    );
  }
}

export default Concerts;
