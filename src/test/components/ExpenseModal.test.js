import React from 'react';
import { shallow } from 'enzyme';
import ExpenseModal from '../../components/ExpenseModal';

let modalAction, modalClose, wrapper;

beforeEach(() => {
    modalClose = jest.fn();
    modalAction = jest.fn();
    wrapper = shallow(
        <ExpenseModal
            modalVisible={true}
            modalAction={modalAction}
            modalClose={modalClose}
        />
    );
});

test('should render ExpenseModal correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should test cancel button', () => {
    wrapper.find('button.remove').simulate('click');
    expect(modalAction).toHaveBeenCalled();
});

test('should test cancel button', () => {
    wrapper.find('button.cancel').simulate('click');
    expect(modalClose).toHaveBeenCalled();
});