import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { editUser } from '../redux/Action/crudAction';

const Edit = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [editId, setEditId] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        setName(location?.state?.name)
        setPhone(location?.state?.phone)
        setEditId(location?.state?.id)
        
    },[location?.state])


    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            id : editId,
            name : name,
            phone : phone
        }

        dispatch(editUser(obj));
        navigate(`/`);
    }

    return (
        <div align="center">
            <h2>Edit user</h2>

            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tr>
                        <td>Name :- </td>
                        <td><input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} /></td>
                    </tr>
                    <tr>
                        <td>Phone :- </td>
                        <td><input type="text" name="phone" onChange={(e) => setPhone(e.target.value)} value={phone} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" /></td>
                    </tr>
                </table>
            </form>

            <br />
            <Link to={`/`}>View</Link>
        </div>
    )
}

export default Edit;


// please compelete the code.