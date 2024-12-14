// import { useEffect, useState } from "react"
// import { Link, useNavigate } from "react-router-dom"

// const Add = () => {
//     const [name, setName] = useState("")
//     const [phone, setPhone] = useState("")

//     const navigate = useNavigate()
//     const [allRecords, setAllRecords] = useState(
//         localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
//     );

//     useEffect(() => {
//         let userLogin = JSON.parse(localStorage.getItem("registeredUser"));
//         if (!userLogin) {
//             navigate('/login');
//         }
//     })

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         let obj = {
//             id: Math.floor(Math.random() * 10000),
//             name: name,
//             phone: phone
//         }
//         const newRecord = [...allRecords, obj];
//         localStorage.setItem('users', JSON.stringify(newRecord));
//         alert("Record added successfully..!");
//         navigate(`/view`);
//     }

//     const handleLogout = () => {
//         localStorage.removeItem("registeredUser");
//         alert("User compeletely Logout..!");
//         navigate('/');
//     }


//     return (
//         <div>
//             <h1>Add User</h1>
//             <form onSubmit={handleSubmit}>
//                 <table border={1} align="center">
//                     <tr>
//                         <td>Name:</td>
//                         <td>
//                             <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>Phone:</td>
//                         <td>
//                             <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td>
//                             <input type="submit" />
//                         </td>
//                     </tr>
//                 </table>
//             </form>
//             <Link to={`/View`}>View</Link>
//             <button onClick={() => handleLogout()}>Logout</button>
//         </div>
//     )
// }

// export default Add









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

        // Create a new user object
        let newUser = {
            id: Math.floor(Math.random() * 10000),
            name: name,
            phone: phone,
        };

        // Get existing data from localStorage
        let users = localStorage.getItem("addedUsers")
            ? JSON.parse(localStorage.getItem("addedUsers"))
            : [];

        // Add new user to the array
        users.push(newUser);

        // Save the updated data to localStorage
        localStorage.setItem("addedUsers", JSON.stringify(users));

        alert("Record added successfully!");
        navigate(`/view`); // Redirect to the View page
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
