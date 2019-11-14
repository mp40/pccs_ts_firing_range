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
  /*
  // Cache original functionality
  const realUseState = React.useState;
  // Stub the initial state
  const stubInitialState = [1];
  // Mock useState before rendering your component
  jest
    .spyOn(React, 'useState')
    .mockImplementationOnce(() => realUseState(stubInitialState));
    */
  // const wrapper = shallow(<App />);
  // it('should default render Shooter component on page one', () => {
  //   expect(wrapper.find('Shooter').exists()).toBe(true);
  // });
  // it('should render Shooter component on page one', () => {
  //   expect(wrapper.find('Shooter').exists()).toBe(true);
  // });
});
