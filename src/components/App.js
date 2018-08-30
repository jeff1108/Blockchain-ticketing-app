import Main from './Main';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import css from '../style/app.css';

export class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='App-header'>
          <a href='/'>
            <div className='header-text'>
              <h1>✔ ticketchain</h1>
            </div>
          </a>
          <div className='header-links'>
            <a href='/'>BUY TICKETS</a>
            <a href='https://blockheads-backend.herokuapp.com/' id='space-left-link'>VIEW BLOCKCHAIN</a>
          </div>
        </div>
        <div className='content'>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </div>
        <div className='App-footer'>
          <a href='https://www.songkick.com/'>
            <div className='footer-container'>
              <div className='credits'>Concert information powered</div>
              <div className='songkick_logo'>
                <img width={150} alt='Powered by Songkick' src={require('../images/by-songkick-pink.png')} />
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
