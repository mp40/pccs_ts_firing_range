/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { shallow } from 'enzyme';
import Stance from './index';

const stanceInputButton = (wrapper, position) => {
  return wrapper.find('.toggleStance').at(position);
};

const bracedInputPosition = wrapper => {
  return wrapper.find('.bracedToggle').find('button');
};

describe('Stance', () => {
  const wrapper = shallow(<Stance />);
  it('should start with default stance of "standing"', () => {
    expect(stanceInputButton(wrapper, 0).hasClass('active')).toBe(true);
    expect(stanceInputButton(wrapper, 1).hasClass('active')).toBe(false);
    expect(stanceInputButton(wrapper, 2).hasClass('active')).toBe(false);
  });
  it('should be possible to change to "kneeling"', () => {
    const kneelingButton = stanceInputButton(wrapper, 1);
    kneelingButton.simulate('click');
    expect(stanceInputButton(wrapper, 0).hasClass('active')).toBe(false);
    expect(stanceInputButton(wrapper, 1).hasClass('active')).toBe(true);
    expect(stanceInputButton(wrapper, 2).hasClass('active')).toBe(false);
  });
  it('should be possible to change to "prone"', () => {
    const proneButton = stanceInputButton(wrapper, 2);
    proneButton.simulate('click');
    expect(stanceInputButton(wrapper, 0).hasClass('active')).toBe(false);
    expect(stanceInputButton(wrapper, 1).hasClass('active')).toBe(false);
    expect(stanceInputButton(wrapper, 2).hasClass('active')).toBe(true);
  });
  it('should have a "Braced" option defaulting to false', () => {
    expect(bracedInputPosition(wrapper).hasClass('active')).toBe(false);
  });
  it('should be possible to check "Braced" option', () => {
    bracedInputPosition(wrapper).simulate('click');
    expect(bracedInputPosition(wrapper).hasClass('active')).toBe(true);
  });
});
