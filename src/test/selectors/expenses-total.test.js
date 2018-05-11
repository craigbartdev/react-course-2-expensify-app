import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';



test('should return 0 with no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

test('should return amount of single expense', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
});

test('should return amount of multiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114195);
});