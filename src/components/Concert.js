import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Concert extends Component {

  handleClick(e) {
    e.preventDefault();

    fetch('http://localhost:9292/blocks/create', {
      method: 'POST',
      body: JSON.stringify( { 'params': {'sender': '000000000', 'receiver': '000000000', 'name': this.props.concert.displayName, 'value': '100'} } )
    });
  }

  getDate(date) {
    var newDate = new Date(date);
    var re = newDate.toLocaleDateString();
    return re;
  }

  render() {
    return (
      <div className='concert'>
        <p>Concert: {this.props.concert.displayName}</p>
        <p>Location: {this.props.concert.location.city}</p>
        <p>Date: {this.getDate(this.props.concert.start.date)}</p>
        <Button onClick={(e) => this.handleClick(e)}>
          Buy!
        </Button>
      </div>
    );
  }
}


export default Concert;
