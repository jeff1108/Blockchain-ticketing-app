import React from 'react';
import Concert from './Concert';
import { mount } from 'enzyme';
import { concert, details } from '../data/fixtures';
import { fakeServer } from 'sinon';

const props = { concert };

describe('concerts component', () => {
  let event = mount(<Concert {...props} />);
  it('renders a concert name', () => {
    expect(event.find('p').at(0).text()).toEqual(`Concert: ${concert.displayName}`);
  });

  it('render a concert location', () => {
    expect(event.find('p').at(1).text()).toEqual(`Location: ${concert.location.city}`);
  });

  it('render a concert date in the correct format', () => {
    expect(event.find('p').at(2).text()).toEqual('Date: 8/31/2018');
  });

  it('render a concert price', () => {
    expect(event.find('p').at(3).text()).toEqual('Price: 217');
  });
});
