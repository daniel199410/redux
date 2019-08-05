const initialState = {
    a: 0,
};

const reducerA = (state = initialState, action) => {
    if (action.type === 'UPDATE_A') {
        return {
            ...state,
            a: state.a + action.b
        };
    } else {
        return {...state};
    }
};

export default reducerA;
