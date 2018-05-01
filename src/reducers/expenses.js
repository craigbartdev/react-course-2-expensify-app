// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [ 
                ...state, //copy array
                action.expense //with new value
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id); //use destructuring in func
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates //overwrite
                    }
                } else {
                    return expense;
                };
            });
        default:
            return state;
    }
};
