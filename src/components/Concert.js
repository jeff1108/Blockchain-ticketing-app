import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

// These constants are temporary measures and will eventually be replaced
const MAXIMUM_PRICE = 600;
const SENDER_ADDRESS = '61709B365969C742160B4A365A9D43216B118AD5B626D07B81FEDD4F88DA9943';
const RECEIVER_ADDRESS = '525410238F3386EECD7E7D4682E124B193B41DDC3FF9D36AADE4406F07A83E2A';

class Concert extends Component {

  handleClick(e) {
    e.preventDefault();

    fetch('https://blockheads-backend.herokuapp.com/transaction', {
      method: 'POST',
      body: JSON.stringify(
        {
          'params':
            {
              'sender': '74d87350d1774e28bb716cbd72f0aeb339705157ec105426f312a351dc23aed3',
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
          BUY!
        </Button>
      </div>
    );
  }
}

export default withRouter(Concert);
