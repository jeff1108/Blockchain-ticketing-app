import React from 'react';
import App from './App';
import { mount } from 'enzyme';

describe('App', () => {
  it('renders a footer with credits and API logo', () => {
    let app = mount(<App />);
    expect(app.exists('.App-footer')).toEqual(true);
    expect(app.exists('.credits')).toEqual(true);
    expect(app.exists('.songkick_logo')).toEqual(true);
  });
});
