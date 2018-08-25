import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Concert extends Component {

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
        <p>Concert: {this.props.concert.displayName}</p>
        <p>Location: {this.props.concert.location.city}</p>
        <p>Date: {this.props.concert.start.date}</p>
        <Button onClick={(e) => this.handleClick(e)}>
          Buy!
        </Button>
      </div>
    );
  }
}


export default Concert;