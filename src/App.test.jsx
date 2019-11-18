import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('the App pages', () => {
  const wrapper = mount(<App />);
  it('should default render Shooter component on page one', () => {
    expect(wrapper.find('Shooter').exists()).toBe(true);
  });
  it('should render Range component on page two', () => {
    wrapper.find('.nextPage').simulate('click');
    expect(wrapper.find('Shooter').exists()).toBe(false);
    expect(wrapper.find('Range').exists()).toBe(true);
  });
  it('should render Stance component on page three', () => {
    wrapper.find('.nextPage').simulate('click');
    expect(wrapper.find('Shooter').exists()).toBe(false);
    expect(wrapper.find('Range').exists()).toBe(false);
    expect(wrapper.find('Stance').exists()).toBe(true);
  });
  it('should render Situation component on page four', () => {
    wrapper.find('.nextPage').simulate('click');
    expect(wrapper.find('Shooter').exists()).toBe(false);
    expect(wrapper.find('Range').exists()).toBe(false);
    expect(wrapper.find('Stance').exists()).toBe(false);
    expect(wrapper.find('Situation').exists()).toBe(true);
  });
  it('should render TargetSize component on page five', () => {
    wrapper.find('.nextPage').simulate('click');
    expect(wrapper.find('Shooter').exists()).toBe(false);
    expect(wrapper.find('Range').exists()).toBe(false);
    expect(wrapper.find('Stance').exists()).toBe(false);
    expect(wrapper.find('Situation').exists()).toBe(false);
    expect(wrapper.find('TargetSize').exists()).toBe(true);
  });
  it('should render Shooting component on page six', () => {
    wrapper.find('.nextPage').simulate('click');
    expect(wrapper.find('Shooter').exists()).toBe(false);
    expect(wrapper.find('Range').exists()).toBe(false);
    expect(wrapper.find('Stance').exists()).toBe(false);
    expect(wrapper.find('Situation').exists()).toBe(false);
    expect(wrapper.find('TargetSize').exists()).toBe(false);
    expect(wrapper.find('Shooting').exists()).toBe(true);
  });
});

describe('using page one', () => {
  const wrapper = mount(<App />);
  it('should be possible to select level', () => {
    wrapper.find('.levelButton').simulate('click');
    wrapper
      .find('.levelBtns')
      .at(3)
      .simulate('click');
    expect(wrapper.text()).toContain('Shooter Level: 3');
  });
  it('should be possible to select aims', () => {
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
  it('should be possible to go to next page', () => {
    wrapper.find('.nextPage').simulate('click');
    expect(wrapper.text()).toContain('Current Range: 1');
  });
  it('should be possible to go back to page one without losing choices', () => {
    wrapper.find('.prevPage').simulate('click');
    expect(wrapper.text()).toContain('Shooter Level: 3');
    expect(
      wrapper
        .find('.aimTimeRow')
        .at(2)
        .hasClass('selected')
    ).toBe(true);
  });
});

describe('using page two', () => {
  const wrapper = mount(<App />);
  const page = 2;
  wrapper.setState({ page });
  it('should be possible to select range', () => {
    wrapper.find('.toggleSelectRange').simulate('click');
    wrapper
      .find('.rangeButton')
      .at(4)
      .simulate('click');
    expect(wrapper.text()).toContain('Current Range: 5');
  });
  it('should be possible to go to next page', () => {
    wrapper.find('.nextPage').simulate('click');
    expect(wrapper.text()).toContain('Standing:Kneeling:Prone:Braced:');
  });
  it('should be possible to go back to page one without losing choices', () => {
    wrapper.find('.prevPage').simulate('click');
    expect(wrapper.text()).toContain('Current Range: 5');
  });
});
