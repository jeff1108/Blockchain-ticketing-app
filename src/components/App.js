import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Concerts from './Concerts';

class App extends Component {
  state = {
    concerts: [
      {
        id: 1,
        name: "Bruno Mars",
        description: "Lanuch in Hong Kong 2018",
        price: "£100"
      },
      {
        id: 2,
        name: "Justin Bieber",
        description: "Lanuch in Hong Kong 2018",
        price: "£100"
      }
    ]
  }

  getConcert = () => {

  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h2 className='App-title'>Concert Search</h2>
        </header>

        <Concerts concerts={this.state.concerts} />
      </div>
    );
  }
}

export default App;


// handleSubmit(event) {
//   event.preventDefault();
//   const data = new FormData(event.target);
//
//   fetch('/api/form-submit-url', {
//     method: 'POST',
//     body: data,
//   });
// }


// <div>
// <h2>ALL TICKETS</h2>
// <form onSubmit={this.handleSubmit}>
//
//   <label htmlFor="concert_name">Concert:
//     <h4>{this.state.concert1.name}</h4>
//   </label>
//   <label htmlFor="concert_description">Description:
//     <h4>{this.state.concert1.description}</h4>
//   </label>
//   <label htmlFor="concert_price">Price:
//     <h4>{this.state.concert1.price}</h4>
//   </label>
//   <button>Buy!</button>
// </form>
// </div>
