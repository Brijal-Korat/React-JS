import { collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../firebase";

const View = () => {
  const navigate = useNavigate();
  const db = getFirestore(app);
  const [records, setRecords] = useState([]);

  const getUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched users:", users); // Log fetched data
      setRecords(users);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const users = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched users:", users); // Log fetched data
        setRecords(users); // Update state with fetched data
      } catch (err) {
        console.error("Error fetching users:", err); // Log errors
      }
    };
  
    getUsers();
  }, []); // Run only on component mount
  

  return (
    <div align="center">
      <h2>View Users</h2>
      <button onClick={getUsers}>Refresh</button> {/* Manual refresh */}
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map(({ id, name, phone }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{phone}</td>
              <td>
                <button onClick={() => deleteUser(id)}>Delete</button> |{" "}
                <button onClick={() => navigate("/edit", { state: { id, name, phone } })}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add">Add User</Link>
    </div>
  );
};

export default View;
