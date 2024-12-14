import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [salary, setSalary] = useState("");
  const [degignation, setDegignation] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const [allRecords, setAllRecords] = useState(
    localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: Math.floor(Math.random() * 10000),
      name,
      email,
      password,
      city,
      salary,
      degignation,
      gender,
      status: 'active'
    };

    if (!name || !email || !password || !city || !salary || !degignation || !gender) {
      alert("Please fill all fields..!");
    } else {
      const newRecord = [...allRecords, obj];
      localStorage.setItem("users", JSON.stringify(newRecord));
      setAllRecords(newRecord);
      alert("Record added successfully..!");
      navigate("/view");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3>Add Employee Details</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-4 text-start">
                  <label className="form-label mb-2">Name :-</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
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
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-4 text-start">
                  <label className="form-label mb-2">Password :-</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Enter password"
                  />
                </div>
                <div className="mb-4 text-start">
                  <label className="form-label me-2">Gender :- </label>
                  <input
                    type="radio"
                    className="me-1"
                    name="gender"
                    id="male"
                    onChange={(e) => setGender(e.target.value)}
                    value="male"
                  />
                  Male
                  <input
                    type="radio"
                    className="mx-1"
                    name="gender"
                    id="female"
                    onChange={(e) => setGender(e.target.value)}
                    value="female"
                  />
                  Female
                </div>
                <div className="mb-4 text-start">
                  <label className="form-label mb-2">City :-</label>
                  <select
                    className="form-select"
                    id="city"
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
                  <label className="form-label mb-2">Salary :-</label>
                  <input
                    type="text"
                    className="form-control"
                    id="salary"
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
                    id="degignation"
                    onChange={(e) => setDegignation(e.target.value)}
                    value={degignation}
                    placeholder="Enter designation"
                  />
                </div>
                <button type="submit" className="btn btn-primary mx-3">
                  Submit
                </button>
                <Link to="/view" className="btn btn-success text-white">
                  View Employee Records
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
