import React from 'react';
import { shallow } from 'enzyme';
import QueryApi from './QueryApi';

it('renders without crashing', () => {
  shallow(<QueryApi />);
});
