import React from 'react';
import Confirmation from './Confirmation';
import { mount } from 'enzyme';

describe('Confirmation', () => {
  const wrapper = mount(<Confirmation />);
  it('displays a success page', () => {
    expect(wrapper.find('h2').at(0).text()).toEqual('Your ticket is on the chain!');
  });
});
