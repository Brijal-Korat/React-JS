
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [editId, setEditId] = useState("");

  const [allRecord, setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

  useEffect(() => {
    if (location.state) {
      setName(location.state.name || '');
      setEmail(location.state.email || '');
      setEditId(location.state.id || '');
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecord = allRecord.map((val) => {
      if (val.id === editId) {
        return {
          ...val,
          name,
          email,
        };
      }
      return val;
    });
    setAllRecord(updatedRecord);
    localStorage.setItem("users", JSON.stringify(updatedRecord));
    alert("Record updated!");
    navigate('/');
  };


  return (
    <div className="container my-4">

      <div className="card">
        <div className="card-header d-flex align-items-center justify-content-between">

          <h4>Edit User</h4>
          <div>
            <Link to={'/'} className="btn btn-success">View User</Link>
          </div>

        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                id="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>

            <div className="d-flex">
              <button type="submit" className="btn btn-primary me-3">Submit</button>
              <button type="reset" className="btn btn-secondary" onClick={() => navigate('/')}>Cancel</button>
            </div>
          </form>
        </div>
      </div>



    </div>
  );
};

export default Edit;
