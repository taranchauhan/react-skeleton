import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

describe('<Home />', () => {
  it('should render the Home page', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
