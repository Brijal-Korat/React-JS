import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addUser } from '../redux/Action/crudAction';

const Add = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            id: Math.floor(Math.random() * 10000),
            name: name,
            phone: phone,
            status: "active"
        }

        dispatch(addUser(obj));
        alert("User successfully added...!");
        navigate(`/`);
    }

    return (
        <div align="center">
            <h2>Add user</h2>

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

export default Add;
