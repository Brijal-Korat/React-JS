import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userChangeStatus, deleteUser, editUser } from '../redux/Action/crudAction';

const View = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [status, setStatus] = useState("");
    const viewUsers = useSelector(state => state.crudReducer.users);

    const changeStatus = (id, st) => {
        let obj = { id, st }
        dispatch(userChangeStatus(obj));
        alert("Status changed successfully..!");
    }


    return (
        <div align="center">
            <h2>View User</h2>

            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        viewUsers.map((u) => {
                            return (
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.phone}</td>
                                    <td>
                                        <button onClick={() => dispatch(deleteUser(u.id))}>Delete</button>
                                        &nbsp; || &nbsp;
                                        <button onClick={() => navigate(`/edit`, { state: u })}>Edit</button>
                                    </td>
                                    <td>
                                        {
                                            u.status == "active" ? (
                                                <button onClick={() => changeStatus(u.id, u.status)} style={{ backgroundColor: "green" }}>
                                                    {u.status}
                                                </button>
                                            ) : (
                                                <button onClick={() => changeStatus(u.id, u.status)} style={{ backgroundColor: "red" }}>
                                                    {u.status}
                                                </button>
                                            )
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <Link to={`/add`}> add</Link>
        </div>
    )
}

export default View;
