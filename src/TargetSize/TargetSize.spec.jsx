/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { shallow } from 'enzyme';
import TargetSize from './index';

const targetInputPosition = (wrapper, position) => {
  return wrapper
    .find('.selectTargetSize')
    .find('input')
    .at(position);
};

describe('Stance', () => {
  const wrapper = shallow(<TargetSize />);
  it('should start with default stance of "standing exposed"', () => {
    expect(targetInputPosition(wrapper, 0).props().checked).toBe(true);
    expect(targetInputPosition(wrapper, 1).props().checked).toBe(false);
    expect(targetInputPosition(wrapper, 2).props().checked).toBe(false);
  });
  it('should be possible to change to "kneeling"', () => {
    const kneelingButton = targetInputPosition(wrapper, 1);
    kneelingButton.simulate('change', { target: { value: 'kneeling' } });
    expect(targetInputPosition(wrapper, 0).props().checked).toBe(false);
    expect(targetInputPosition(wrapper, 1).props().checked).toBe(true);
    expect(targetInputPosition(wrapper, 2).props().checked).toBe(false);
  });
  it('should be possible to change to "prone"', () => {
    const proneButton = targetInputPosition(wrapper, 2);
    proneButton.simulate('change', { target: { value: 'prone' } });
    expect(targetInputPosition(wrapper, 0).props().checked).toBe(false);
    expect(targetInputPosition(wrapper, 1).props().checked).toBe(false);
    expect(targetInputPosition(wrapper, 2).props().checked).toBe(true);
  });
  it('should be possible to change to "look over"', () => {
    const lookOverButton = targetInputPosition(wrapper, 3);
    lookOverButton.simulate('change', { target: { value: 'lookOver' } });
    expect(targetInputPosition(wrapper, 3).props().checked).toBe(true);
  });
  it('should be possible to change to "fire over"', () => {
    const fireOverButton = targetInputPosition(wrapper, 4);
    fireOverButton.simulate('change', { target: { value: 'fireOver' } });
    expect(targetInputPosition(wrapper, 4).props().checked).toBe(true);
  });
  it('should be possible to change to "running"', () => {
    const runningButton = targetInputPosition(wrapper, 5);
    runningButton.simulate('change', { target: { value: 'running' } });
    expect(targetInputPosition(wrapper, 5).props().checked).toBe(true);
  });
  it('should be possible to change to "low crouch"', () => {
    const crouchButton = targetInputPosition(wrapper, 6);
    crouchButton.simulate('change', { target: { value: 'crouch' } });
    expect(targetInputPosition(wrapper, 6).props().checked).toBe(true);
  });
});
