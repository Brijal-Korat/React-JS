import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function View() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const userLogin = JSON.parse(localStorage.getItem("registeredUser"));
        if (!userLogin) {
            navigate("/login"); // Redirect to login if not logged in
        } else {
            const savedUsers = localStorage.getItem("addedUsers")
                ? JSON.parse(localStorage.getItem("addedUsers"))
                : [];
            setUsers(savedUsers); // Fetch added users
        }
    }, [navigate]);

    const deleteFunction = (id) => {
        // Filter out the user with the matching ID
        const updatedUsers = users.filter((user) => user.id !== id);
        localStorage.setItem("addedUsers", JSON.stringify(updatedUsers)); // Update localStorage
        setUsers(updatedUsers); // Update state
        alert("Record deleted successfully!");
    };

    return (
        <div align="center">
            <h1>View Users</h1>
            {users.length > 0 ? (
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {
                            const { id, name, phone } = user;
                            return (
                                <tr key={id}>
                                    <td>{index + 1}</td>
                                    <td>{name}</td>
                                    <td>{phone}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                navigate("/edit", { state: { id, name, phone } })
                                            }
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteFunction(id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <p>No users found. Add some users first.</p>
            )}
            <Link to={`/add`}>Add</Link>
        </div>
    );
}

export default View;
