import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

test("should test LoginPage", () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should test the login button', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={ startLogin } />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});