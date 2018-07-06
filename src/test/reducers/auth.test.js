import authReducer from '../../reducers/auth';

test('should test login case', () => {
    const action = {
        type: 'LOGIN',
        uid: '123abc'
    }
    const state = authReducer(undefined, action);
    expect(state.uid).toBe(action.uid);
});

test('should test logout case', () => {
    const state = authReducer({ uid: '123abc' }, {type: 'LOGOUT'});
    expect(state).toEqual({});
});
