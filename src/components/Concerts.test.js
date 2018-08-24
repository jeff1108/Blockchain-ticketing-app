import React from 'react';
import Concerts from './Concerts';

import { mount } from 'enzyme';

const props = { concert: { id: 1, name: 'Bruno Mars', description: 'Lanuch in Hong Kong 2018', price: '£100' } };

describe('concerts component', () => {
  let concert = mount(<Concerts {...props} />);
  it('renders a concert name', () => {
    expect(concert.find('p').at(0).text()).toEqual(props.concert.name);
  });

  it('renders a concert price', () => {
    expect(concert.find('p').at(1).text()).toEqual(props.concert.price);
  });

  it('renders a button', () => {
    expect(concert.find('.btn').at(0).text()).toEqual('Buy!');
  });
});
