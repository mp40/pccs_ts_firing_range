/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { shallow } from 'enzyme';
import Shooter from './index';

describe('Shooter', () => {
  const wrapper = shallow(<Shooter />);
  it('should start displaying M1 Carbine as default weapon', () => {
    expect(wrapper.text()).toContain('M1 Carbine');
  });
  it('should start with default shooting level of 0', () => {
    expect(wrapper.find('.selectLevel').props().value).toBe(0);
  });
  it('should show the weapons aim time mods', () => {
    expect(wrapper.find('.aimTime').text()).toContain('1-21');
    expect(wrapper.find('.aimTime').text()).toContain('110');
  });
  it('should be possible to change shooting level', () => {
    wrapper.find('.selectLevel').simulate('change', { target: { value: 4 } });
    expect(wrapper.find('.selectLevel').props().value).toBe(4);
  });
  it('should update aim time mod when level is changed', () => {
    expect(wrapper.find('.aimTime').text()).toContain('1-11');
    expect(wrapper.find('.aimTime').text()).toContain('1110');
  });
  it('should be possible to select an aim time', () => {
    wrapper
      .find('.aimTimeRow')
      .at(2)
      .simulate('click');
    expect(
      wrapper
        .find('.aimTimeRow')
        .at(2)
        .hasClass('selected')
    ).toBe(true);
  });
});
