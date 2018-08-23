import React from 'react'
import App from './App'

import { shallow } from 'enzyme'


describe('app component', () => {
    it('renders the App title', () => {
        const wrapper = shallow(<App />)
        const text = wrapper.find('h2').text()
        expect(text).toEqual('ALL TICKETS');
    });












});
