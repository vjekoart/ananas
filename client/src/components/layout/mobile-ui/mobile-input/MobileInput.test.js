import React from 'react';
import { shallow } from 'enzyme';
import MobileInput from './MobileInput';

it('renders without crashing', () => {
  shallow(<MobileInput />);
});
