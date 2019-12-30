import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/home';

describe("Home", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
