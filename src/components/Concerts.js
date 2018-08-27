import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Concerts extends Component {

  handleClick(e) {
    e.preventDefault();

    fetch('http://localhost:9292/blocks/create', {
      method: 'POST',
      body: JSON.stringify( { 'params': {'sender': '000000000', 'receiver': '000000000', 'name': this.props.concert.name, 'value': this.props.concert.price} } )
    });
  }


  render() {
    return (
      <div className='concert'>
        <p>{this.props.concert.name}</p>
        <p>{this.props.concert.price}</p>
        <Button onClick={(e) => this.handleClick(e)}>
          Buy!
        </Button>
      </div>
    );
  }
}

export default Concerts;
