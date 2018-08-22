import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      concert1: {
        name: "Bruno Mars",
        description: "Lanuch in Hong Kong 2018",
        price: "£100"
      },
      concert2: {
        name: "Justin Bieber",
        description: "Lanuch in Hong Kong 2018",
        price: "£100"
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <div>
      <h2> ALL TICKETS </h2>
      // <form onSubmit={this.handleSubmit}>
      //   <label htmlFor="concert_name">Concert:
      //     <h4>{this.state.concert1.name}</h4>
      //   </label>
      //   <label htmlFor="concert_description">Description:
      //     <h4>{this.state.concert1.description}</h4>
      //   </label>
      //   <label htmlFor="concert_price">Price:
      //     <h4>{this.state.concert1.price}</h4>
      //   </label>
      //   <button>Sumbit!</button>
      // </form>
      </div>
    );
  }
}

export default App;


  //        concert_name: 'Conert_name',
  //        price: 16,
  //        description: 'hello',
  //        sender_id: 1234,
  //        sender_address: 'seller@gmail.com',
  //        receiver_address: 2345,
  //        receiver_address: 'receiver_address'
