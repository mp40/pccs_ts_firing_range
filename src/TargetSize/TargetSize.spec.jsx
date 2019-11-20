/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { mount } from 'enzyme';
import TargetSize from './index';

const targetInputPosition = (wrapper, position) => {
  return wrapper.find('.toggleSize').at(position);
};

describe('Target Size', () => {
  const handleUpdateStateValue = jest.fn();
  const wrapper = mount(
    <TargetSize
      targetSize={'standing'}
      handleUpdateStateValue={handleUpdateStateValue}
    />
  );
  beforeEach(() => {
    handleUpdateStateValue.mockClear();
  });
  it('should start with default stance of "standing exposed"', () => {
    expect(targetInputPosition(wrapper, 0).hasClass('active')).toBe(true);
    expect(targetInputPosition(wrapper, 1).hasClass('active')).toBe(false);
    expect(targetInputPosition(wrapper, 2).hasClass('active')).toBe(false);
  });
  it('should be possible to change to "kneeling"', () => {
    const kneelingButton = targetInputPosition(wrapper, 1);
    kneelingButton.simulate('click');
    expect(handleUpdateStateValue).toHaveBeenCalledWith(
      'targetSize',
      'kneeling'
    );
    wrapper.setProps({ targetSize: 'kneeling' });
    expect(targetInputPosition(wrapper, 0).hasClass('active')).toBe(false);
    expect(targetInputPosition(wrapper, 1).hasClass('active')).toBe(true);
    expect(targetInputPosition(wrapper, 2).hasClass('active')).toBe(false);
  });
  it('should be possible to change to "prone"', () => {
    const proneButton = targetInputPosition(wrapper, 2);
    proneButton.simulate('click');
    expect(handleUpdateStateValue).toHaveBeenCalledWith('targetSize', 'prone');
    wrapper.setProps({ targetSize: 'prone' });
    expect(targetInputPosition(wrapper, 0).hasClass('active')).toBe(false);
    expect(targetInputPosition(wrapper, 1).hasClass('active')).toBe(false);
    expect(targetInputPosition(wrapper, 2).hasClass('active')).toBe(true);
  });
  it('should be possible to change to "look over"', () => {
    const lookOverButton = targetInputPosition(wrapper, 3);
    lookOverButton.simulate('click');
    expect(handleUpdateStateValue).toHaveBeenCalledWith(
      'targetSize',
      'lookOver'
    );
    wrapper.setProps({ targetSize: 'lookOver' });
    expect(targetInputPosition(wrapper, 3).hasClass('active')).toBe(true);
  });
  it('should be possible to change to "fire over"', () => {
    const fireOverButton = targetInputPosition(wrapper, 4);
    fireOverButton.simulate('click');
    expect(handleUpdateStateValue).toHaveBeenCalledWith(
      'targetSize',
      'fireOver'
    );
    wrapper.setProps({ targetSize: 'fireOver' });
    expect(targetInputPosition(wrapper, 4).hasClass('active')).toBe(true);
  });
  it('should be possible to change to "running"', () => {
    const runningButton = targetInputPosition(wrapper, 5);
    runningButton.simulate('click');
    expect(handleUpdateStateValue).toHaveBeenCalledWith(
      'targetSize',
      'running'
    );
    wrapper.setProps({ targetSize: 'running' });
    expect(targetInputPosition(wrapper, 5).hasClass('active')).toBe(true);
  });
  it('should be possible to change to "low crouch"', () => {
    const crouchButton = targetInputPosition(wrapper, 6);
    crouchButton.simulate('click');
    expect(handleUpdateStateValue).toHaveBeenCalledWith('targetSize', 'crouch');
    wrapper.setProps({ targetSize: 'crouch' });
    expect(targetInputPosition(wrapper, 6).hasClass('active')).toBe(true);
  });
  it('should be possible to change to "hands and knees"', () => {
    const runningButton = targetInputPosition(wrapper, 7);
    runningButton.simulate('click');
    expect(handleUpdateStateValue).toHaveBeenCalledWith(
      'targetSize',
      'handsKnees'
    );
    wrapper.setProps({ targetSize: 'handsKnees' });
    expect(targetInputPosition(wrapper, 7).hasClass('active')).toBe(true);
  });
  it('should be possible to change to "low crouch"', () => {
    const crouchButton = targetInputPosition(wrapper, 8);
    crouchButton.simulate('click');
    expect(handleUpdateStateValue).toHaveBeenCalledWith(
      'targetSize',
      'lowProne'
    );
    wrapper.setProps({ targetSize: 'lowProne' });
    expect(targetInputPosition(wrapper, 8).hasClass('active')).toBe(true);
  });
});
