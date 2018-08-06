import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('renders without crashing', () => {
  shallow(<Footer />);
});

it('renders footer link', () => {
  const wrapper = shallow(<Footer />);
  const footerLink = <a target="_blank" href="https://github.com/vjekoart/ananas/" rel="noopener noreferrer">GitHub repository</a>;

  expect(wrapper.contains(footerLink)).toEqual(true);
});
