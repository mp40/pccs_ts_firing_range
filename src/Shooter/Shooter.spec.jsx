/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { shallow } from 'enzyme';
import Shooter from './index';

describe('Shooter', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Shooter />);
  });
  it('should start displaying M1 Carbine as default weapon', () => {
    expect(wrapper.text()).toContain('M1 Carbine');
  });
  it('should start with default shooting level of 0', () => {
    expect(wrapper.text()).toContain('Shooter Level: 0');
  });
  it('should show the weapons aim time mods', () => {
    expect(wrapper.find('.aimTime').text()).toContain('1-21');
    expect(wrapper.find('.aimTime').text()).toContain('110');
  });
  it('should be possible to change shooting level', () => {
    wrapper.find('.levelButton').simulate('click');
    wrapper
      .find('.levelBtns')
      .at(4)
      .simulate('click');
    expect(wrapper.text()).toContain('Shooter Level: 4');
  });
  it('should update aim time mod when level is changed', () => {
    wrapper.find('.levelButton').simulate('click');
    wrapper
      .find('.levelBtns')
      .at(4)
      .simulate('click');
    expect(wrapper.find('.aimTime').text()).toContain('1-11');
    expect(wrapper.find('.aimTime').text()).toContain('1110');
  });
  it('should be possible to select an aim time', () => {
    wrapper.find('.aimButton').simulate('click');
    wrapper
      .find('.aimBtns')
      .at(2)
      .simulate('click');
    expect(
      wrapper
        .find('.aimTimeRow')
        .at(2)
        .hasClass('selected')
    ).toBe(true);
  });
  it('should display the weapon recoil recovery', () => {
    expect(wrapper.text()).toContain('Recoil Recovery: 2');
  });
  it('should update recoil recovery on level change', () => {
    wrapper.find('.levelButton').simulate('click');
    wrapper
      .find('.levelBtns')
      .at(4)
      .simulate('click');
    expect(wrapper.text()).toContain('Recoil Recovery: 1');
  });
  it('should not be possible to toggle aim selection on when level selection is toggled', () => {
    wrapper.find('.levelButton').simulate('click');
    wrapper.find('.aimButton').simulate('click');
    expect(wrapper.find('.levelBtns').length).toBe(6);
    expect(wrapper.find('.aimBtns').length).toBe(0);
  });
  it('should not be possible to toggle level selection on when aim selection is toggled', () => {
    wrapper.find('.aimButton').simulate('click');
    wrapper.find('.levelButton').simulate('click');
    expect(wrapper.find('.aimBtns').length).toBe(11);
    expect(wrapper.find('.levelBtns').length).toBe(0);
  });
});
