import React from 'react'
import App from './App'

import { shallow } from 'enzyme'


describe('app component', () => {
  it('renders the App title', () => {
      const wrapper = shallow(<App />)
      const text = wrapper.find('h2').text()
      expect(text).toEqual('Concert Search');
  });

  // it('show concert name', () => {
  //   const wrapper = shallow(<App />)
  //   const concert = wrapper.state().concert1.name
  //   expect(concert).toEqual("Bruno Mars")
  // });
  //
  // it('show concert name in the form', () => {
  //   const wrapper = shallow(<App />)
  //   const text = wrapper.find('h4').first().text()
  //   expect(text).toEqual("Bruno Mars")
  // });
  //
  // it('renders a buy button', () => {
  //   const wrapper = shallow(<App />)
  //   const button = wrapper.find('button').text()
  //   expect(button).toEqual('Buy!')
  // });
});
