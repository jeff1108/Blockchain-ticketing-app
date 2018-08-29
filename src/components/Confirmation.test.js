import React from 'react';
import Confirmation from './Confirmation';
import { mount } from 'enzyme';

describe('Confirmation', () => {
  const wrapper = mount(<Confirmation />);
  it('displays a success page', () => {
    expect(wrapper.find('p').at(0).text()).toEqual('Thank you for your purchase, your ticket will be sent to your email')
  });
});
