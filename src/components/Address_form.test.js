import React from 'react';
import { mount } from 'enzyme';
import Address_form from './Address_form';

describe('Address_form', () => {
    const address_form = mount(<Address_form />);
    it('renders the submit button', () => {
        expect(address_form.find('form').text()).toEqual('Submit');
    });
    it('renders the form on the page', () => {
      expect(address_form.find('form').text()).toContain('First name')
    });
});
