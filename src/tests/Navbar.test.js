import React from 'react';
import { shallow } from 'enzyme';
import NavbarComponent from '../components/navbar';

describe("Navbar", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<NavbarComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
