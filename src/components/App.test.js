import React from 'react';
import App from './App';

import { shallow } from 'enzyme';


describe('app component', () => {
  it('renders the App title', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('h2').text();
    expect(text).toEqual('Checkout concerts in your area:');
  });

  it('record concert name', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.state().concerts[0].name;
    expect(text).toEqual('Bruno Mars');
  });

  it('record concert price', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.state().concerts[0].price;
    expect(text).toEqual('50');
  });
});
