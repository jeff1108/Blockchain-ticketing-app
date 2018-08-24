import React, { Component } from 'react';

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

    fetch('http://localhost:9292/blocks/create', {
      method: 'POST',
      body: JSON.stringify( { "params": {"sender": "000000000", "receiver": "000000000", "value": 1} } ),
    });
  }

  render() {
    return (
      <div>
      <h2>ALL TICKETS</h2>
      <form onSubmit={this.handleSubmit}>

        <label htmlFor="concert_name">Concert:</label>
        <h4 id="concert_name" name="concert_name" >{this.state.concert1.name}</h4>

        <label htmlFor="concert_description">Description:</label>
        <h4 id="concert_description" name="concert_description" >{this.state.concert1.description}</h4>

        <label htmlFor="concert_price">Price:</label>
        <h4 id="concert_price" name="concert_price" >{this.state.concert1.price}</h4>

        <button>Sumbit!</button>
      </form>
      </div>
    );
  }
}


export default App;
