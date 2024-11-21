import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../firebase';

const View = () => {
    const navigate = useNavigate();
    const [userRecords, setUserRecords] = useState("");

    const db = getDatabase(app);

    const viewData = () => {
        const users = ref(db, "users");

        onValue(users, (u) => {
            const data = u.val();
            setUserRecords(data)
        })
    }

    useEffect(() => {
        viewData();
    }, [])
    return (
        <div align="center">
            <h2>View Users</h2>
    
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userRecords && Object.entries(userRecords).map(([key, value]) => {
                            return (
                                <tr key={key}>
                                    <td> {key} </td>
                                    <td> {value.name} </td>
                                    <td>{value.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    
            <Link to={"/add"}>Add</Link>
        </div>
    )

}



export default View
