import React from 'react';
import Concert from './Concert';
import { mount } from 'enzyme';
import { concert } from '../data/fixtures';


const props = { concert };

describe('concerts component', () => {
  let event = mount(<Concert {...props} />);
  it('renders a concert name', () => {
    expect(event.find('p').at(0).text()).toEqual(concert.displayName);
  });

  it('render a concert location', () => {
    expect(event.find('p').at(1).text()).toEqual(concert.location.city);
  });

  it('render a concert date', () => {
    expect(event.find('p').at(2).text()).toEqual(concert.start.date);
  });
});
