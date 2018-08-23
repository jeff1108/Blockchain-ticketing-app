import React from 'react'
import App from './App'

import { shallow } from 'enzyme'


describe('app component', () => {
    it('renders the App title', () => {
        const wrapper = shallow(<App />)
        const text = wrapper.find('h2').text()
        expect(text).toEqual('ALL TICKETS');
    });

    it('show concert name', () => {
      const wrapper = shallow(<App />)
      const concert = wrapper.state().concert1.name
      expect(concert).toEqual("Bruno Mars")
    });

    it('show concert name in the form', () => {
      const wrapper = shallow(<App />)
      const text = wrapper.find('h4').first().text()
      expect(text).toEqual("Bruno Mars")
    });

    // it('renders button when clicks ', () => {
    //   const wrapper = shallow(<App />)
    //   const button = wrapper.find('button')
    //   button.simulate('click')
    //   const text = wrapper.find('p').text()
    //   expect(text).toEqual('Thank you for buying this ticket')
    // });

  

});
