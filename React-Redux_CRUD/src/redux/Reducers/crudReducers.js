let initialState = {
    users: [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
        { id: 3, name: 'Bob', age: 35 }
    ]
}

const crudReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default crudReducer;