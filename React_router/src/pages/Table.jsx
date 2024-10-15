import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Table = () => {

  const navigate = useNavigate();
  const allUsers = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

  const [record, setRecord] = useState(allUsers);

  const userDelete = (id) => {
    let d = record.filter(val => val.id != id);
    localStorage.setItem("users", JSON.stringify(d));
    setRecord(d);
    alert("Record deleted..!");
  }

  return (
    <div align="center">
      <h2>View User</h2>
      
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            record.map((u, i) => {
              const { id, name, phone} = u;
              return(
                <tr key={i}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{phone}</td>
                  <td>
                    <button onClick={() => userDelete(id)}>Delete</button> || 
                    <button onClick={() => navigate(`/edit`, {state : u})}>Edit</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <Link to={`/add`}>Add</Link>
    </div>
  )
}

export default Table;