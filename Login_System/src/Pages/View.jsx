// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function View() {
//     const navigate = useNavigate();
    // const allUsersRecord = JSON.parse(localStorage.getItem('users')) || [];
    // const [records, setRecords] = useState(allUsersRecord);

//     useEffect(() => {
//         let userLogin = JSON.parse(localStorage.getItem("registeredUser"));
//         if (!userLogin) {
//             navigate("/login");
//         }
//     })
    // const deleteFunction = (id) => {
    //     let d = records.filter((val) => val.id !== id);
    //     localStorage.setItem('users', JSON.stringify(d));
    //     setRecords(d);
    //     alert('Record deleted..!');
    // };

//     return (
//         <div align="center">
//             <h1>View User</h1>
//             <table border={1}>
//                 <thead>
//                     <tr>
//                         <th>SrNo</th>
//                         <th>Name</th>
//                         <th>Phone</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         records.map((user, index) => {
//                             const { id, name, phone } = user;
//                             return (
//                                 <tr key={id}>
//                                     <td>{index + 1}</td>
//                                     <td>{name}</td>
//                                     <td>{phone}</td>
//                                     <td>
//                                         <button onClick={() => navigate("/edit", { state: user })}>
//                                             Edit
//                                         </button>
//                                         <button className="btn btn-danger" onClick={() => deleteFunction(id)}>
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             )
//                         })
//                     }
//                 </tbody>
//             </table>
//             <Link to={`/add`}>Add</Link>
//         </div>
//     )
// }
// export default View;









import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function View() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    // const allUsersRecord = JSON.parse(localStorage.getItem('users')) || [];
    // const [records, setRecords] = useState(allUsersRecord);

    useEffect(() => {
        let userLogin = JSON.parse(localStorage.getItem("registeredUser"));
        if (!userLogin) {
            navigate("/login");
        }

        // Fetch added users from localStorage
        let savedUsers = localStorage.getItem("addedUsers")
            ? JSON.parse(localStorage.getItem("addedUsers"))
            : [];
        setUsers(savedUsers);
    });

    const deleteFunction = (id) => {
        let d = users.filter((val) => val.id !== id);
        localStorage.setItem('users', JSON.stringify(d));
        setUsers(d);
        alert('Record deleted successfully..!');
    };

    return (
        <div align="center">
            <h1>View Users</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>SrNo</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            const { id, name, phone } = user;
                            return (
                                <tr key={id}>
                                    <td>{index + 1}</td>
                                    <td>{name}</td>
                                    <td>{phone}</td>
                                    <td>
                                        <button onClick={() => navigate("/edit", { state: user })}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger" onClick={() => deleteFunction(id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <Link to={`/add`}>Add</Link>
        </div>
    );
}

export default View;
