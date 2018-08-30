import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import css from '../style/concert.css';

const MAXIMUM_PRICE = 600;
const RECEIVER_ADDRESS = '525410238F3386EECD7E7D4682E124B193B41DDC3FF9D36AADE4406F07A83E2A';

class Concert extends Component {


  handleClick(e) {
    e.preventDefault();

    fetch('http://localhost:9292/transaction', {
      method: 'POST',
      body: JSON.stringify(
        {
          'params':
            {
              'sender': '000000000',
              'receiver': RECEIVER_ADDRESS,
              'name': this.props.concert.displayName,
              'value': this.getPrice(this.props.concert.displayName)
            }
        })
    });
    this.props.history.push('/confirmation');
  }

  getPrice(name) {
    var re = name.length * 11 + name.charCodeAt(0) % MAXIMUM_PRICE;
    return re;
  }

  getDate(date) {
    var newDate = new Date(date);
    var re = newDate.toLocaleDateString('en-US');
    return re;
  }

  render() {
    return (
      <div className='concert'>
        <p id='concert-title'>{this.props.concert.displayName.substr(0, 30)}...</p>
        <p id='concert-location'>Location: {this.props.concert.location.city}</p>
        <p id='concert-date'>Date: {this.getDate(this.props.concert.start.date)}</p>
        <p id='concert-price'>Price: {this.getPrice(this.props.concert.displayName)} BKH</p>
        <Button id='concert-button' onClick={(e) => this.handleClick(e)}>
          Buy!
        </Button>
      </div>
    );
  }
}

export default withRouter(Concert);
