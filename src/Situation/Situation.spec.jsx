/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { shallow } from 'enzyme';
import Situation from './index';

describe('Situation', () => {
  const wrapper = shallow(<Situation />);
  it('should have hip fire checkbox', () => {
    wrapper.find('.hipFire').simulate('click');
    expect(wrapper.find('.hipFire').hasClass('active')).toBe(true);
  });
  it('should have firing rifle one handed checkbox', () => {
    wrapper.find('.rifleOneHand').simulate('click');
    expect(wrapper.find('.rifleOneHand').hasClass('active')).toBe(true);
  });
  it('should have firing pistol one handed checkbox', () => {
    wrapper.find('.pistolOneHand').simulate('click');
    expect(wrapper.find('.pistolOneHand').hasClass('active')).toBe(true);
  });
  it('should have folding stock not used checkbox', () => {
    wrapper.find('.foldedStock').simulate('click');
    expect(wrapper.find('.foldedStock').hasClass('active')).toBe(true);
  });
  it('should have bipod not braced checkbox', () => {
    wrapper.find('.bipodNotBraced').simulate('click');
    expect(wrapper.find('.bipodNotBraced').hasClass('active')).toBe(true);
  });
  it('should have bipod checkbox', () => {
    wrapper.find('.bipodMount').simulate('click');
    expect(wrapper.find('.bipodMount').hasClass('active')).toBe(true);
  });
});
