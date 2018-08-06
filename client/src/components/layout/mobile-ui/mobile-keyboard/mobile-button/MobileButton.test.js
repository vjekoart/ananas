import React from 'react';
import { shallow } from 'enzyme';
import MobileButton from './MobileButton';

it('renders without crashing', () => {
  shallow(<MobileButton />);
});
