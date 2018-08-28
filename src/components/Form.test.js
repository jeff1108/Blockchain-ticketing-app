import React from 'react';
import { mount } from 'enzyme';
import Form from './Form';
import { BrowserRouter as Router } from 'react-router-dom';

app= shallow(
    <Router>
        <App />
    </Router>);

describe('Form', () => {
    const form = mount(<Form />);
    it('renders the submit button', () => {
        expect(form.find('form').text()).toEqual('Submit');
    });
    it('renders the form on the page', () => {
      expect(form.find('form').text()).toContain('First name')
    });
});
