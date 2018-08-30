import Main from './Main';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
        <footer className='App-footer'>
          <div className='credits'>A final group project at Makers Academy in August 2018.</div>
          <div className='songkick_logo'><img width={200} alt='Powered by Songkick' src={require('../images/by-songkick-pink.png')} /></div>
        </footer>
      </div>
    );
  }
}

export default App;
