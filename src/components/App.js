import React, { Component } from 'react';
import Concerts from './Concerts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      concerts: [
        {
          id: 1,
          name: 'Bruno Mars',
          description: 'Lanuch in Hong Kong 2018',
          price: '50'
        },
        {
          id: 2,
          name: 'Justin Bieber',
          description: 'Lanuch in Hong Kong 2018',
          price: '100'
        }
      ]
    };
  }


  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h2 className='App-title'>Checkout concerts in your area:</h2>
        </header>
        {
          this.state.concerts.map((concert, index) => {
            return (
              <Concerts key={index} concert={concert} />
            );
          })
        }

      </div>
    );
  }
}


export default App;
