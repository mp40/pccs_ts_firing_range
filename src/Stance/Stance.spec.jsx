/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { mount } from 'enzyme';
import Stance from './index';

const stanceInputButton = (wrapper, position) => {
  return wrapper.find('.toggleStance').at(position);
};

const bracedInputPosition = (wrapper) => {
  return wrapper.find('.bracedToggle').find('button');
};

describe('Stance', () => {
  const stance = 'standing';
  const braced = false;
  const handleUpdateStateValue = jest.fn();

  const wrapper = mount(
    <Stance
      stance={stance}
      braced={braced}
      handleUpdateStateValue={handleUpdateStateValue}
    />
  );

  beforeEach(() => {
    handleUpdateStateValue.mockClear();
  });
  it('should start with default stance of "standing"', () => {
    expect(stanceInputButton(wrapper, 0).hasClass('active')).toBe(true);
    expect(stanceInputButton(wrapper, 1).hasClass('active')).toBe(false);
    expect(stanceInputButton(wrapper, 2).hasClass('active')).toBe(false);
  });
  it('should be possible to change to "kneeling"', () => {
    const kneelingButton = stanceInputButton(wrapper, 1);
    kneelingButton.simulate('click');
    expect(handleUpdateStateValue).toHaveBeenCalledWith('stance', 'kneeling');
    wrapper.setProps({ stance: 'kneeling' });
    expect(stanceInputButton(wrapper, 0).hasClass('active')).toBe(false);
    expect(stanceInputButton(wrapper, 1).hasClass('active')).toBe(true);
    expect(stanceInputButton(wrapper, 2).hasClass('active')).toBe(false);
  });
  it('should be possible to change to "prone"', () => {
    const proneButton = stanceInputButton(wrapper, 2);
    proneButton.simulate('click');
    expect(handleUpdateStateValue).toHaveBeenCalledWith('stance', 'prone');
    wrapper.setProps({ stance: 'prone' });
    expect(stanceInputButton(wrapper, 0).hasClass('active')).toBe(false);
    expect(stanceInputButton(wrapper, 1).hasClass('active')).toBe(false);
    expect(stanceInputButton(wrapper, 2).hasClass('active')).toBe(true);
  });
  it('should have a "Braced" option defaulting to false', () => {
    expect(bracedInputPosition(wrapper).hasClass('active')).toBe(false);
  });
  it('should be possible to check "Braced" option', () => {
    bracedInputPosition(wrapper).simulate('click');
    expect(handleUpdateStateValue).toHaveBeenCalledWith('braced', true);
    wrapper.setProps({ braced: true });
    expect(bracedInputPosition(wrapper).hasClass('active')).toBe(true);
  });
});
