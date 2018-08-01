import React from 'react';
import { shallow } from 'enzyme';
import ExpenseModal from '../../components/ExpenseModal';

let onRemove, modalClose, wrapper;

beforeEach(() => {
    modalClose = jest.fn();
    onRemove = jest.fn();
    wrapper = shallow(
        <ExpenseModal
            modalVisible={true}
            onRemove={onRemove}
            modalClose={modalClose}
        />
    );
});

test('should render ExpenseModal correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should test cancel button', () => {
    wrapper.find('button.remove').simulate('click');
    expect(onRemove).toHaveBeenCalled();
});

test('should test cancel button', () => {
    wrapper.find('button.cancel').simulate('click');
    expect(modalClose).toHaveBeenCalled();
});