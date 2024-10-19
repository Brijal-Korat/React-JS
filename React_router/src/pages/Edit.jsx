import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const Edit = () => {

  const location = useLocation();

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [editId, setEditId] = useState("");

  const [allRecord, setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [])

  useEffect(() => {
    setName(location?.state?.name)
    setPhone(location?.state?.phone)
    setEditId(location?.state?.id)
  }, [location?.state])

  const handleSubmit = (e) => {
    e.preventDefault();

    let up = allRecord.map((val, i) => {
      if (val.id == editId) {
        val.name = name,
          val.phone = phone
      }
      return val;
    })
    localStorage.setItem("users", JSON.stringify(up));
    alert("Record updated..!");
    navigate('/');
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Edit User</h2>

          <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
            <div className="card mb-3">
              <div className="card-body">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control mb-3"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Enter user's name"
                  required
                />

                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  placeholder="Enter user's phone number"
                  required
                />
              </div>

            </div>

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">Update</button>
              <Link to="/" className="btn btn-secondary">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-link">Back to Users</Link>
      </div>
    </div>
  )
}

export default Edit;
