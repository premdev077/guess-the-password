import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Renders <App />', () => {
  // smoke test
  it('Renders without crashing', () => {
    shallow(<App />);
  });
});