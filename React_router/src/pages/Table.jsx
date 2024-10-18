import React, { isValidElement, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Table = () => {

  const navigate = useNavigate();
  const allUsers = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

  const [record, setRecord] = useState(allUsers);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const userDelete = (id) => {
    let d = record.filter(val => val.id != id);
    localStorage.setItem("users", JSON.stringify(d));
    setRecord(d);
    alert("Record deleted..!");
  }

  const changeStatus = (id,st) => {
    if(st == "active"){
      let up = record.map((val) => {
        if(val.id == id){
          val.status = "deactive";
        }
        return val;
      })
      localStorage.setItem("users",JSON.stringify(up))
      setRecord(up);
      alert("Status changed..!");
    }else{
      let up = record.map((val) => {
        if(val.id == id){
          val.status = "active";
        }
        return val;
      })
      localStorage.setItem("users",JSON.stringify(up))
      setRecord(up);
      alert("Status changed..!");
    }
  }

  useEffect(() => {
    let filtered = [...allUsers];

    if (status != "") {
      filtered = filtered.filter( val => val.status === status);
      console.log(filtered);
    }else{
      setRecord(allUsers);
    }

    if(search != ""){
      filtered = filtered.filter( val => 
        val.name.toLowerCase().includes(search.toLowerCase())
      )
    }else{
      setRecord(allUsers);
    }

    setRecord(filtered);

  }, [status, search])

  return (
    <div align="center">
      <h2>View User</h2>

      <select onChange={(e) => setStatus(e.target.value)} value={status}>
        <option value="">--- select status ---</option>
        <option value="active">Active</option>
        <option value="deactive">Deactive</option>
      </select>

      <input type="text" 
            placeholder='Search here...'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
      />

      <br></br>

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            record.map((u, i) => {
              const { id, name, phone, status } = u;
              return (
                <tr key={i}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{phone}</td>
                  <td>
                    {
                      status === "active" ? (
                        <button onClick={() => changeStatus(id, status)} style={{ backgroundColor: "green" }}> {status}</button>
                      ) : (
                        <button onClick={() => changeStatus(id, status)} style={{ backgroundColor: "red" }}> {status} </button>
                      )
                    }
                  </td>
                  <td>
                    <button onClick={() => userDelete(id)}>Delete</button> ||
                    <button onClick={() => navigate(`/edit`, { state: u })}>Edit</button>
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

// make the status and search functionality in this code.
