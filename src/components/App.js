import React, { Component } from 'react';
import Concert from './Concert';
const API_KEY = 'btZu4eInD0uJ4SPK';
const DATE = new Date().toISOString().slice(0,10);

class App extends Component {
  constructor() {
    super();
    this.state = {
      concerts: []
    };
  }

  componentDidMount() {
    fetch(`https://api.songkick.com/api/3.0/metro_areas/24426/calendar.json?apikey=${API_KEY}&=min_date=${DATE}&per_page=10`)
      .then(response => response.json())
      .then(json => {this.setState({concerts: json.resultsPage.results.event});
      });
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
              <Concert key={index} concert={concert} />
            );
          })
        }
        <footer className='App-footer'>
          <div className='credits'>Credits go here</div>
          <div className='songkick_logo'>Logo goes here</div>
        </footer>
      </div>
    );
  }
}


export default App;
