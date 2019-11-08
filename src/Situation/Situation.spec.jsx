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
    expect(
      wrapper
        .find('.hipFire')
        .find('input')
        .props().checked
    ).toBe(true);
  });
  it('should have firing rifle one handed checkbox', () => {
    wrapper
      .find('.rifleOneHand')
      .find('input')
      .simulate('change', { target: { value: true } });
    expect(
      wrapper
        .find('.rifleOneHand')
        .find('input')
        .props().checked
    ).toBe(true);
  });
  it('should have firing pistol one handed checkbox', () => {
    wrapper
      .find('.pistolOneHand')
      .find('input')
      .simulate('change', { target: { value: true } });
    expect(
      wrapper
        .find('.pistolOneHand')
        .find('input')
        .props().checked
    ).toBe(true);
  });
  it('should have folding stock not used checkbox', () => {
    wrapper
      .find('.foldedStock')
      .find('input')
      .simulate('change', { target: { value: true } });
    expect(
      wrapper
        .find('.foldedStock')
        .find('input')
        .props().checked
    ).toBe(true);
  });
});
