/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { shallow } from 'enzyme';
import Range from './index';

describe('Range', () => {
  const handleUpdateStateValue = jest.fn();
  const wrapper = shallow(
    <Range range={1} handleUpdateStateValue={handleUpdateStateValue} />
  );
  it('should start with a default range of 1', () => {
    expect(wrapper.text()).toContain('Current Range: 1');
  });
  it('should be possible to change range', () => {
    wrapper.find('.toggleSelectRange').simulate('click');
    wrapper.find('.rangeButton').at(9).simulate('click');
    expect(handleUpdateStateValue).toHaveBeenLastCalledWith('range', 11);
  });
});
