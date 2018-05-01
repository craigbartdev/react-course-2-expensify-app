import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test ('should render ExpenseListItem', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>); //obj attr as props
    expect(wrapper).toMatchSnapshot();
});