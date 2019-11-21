import React from 'react';
import { shallow } from 'enzyme';
import Shooting from './index';

describe('the shooting page', () => {
  const levelAndAimTimeModifier = 1;
  const rangeModifier = 3;
  const stanceModifier = 4;
  const situationModifier = 7;
  const targetModifier = 6;
  const wrapper = shallow(
    <Shooting
      levelAndAimTimeModifier={levelAndAimTimeModifier}
      rangeModifier={rangeModifier}
      stanceModifier={stanceModifier}
      situationModifier={situationModifier}
      targetModifier={targetModifier}
    />
  );
  it('should display the level and aim time modifier', () => {
    expect(wrapper.text()).toContain('Level and Aims Mod:1');
  });
  it('should display the range modifier', () => {
    expect(wrapper.text()).toContain('Range Mod:3');
  });
  it('should display the stance modifier', () => {
    expect(wrapper.text()).toContain('Stance Mod:4');
  });
  it('should display the situation modifier', () => {
    expect(wrapper.text()).toContain('Situation Mod:7');
  });
  it('should display the target size modifier', () => {
    expect(wrapper.text()).toContain('Target Size Mod:6');
  });
  it('should display the chance to hit', () => {
    expect(wrapper.text()).toContain('Odds Of Hitting:74% or less');
  });
  it('should display 0% chance without "or less"', () => {
    wrapper.setProps({
      levelAndAimTimeModifier: 0,
      rangeModifier: 0,
      stanceModifier: 0,
      situationModifier: 0,
      targetModifier: -2
    });
    expect(wrapper.text()).toContain('Odds Of Hitting:0%');
    expect(wrapper.text()).not.toContain('0% or less');
  });
  it('should display "Auto Miss" when shot is not possible', () => {
    wrapper.setProps({
      levelAndAimTimeModifier: 0,
      rangeModifier: 0,
      stanceModifier: 0,
      situationModifier: 0,
      targetModifier: -3
    });
    expect(wrapper.text()).toContain('Auto Miss');
  });
  it('should display 99% when mods are 28 or aboce', () => {
    wrapper.setProps({
      levelAndAimTimeModifier: 0,
      rangeModifier: 0,
      stanceModifier: 0,
      situationModifier: 0,
      targetModifier: 29
    });
    expect(wrapper.text()).toContain('Odds Of Hitting:99% or less');
  });
});
