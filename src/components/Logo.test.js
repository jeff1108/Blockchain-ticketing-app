import React from 'react';
import Logo from './Logo';
import { mount } from 'enzyme';

describe('Logo', () => {
  it('renders a footer with credits and API logo', () => {
    let logo = mount(<Logo />);
    expect(logo.exists('.App-footer')).toEqual(true);
    expect(logo.exists('.credits')).toEqual(true);
    expect(logo.exists('.songkick_logo')).toEqual(true);
  });
});
