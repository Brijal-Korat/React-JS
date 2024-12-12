import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { app } from "../firebase";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [status, setStatus] = useState("");
    const allUsersRecord = JSON.parse(localStorage.getItem('users')) || [];
    const [records, setRecords] = useState(allUsersRecord);

    const db = getFirestore(app);

    const getRecord = () => {
        if (allUsersRecord) {
            return JSON.parse(localStorage.getItem("users"));
        } else {
            return [];
        }

    }

    const [allRecord, setAllRecord] = useState(getRecord());

    useEffect(() => {
        const fetchUsers = async () => {
            const usersCollection = collection(db, "users");
            const usersSnapshot = await getDocs(usersCollection);
            const usersList = usersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setUsers(usersList);
        };

        fetchUsers();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("checkuser");
        alert("Logout Successfully..!");
        navigate("/");
    };


    const deleteUser = async (id) => {
        try {
            await deleteDoc(doc(db, "users", id));
            setUsers(users.filter((user) => user.id !== id));
            alert("User deleted successfully.");
        } catch (error) {
            console.error("Error deleting user: ", error);
            alert("Failed to delete user.");
        }
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
                    <div>
                        <button className="btn btn-danger" onClick={handleLogout}>
                            Logout
                        </button>
                        <button className="btn btn-success mx-2" onClick={() => navigate(`/add`)}>
                            Add
                        </button>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-header">
                        Add Users
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} value={phone} />
                                </div>
                                <button type="submit" className="btn btn-primary">Add User</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="card-body">
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
