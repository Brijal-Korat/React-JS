export const addUser = (addData) => {
    return{
        type: 'Add_User',
        payload: addData
    }
}

export const deleteUser = (deleteData) => {
    return{
        type: 'Delete_User',
        payload: deleteData
    }
}

export const editUser = (editData) => {
    return{
        type: 'Edit_User',
        payload: editData
    }
}

export const userChangeStatus = (statusData) => { 
    return{
        type: 'Change_Status',
        payload: statusData
    }
}