let initialState = {
    users: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
}

const crudReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Add_User':
            console.log(action.payload);
            let old = [...state.users, action.payload];
            localStorage.setItem("users", JSON.stringify(old));
            return {
                ...state,
                users: old
            }

        case 'Delete_User':
            console.log(action.payload);
            const delData = state.users.filter(users => users.id !== action.payload);
            localStorage.setItem("users", JSON.stringify(delData));
            return {
                ...state,
                users: delData
            };

        case 'Edit_User':
            console.log(action.payload);
            const updatedUsers = state.users.map(user =>
                user.id === action.payload.id ? action.payload : user
            );
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            return {
                ...state,
                users: updatedUsers
            };

        case 'Change_Status':

            if (action.payload.st == "active") {
                let up = state.users.map((val) => {
                    if (val.id == action.payload.id) {
                        val.status = "deactive"
                    }
                    return val;
                })
                localStorage.setItem("users", JSON.stringify(up));
                return {
                    ...state,
                    users: up
                }
            } else {
                let up = state.users.map((val) => {
                    if (val.id == action.payload.id) {
                        val.status = "active"
                    }
                    return val;
                })
                localStorage.setItem("users", JSON.stringify(up));
                return {
                    ...state,
                    users: up
                }
            }

        default:
            return state;
    }
}

export default crudReducer;
