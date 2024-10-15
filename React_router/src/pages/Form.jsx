import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'

const Form = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [allRecord, setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [])

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id : Math.floor(Math.random() * 10000),
      name : name,
      phone : phone
    }

    const newRecord = [...allRecord, obj];
    localStorage.setItem("users", JSON.stringify(newRecord));
    alert("Record added..!");
    navigate('/');
  }

  return (
    <div>
        <h2>Add User React Router</h2>

        <form onSubmit={handleSubmit}>
          <table border={1}>
              <tr>
                <td>Name :- </td>
                <td><input type="text" onChange={(e) => setName(e.target.value)} value={name} /></td>
              </tr>
              <tr>
                <td>Phone :- </td>
                <td><input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} /></td>
              </tr>
              <tr>
                <td></td>
                <td><input type="submit" /></td>
              </tr>
          </table>
        </form>
        <Link to={'/'}>View</Link>
    </div>
  )
}

export default Form;