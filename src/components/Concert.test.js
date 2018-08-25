import React from 'react';
import Concert from './Concert';
import { mount } from 'enzyme';
import { concert } from '../data/fixtures';


const props = { concert }

describe('concerts component', () => {
  console.log(concert.displayName)
  let event = mount(<Concert {...props} />);
  it('renders a concert name', () => {
    expect(event.find('p').at(0).text()).toEqual(concert.displayName);
  });
});
