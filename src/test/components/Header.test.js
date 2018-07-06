import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';


test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should test the logout button', () => {
    const startLogut = jest.fn();
    const wrapper = shallow(<Header startLogout={ startLogut } />);
    wrapper.find('button').simulate('click');
    expect(startLogut).toHaveBeenCalled();
});