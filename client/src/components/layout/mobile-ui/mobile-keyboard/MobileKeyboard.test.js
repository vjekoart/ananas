import React from 'react';
import { shallow } from 'enzyme';
import MobileKeyboard from './MobileKeyboard';

it('renders without crashing', () => {
  shallow(<MobileKeyboard />);
});
