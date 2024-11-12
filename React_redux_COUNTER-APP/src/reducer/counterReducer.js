let initialState = 0;

const Counter = (state = initialState, action) => {
    switch (action.type){
        case 'inc' :
            return state + 1;

        case 'dec' : 
            return state - 1;

        case 'rst' :
            return 0;

        default:
            return state;
    }
}

export default Counter;