import React from 'react';
import { shallow, mount } from 'enzyme';
import PasswordList from './PasswordList';

const lists = [
  {
    data: ['4', '1', '2', '3', '5', '8', '9', '0',],
    highlight: ['5', '6'],
    isCorrect: false
  },
  {
    data: ['4', '1', '2', '3', '5', '8', '9', '0',],
    highlight: ['5', '6'],
    isCorrect: false
  }
];


describe('<Progress />', () => {
  // smoke test
  it('Renders without crashing', () => {
    shallow(<PasswordList lists={lists} />);
  });

  // check props
  it('Renders with correct props', () => {
    const attempt = 'dummy-attempt';
    const guessList = 'dummy-guessList';
    const wrapper = mount(<PasswordList lists={lists} />);

    expect(wrapper.find('h2').contains('dummy-attempt')).toEqual(false);

    expect(wrapper.find('ul').contains('dummy-guessList')).toEqual(false);
  });
});