import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('wiring test', () => {
  const wrapper = shallow(<App />);
  it('should simulate click', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.text()).toContain('TEST!');
  });
});
