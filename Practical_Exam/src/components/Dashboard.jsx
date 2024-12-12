import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [status, setStatus] = useState("");
    const allUsersRecord = JSON.parse(localStorage.getItem('users')) || [];
    const [records, setRecords] = useState(allUsersRecord);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("checkuser");
        alert("Logout Successfully..!");
        navigate("/");
    };

    const deleteUser = (id) => {
        const updatedUsers = users.filter((user) => user.id !== id);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
        alert("User deleted successfully..!");
    };

    const changeStatus = (id, status) => {
        let updatedRecords = records.map((record) => {
            if (record.id === id) {
                record.status = status === 'active' ? 'deactive' : 'active';
            }
            return record;
        });

        localStorage.setItem('users', JSON.stringify(updatedRecords));
        setRecords(updatedRecords);
        alert('Status changed..!');
    };

    return (
        <div className="container my-4">
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h4>Dashboard</h4>
                    <button className="btn btn-danger" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
                <div className="card-body">
                    <h5 className="card-title">View User Data</h5>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Password</th>
                                    <th>Actions</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? (
                                    users.map((user, index) => (
                                        <tr key={index}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.password}</td>
                                            <td>
                                                <button
                                                    className="btn btn-danger btn-sm me-2"
                                                    onClick={() => deleteUser(user.id)}
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    className="btn btn-primary btn-sm"
                                                    onClick={() => navigate(`/edit`, { state: user })}
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className={`btn btn-${status === 'active' ? 'success' : 'danger'}`}
                                                    onClick={() => changeStatus(id, status)}
                                                >
                                                    {status}
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center">
                                            No users found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
