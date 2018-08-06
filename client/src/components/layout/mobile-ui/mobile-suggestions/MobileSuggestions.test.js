import React from 'react';
import { shallow } from 'enzyme';
import MobileSuggestions from './MobileSuggestions';

it('renders without crashing', () => {
  shallow(<MobileSuggestions />);
});
