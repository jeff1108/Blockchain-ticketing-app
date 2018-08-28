import React from 'react';
import Tickets from './TIckets';
import { mount } from 'enzyme';
import { concerts } from '../data/fixtures';
import { fakeServer } from 'sinon';

const props = { concert: concerts[0] };

describe('ticket component', () => {
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

    it('renders the ticket title', () => {
      const ticket = mount(<Tickets {...props} />);
      const text = ticket.find('h2').text();
      expect(text).toEqual('Checkout concerts in your area:');
    });
  });
});
