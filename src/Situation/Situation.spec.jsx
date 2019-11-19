/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { shallow } from 'enzyme';
import Situation from './index';

describe('Situation', () => {
  const handleUpdateStateValue = jest.fn();
  const wrapper = shallow(
    <Situation
      hipFire={false}
      rifleOneHand={false}
      pistolOneHand={false}
      foldedStock={false}
      bipodNotBraced={false}
      bipodMount={false}
      handleUpdateStateValue={handleUpdateStateValue}
    />
  );
  beforeEach(() => {
    handleUpdateStateValue.mockClear();
  });
  it('should have hip fire checkbox', () => {
    wrapper.find('.hipFire').simulate('click');
    expect(handleUpdateStateValue).toHaveBeenLastCalledWith('hipFire', true);
    wrapper.setProps({ hipFire: true });
    expect(wrapper.find('.hipFire').hasClass('active')).toBe(true);
  });
  it('should have firing rifle one handed checkbox', () => {
    wrapper.find('.rifleOneHand').simulate('click');
    expect(handleUpdateStateValue).toHaveBeenLastCalledWith(
      'rifleOneHand',
      true
    );
    wrapper.setProps({ rifleOneHand: true });
    expect(wrapper.find('.rifleOneHand').hasClass('active')).toBe(true);
  });
  it('should have firing pistol one handed checkbox', () => {
    wrapper.find('.pistolOneHand').simulate('click');
    expect(handleUpdateStateValue).toHaveBeenLastCalledWith(
      'pistolOneHand',
      true
    );
    wrapper.setProps({ pistolOneHand: true });
    expect(wrapper.find('.pistolOneHand').hasClass('active')).toBe(true);
  });
  it('should have folding stock not used checkbox', () => {
    wrapper.find('.foldedStock').simulate('click');
    expect(handleUpdateStateValue).toHaveBeenLastCalledWith(
      'foldedStock',
      true
    );
    wrapper.setProps({ foldedStock: true });
    expect(wrapper.find('.foldedStock').hasClass('active')).toBe(true);
  });
  it('should have bipod not braced checkbox', () => {
    wrapper.find('.bipodNotBraced').simulate('click');
    expect(handleUpdateStateValue).toHaveBeenLastCalledWith(
      'bipodNotBraced',
      true
    );
    wrapper.setProps({ bipodNotBraced: true });
    expect(wrapper.find('.bipodNotBraced').hasClass('active')).toBe(true);
  });
  it('should have bipod checkbox', () => {
    wrapper.find('.bipodMount').simulate('click');
    expect(handleUpdateStateValue).toHaveBeenLastCalledWith('bipodMount', true);
    wrapper.setProps({ bipodMount: true });
    expect(wrapper.find('.bipodMount').hasClass('active')).toBe(true);
  });
});
