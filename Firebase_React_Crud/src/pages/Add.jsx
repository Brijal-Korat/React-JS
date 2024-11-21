import React, { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

const Add = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const db = getDatabase(app);
        let id = Math.floor(Math.random() * 100000);

        set(ref(db, `users/${id}`),{
            name: name,
            phone: phone
        })

        alert("Record added..!");
        navigate("/");
        setName("");
        setPhone("");
        
    }

    return (
        <div align="center">
            <h2>Add Users</h2>

            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tr>
                        <td>Name :-</td>
                        <td>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Phone :-</td>
                        <td>
                            <input
                                type="text"
                                placeholder="Enter Your Phone Number"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit">Submit</button>
                        </td>
                    </tr>
                </table>
            </form>

            <Link to={"/"}>View</Link>
        </div>
    )
}

export default Add
