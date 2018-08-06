import React from 'react';
import { shallow } from 'enzyme';
import QueryForm from './QueryForm';

it('renders without crashing', () => {
  shallow(<QueryForm />);
});
