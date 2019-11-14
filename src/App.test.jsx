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

describe('data retention while navigating between the App pages', () => {
  const wrapper = shallow(<App />);
  it('should keep', () => {
    // console.log(wrapper.props());
  });
});
