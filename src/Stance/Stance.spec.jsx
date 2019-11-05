/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { shallow } from 'enzyme';
import Stance from './index';

const stanceInputPosition = (wrapper, position) => {
  return wrapper
    .find('.stanceSelectForm')
    .find('input')
    .at(position);
};

describe('Stance', () => {
  const wrapper = shallow(<Stance />);
  it('should start with default stance of "standing"', () => {
    expect(stanceInputPosition(wrapper, 0).props().checked).toBe(true);
    expect(stanceInputPosition(wrapper, 1).props().checked).toBe(false);
    expect(stanceInputPosition(wrapper, 2).props().checked).toBe(false);
  });
  it('should be possible to change to "kneeling"', () => {
    const kneelingButton = stanceInputPosition(wrapper, 1);
    kneelingButton.simulate('change', { target: { value: 'kneeling' } });
    expect(stanceInputPosition(wrapper, 0).props().checked).toBe(false);
    expect(stanceInputPosition(wrapper, 1).props().checked).toBe(true);
    expect(stanceInputPosition(wrapper, 2).props().checked).toBe(false);
  });
  it('should be possible to change to "prone"', () => {
    const kneelingButton = stanceInputPosition(wrapper, 1);
    kneelingButton.simulate('change', { target: { value: 'prone' } });
    expect(stanceInputPosition(wrapper, 0).props().checked).toBe(false);
    expect(stanceInputPosition(wrapper, 1).props().checked).toBe(false);
    expect(stanceInputPosition(wrapper, 2).props().checked).toBe(true);
  });
});
