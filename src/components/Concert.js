import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const MAXIMUM_PRICE = 600;

class Concert extends Component {


  handleClick(e) {
    e.preventDefault();

    fetch('http://localhost:9292/blocks/create', {
      method: 'POST',
      body: JSON.stringify(
        {
          'params':
            {
              'sender': '000000000',
              'receiver': '000000000',
              'name': this.props.concert.displayName,
              'value': this.getPrice(this.props.concert.displayName)
            }
        })
    });
  }

  getPrice(name) {
    var re = name.length * 11 + name.charCodeAt(0) % MAXIMUM_PRICE;
    return re;
  }

  getDate(date) {
    var newDate = new Date(date);
    var re = newDate.toLocaleDateString('en-HK');
    return re;
  }

  render() {
    return (
      <div className='concert'>
        <p>Concert: {this.props.concert.displayName}</p>
        <p>Location: {this.props.concert.location.city}</p>
        <p>Date: {this.getDate(this.props.concert.start.date)}</p>
        <p>Price: {this.getPrice(this.props.concert.displayName)}</p>
        <Button onClick={(e) => this.handleClick(e)}>
          Buy!
        </Button>
      </div>
    );
  }
}

export default Concert;
