import React from 'react'
import Concerts from './Concerts'

import { mount, shallow, render } from 'enzyme'

const props = { concert: { id: 1, name: 'Bruno Mars', description: 'Lanuch in Hong Kong 2018', price: '£100' } }

describe('concerts component', () => {

    it('renders a concert name', () => {
      let concert = mount(<Concerts {...props} />)
      expect(concert.find('p').at(0).text()).toEqual(props.concert.name)
    });

    it('renders a concert price', () => {
      let concert = mount(<Concerts {...props} />)
      expect(concert.find('p').at(1).text()).toEqual(props.concert.price)
    });
});
