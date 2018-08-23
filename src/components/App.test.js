import React from 'react'
import App from './App'

import { shallow } from 'enzyme'


describe('app component', () => {
  it('renders the App title', () => {
      const wrapper = shallow(<App />)
      const text = wrapper.find('h2').text()
      expect(text).toEqual('Concert Search');
  });

  it('record concert name', () => {
    const wrapper = shallow(<App />)
    const text = wrapper.state().concerts[0].name
    expect(text).toEqual('Bruno Mars')
  });

  it('record concert price', () => {
    const wrapper = shallow(<App />)
    const text = wrapper.state().concerts[0].price
    expect(text).toEqual('£100')
  });

  // it('renders a buy button', () => {
  //   const wrapper = shallow(<App />)
  //   const button = wrapper.find('button').text()
  //   expect(button).toEqual('Buy!')
  // });
});
