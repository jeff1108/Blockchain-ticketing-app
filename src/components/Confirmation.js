import React, { Component } from 'react';
import css from '../style/confirmation.css';

class Confirmation extends Component {

  render() {
    return (
      <div className='user-form'>
        <h2 id='intro-text'>Your ticket is on the chain!</h2>
        <h3>Thank you for your purchase 😎</h3>
        <p>A record of your transaction has been permanently<br />stored on the blockchain and <a href='https://blockheads-backend.herokuapp.com/'>can be viewed here</a></p>
      </div>
    );
  }
}

export default Confirmation;
