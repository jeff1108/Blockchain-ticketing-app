import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import { concerts } from '../data/fixtures';
import { fakeServer } from 'sinon';

const props = { concert: concerts[0] };
const callUrl = '/api/3.0/metro_areas/24426/calendar.json?apikey=$123&=min_date=2018-08-31&per_page=10';


describe('app component', () => {
  var server = fakeServer.create();
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

  it('renders the App title', () => {
    let app = mount(<App {...props} />);
    let text = app.find('h2').text();
    expect(text).toEqual('Checkout concerts in your area:');
  });
});
