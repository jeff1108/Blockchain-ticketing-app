import React from 'react';
import { mount } from 'enzyme';
import Form from './Form';

describe('Form', () => {
    const form = mount(<Form />);
    it('renders the submit button', () => {
        expect(address_form.find('form').text()).toEqual('Submit');
    });
    it('renders the form on the page', () => {
      expect(address_form.find('form').text()).toContain('First name')
    });
});
