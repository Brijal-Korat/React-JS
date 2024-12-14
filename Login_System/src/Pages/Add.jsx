import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        let userLogin = JSON.parse(localStorage.getItem("registeredUser"));
        if (!userLogin) {
            navigate("/login");
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !phone) {
            alert("Please fill all the fields!");
            return;
        }

        let newUser = {
            id: Math.floor(Math.random() * 10000),
            name: name,
            phone: phone,
        };

        let users = localStorage.getItem("addedUsers")
            ? JSON.parse(localStorage.getItem("addedUsers"))
            : [];

        users.push(newUser);

        localStorage.setItem("addedUsers", JSON.stringify(users));

        alert("Record added successfully!");
        navigate(`/view`); 
        setName("");
        setPhone("");
    };

    const handleLogout = () => {
        localStorage.removeItem("registeredUser");
        alert("User completely logged out!");
        navigate("/");
    };

    return (
        <div align="center">
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>
                                <input
                                    type="text"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="submit" /> || <button onClick={handleLogout}>Logout</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <Link to={`/view`}>View</Link>
        </div>
    );
};

export default Add;
