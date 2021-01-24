import React from 'react';
import {shallow} from 'enzyme';
import FindPassword from './index';

describe('<FindPassword />', () => {
  // smoke test
  it('Renders without crashing', () => {
    shallow(<FindPassword />);
  });
});
