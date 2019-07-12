const initialState = {
    age: 21
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'AGE_UP':
            newState.age++;
            break;
        case 'AGE_DOWN':
            if(newState.age > 0) {
                newState.age--;
            }
            break;
        default:
            break;
    }
    return newState;
};

export default reducer;
