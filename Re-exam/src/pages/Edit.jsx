import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Edit = () => {

    const location = useLocation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [salary, setSalary] = useState("");
    const [degignation, setDegignation] = useState("");
    const [gender, setGender] = useState("");
    const [editId, setEditId] = useState("");
    const navigate = useNavigate();

    const [allRecords, setAllRecords] = useState(
        localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
    );

    useEffect(() => {
        if (location.state) {
          setName(location.state.name || '');
          setEmail(location.state.email || '');
          setCity(location.state.city || '');
          setPassword(location.state.password || '');
          setSalary(location.state.salary || '');
          setDegignation(location.state.degignation || '');
          setGender(location.state.gender || '');
          setEditId(location.state.id || '');
        }
      }, [location.state]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateRecord = allRecords.map((val) => {
          if (val.id === editId) {
            return {
              ...val,
              name,
              email,
              city,
              salary,
              degignation,
              gender,
            };
          }
          return val;
        });
        setAllRecords(updateRecord);
        localStorage.setItem("users", JSON.stringify(updateRecord));
        alert("Record updated successfully..!");
        navigate('/view');
      };

    return (
        


        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3>Edit Employee Details</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-4 text-start">
                  <label className="form-label mb-2">Name :-</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Enter name"
                  />
                </div>
                <div className="mb-4 text-start">
                  <label className="form-label mb-2">Email :-</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-4 text-start">
                  <label className="form-label mb-2">Password :-</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Enter password"
                  />
                </div>
                <div className="mb-4 text-start">
                  <label className="form-label mb-2">City :-</label>
                  <select
                    className="form-select"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                  >
                    <option value="" disabled>
                      Select city
                    </option>
                    <option value="Vesu">Vesu</option>
                    <option value="Adajan">Adajan</option>
                    <option value="Sachin">Sachin</option>
                    <option value="Varachha">Varachha</option>
                    <option value="Katargam">Katargam</option>
                    <option value="Kathodara">Kathodara</option>
                    <option value="Godadara">Godadara</option>
                    <option value="Amroli">Amroli</option>
                  </select>
                </div>
                <div className="mb-4 text-start">
                  <label className="form-label me-2">Gender :-</label>
                  <input
                    type="radio"
                    className="me-1"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Male
                  <input
                    type="radio"
                    className="mx-1"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Female
                </div>
                <div className="mb-4 text-start">
                  <label className="form-label mb-2">Salary :-</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setSalary(e.target.value)}
                    value={salary}
                    placeholder="Enter salary"
                  />
                </div>
                <div className="mb-4 text-start">
                  <label className="form-label mb-2">Designation :-</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setDegignation(e.target.value)}
                    value={degignation}
                    placeholder="Enter designation"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-warning mx-2">
                    Update
                  </button>
                  <Link to="/view" className="btn btn-secondary mx-2">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Edit
