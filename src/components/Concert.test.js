import React from 'react';
import Concert from './Concert';
import { mount } from 'enzyme';
import { concert } from '../data/fixtures';


const props = { concert };

describe('concerts component', () => {
  let event = mount(<Concert {...props} />);
  it('renders a concert name', () => {
    expect(event.find('p').at(0).text()).toEqual(`Concert: ${concert.displayName}`);
  });

  it('render a concert location', () => {
    expect(event.find('p').at(1).text()).toEqual(`Location: ${concert.location.city}`);
  });

  it('render a concert date', () => {
    expect(event.find('p').at(2).text()).toEqual(`Date: ${concert.start.date}`);
  });

  it('render a concert price', () => {
    expect(event.find('p').at(3).text()).toEqual('Price: 217');
  });
});
