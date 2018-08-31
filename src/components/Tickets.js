import React, { Component } from 'react';
import Concert from './Concert';

const API_KEY = 'btZu4eInD0uJ4SPK';
const DATE = new Date().toISOString().slice(0,10);

class Tickets extends Component {
  constructor() {
    super();
    this.state = {
      concerts: []
    };
  }

  componentDidMount() {
    fetch(`https://api.songkick.com/api/3.0/metro_areas/24426/calendar.json?apikey=${API_KEY}&=min_date=${DATE}&per_page=12`)
      .then(response => response.json())
      .then(json => {this.setState({concerts: json.resultsPage.results.event});
      });
  }

  render() {
    const firstName = this.props.location.state.userDetails.firstName;
    const lastName = this.props.location.state.userDetails.lastName;
    return (
      <div className='App'>
        <div className='concerts-container'>
          <h2>Welcome {firstName} {lastName}</h2>
          <h3 className='App-title'>Check out concerts in your area</h3>
          {
            this.state.concerts.map((concert, index) => {
              return (
                <Concert key={index} concert={concert} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Tickets;
