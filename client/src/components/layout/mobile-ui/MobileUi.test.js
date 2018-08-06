import React from 'react';
import { shallow } from 'enzyme';
import MobileUi from './MobileUi';

it('renders without crashing', () => {
  shallow(<MobileUi />);
});
