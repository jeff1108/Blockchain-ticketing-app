import React from 'react';

import { mount } from 'enzyme';
import App from './App';

const app = mount(<App />);

describe('App', () => {
    it('renders the App title', () => {
    // console.log(app.debug());
        expect(app.find('h2').text()).toEqual(' ALL TICKETS ');
    });

    describe('when rendering the form', () => {
      it('should call onSubmit', () => {
        // expect(app.find('form').exists()).toBe(true)
        expect(app.find('form').exists()).toBe(true);

      });
    });
});
