/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { shallow } from 'enzyme';
import Situation from './index';

describe('Situation', () => {
  const wrapper = shallow(<Situation />);
  it('should have hip fire checkbox', () => {
    wrapper
      .find('.hipFire')
      .find('input')
      .simulate('change', { target: { value: true } });
  });
  expect(
    wrapper
      .find('.hipFire')
      .find('input')
      .props().checked
  ).toBe(true);
});
