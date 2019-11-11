/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { shallow } from 'enzyme';
import Range from './index';

describe('Range', () => {
  const wrapper = shallow(<Range />);
  it('should start with a default range of 1', () => {
    expect(wrapper.find('.rangeDropdown').props().value).toBe(1);
  });
  it('should be possible to change range', () => {
    wrapper.find('.rangeDropdown').simulate('change', { target: { value: 11 } });
    expect(wrapper.find('.rangeDropdown').props().value).toBe(11);
  });
});
