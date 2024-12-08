import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../firebase';

const Add = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const db = getFirestore(app);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !phone) {
            alert("Please fill out all the fields..!");
            return;
        }
        try {
            await addDoc(collection(db, "users"), {
                name: name,
                phone: phone,
            });
            setName("");
            setPhone("");
            // alert("Record added!");
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div align="center">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name :- </td>
                            <td>
                                <input
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Phone :- </td>
                            <td>
                                <input
                                    type="tel"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="submit" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <Link to={`/`}>View</Link>
        </div>
    );
};

export default Add;






// import { addDoc, collection, getFirestore } from 'firebase/firestore'
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { app } from '../firebase'

// const Add = () => {
//     const navigate = useNavigate()
//     const [name, setName] = useState("")
//     const [phone, setPhone] = useState("")

//     const db = getFirestore(app)

//     const handlesubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const user = await addDoc(collection(db, "users"), {
//                 name: name,
//                 phone: phone,
//             })
//             alert("Record added..!");
//             navigate('/')
//         } catch (err) {
//             console.log(err);
//             return false;
//         }

//     }

//     return (
//         <div align="center">
//             <h2>Add User</h2>
//             <form onSubmit={handlesubmit}>
//                 <table border={1}>
//                     <tr>
//                         <td>Name :- </td>
//                         <td><input type="text" onChange={(e) => setName(e.target.value)} value={name} /></td>
//                     </tr>
//                     <tr>
//                         <td>phone :- </td>
//                         <td><input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} /></td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td><input type="submit" /></td>
//                     </tr>
//                 </table>
//             </form>
//             <Link to={`/`}>View</Link>
//         </div>
//     )
// }

// export default Add;
