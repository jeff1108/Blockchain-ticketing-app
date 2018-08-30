import React, { Component } from 'react';


class Confirmation extends Component {

  render() {
    return (
      <div className='success'>
        <p>Thank you for your purchase, your ticket will be sent to your email</p>
        <p>Your transaction is now recorded on the
          <a href='http://localhost:9292'> Block Chain </a>
        </p>
      </div>
    );
  }
}

export default Confirmation;
