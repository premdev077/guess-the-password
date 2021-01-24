import React from 'react';
import { shallow, mount } from 'enzyme';
import PasswordList from './PasswordList';

describe('<Progress />', () => {
  // smoke test
  it('Renders without crashing', () => {
    shallow(<PasswordList />);
  });

  // check props
  it('Renders with correct props', () => {
    const attempt = 'dummy-attempt';
    const guessList = 'dummy-guessList';
    const wrapper = mount(<PasswordList attempt={attempt} guessList={guessList}/>);

    expect(wrapper.find('h2').contains('dummy-attempt')).toEqual(true);

    expect(wrapper.find('ul').contains('dummy-guessList')).toEqual(true);
  });
});