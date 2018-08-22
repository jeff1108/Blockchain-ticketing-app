import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Enter username</label>
        <input id="username" name="username" type="text" />

        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="birthdate">Enter your birth date</label>
        <input id="birthdate" name="birthdate" type="text" />

        <button>Send data!</button>
      </form>
    );
  }
}

export default App;

//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }





  // handleClick() {
  //   fetch('https://localhost:9292', {
  //      method: 'POST',
  //      headers: {
  //        'Accept': 'application/json',
  //        'Content-Type': 'application/json',
  //      },
  //      body: JSON.stringify({
  //        concert_name: 'Conert_name',
  //        price: 16,
  //        description: 'hello',
  //        sender_id: 1234,
  //        sender_address: 'seller@gmail.com',
  //        receiver_address: 2345,
  //        receiver_address: 'receiver_address'
  //      })
  //   })
  // }




//   render() {
//       return (
//         <div>
//           <div>
//             <h1>Ticket Master</h1>
//           </div>
//           <hr />
//           <div>
//               <h4>Concert Name: Justin Bieber</h4>
//               <h4>Description: Concert in London</h4>
//               <h4>Price: Adult £15 </h4>
//           </div>
//           <div align='right'>
//               <button onClick={this.handleClick}>Submit</button>
//           </div>
//           <hr />
//           <div>
//               <h4>Concert Name: Justin Bieber</h4>
//               <h4>Description: Concert in London</h4>
//               <h4>Price: Adult £15 </h4>
//           </div>
//           <div align='right'>
//               <button>Submit</button>
//           </div>
//           <hr />
//         </div>
//       );
//   }
// }
