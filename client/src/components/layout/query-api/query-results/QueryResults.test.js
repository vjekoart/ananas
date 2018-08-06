import React from 'react';
import { shallow } from 'enzyme';
import QueryResults from './QueryResults';

it('renders without crashing', () => {
  shallow(<QueryResults />);
});
