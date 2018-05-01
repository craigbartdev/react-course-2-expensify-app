import moment from 'moment';
import { 
    setStartDate, 
    setEndDate, 
    sortByDate, 
    sortByAmount, 
    setTextFilter 
} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should test sortByDate', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should test sortByAmount', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should test setTextFilter with input value', () => {
    const text = 'Something in';//use var to prevent typos
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should test setTextFilter with default input value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});
