import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import { concerts } from '../data/fixtures';
import { fakeServer } from 'sinon';

const props = { concert: concerts[0] };

describe('app component', () => {
  beforeEach(() => {
    const server = fakeServer.create();

    server.respondWith(
      'GET',
      'https://api.songkick.com/api/3.0/metro_areas/24426/calendar.json?apikey=$123&=min_date=2018-08-31&per_page=10',
      [
        200,
        {'Content-Type': 'application/json' },
        JSON.stringify(concerts)
      ]
    );
  });

  describe('when creating a new concerts', () => {

    it('renders the App title', () => {
      const app = mount(<App {...props} />);
      const text = app.find('h2').text();
      expect(text).toEqual('Checkout concerts in your area:');
    });
  });
});
