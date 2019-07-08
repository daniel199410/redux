const { createStore } = require('redux');

const initialState = {
    age: 20
};

const myReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'ADD':
            newState.age += action.value;
            break;
        case 'SUBTRACT':
            newState.age -= action.value;
            break;
    }
    return newState;
};

const store = createStore(myReducer);

store.subscribe(() => {
   console.log(`State changed: ${JSON.stringify(store.getState())}`);
});

store.dispatch({ type: 'ADD', value: 10 });
store.dispatch({ type: 'SUBTRACT', value: 5 });
