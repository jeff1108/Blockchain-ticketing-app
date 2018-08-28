import React from 'react';
import Tickets from './Tickets';
import { mount } from 'enzyme';
import { concerts } from '../data/fixtures';
import { fakeServer } from 'sinon';

const callUrl = '/api/3.0/metro_areas/24426/calendar.json?apikey=$123&=min_date=2018-08-31&per_page=10';


describe('ticket component', () => {
  let location= {
    state: {
      userDetails:
              {
                firstName: 'firstName',
                lastName: 'lastName',
                email: 'email'
              }
    }
  };
  let ticket = mount(<Tickets location={location}/>);
  let server = fakeServer.create();
  beforeEach(() => {
    server.respondWith(
      'GET',
      callUrl,
      [
        200,
        {'Content-Type': 'application/json' },
        JSON.stringify(concerts)
      ]
    );
  });

  it('fetch the song api', (done) => {
    fetch(callUrl, {method: 'GET'}).then(response => {
      expect(response.status).toEqual(200);
      done();
    });
    server.respond();
  });

  it('renders the ticket title', () => {
    let text = ticket.find('h3').at(0).text();
    expect(text).toEqual('Checkout concerts in your area:');
  });

  it('renders displays users firs and last name', () => {
    let text = ticket.find('h2').at(0).text();
    expect(text).toEqual('Welcome firstName lastName');
  });
});
