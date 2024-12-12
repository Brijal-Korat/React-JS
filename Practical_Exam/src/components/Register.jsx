import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { id: Date.now(), name, email, phone, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("User Registered Successfully...");
    navigate("/login");
  };

  return (
    <div className="main" align="center">
      <h2 style={{ color: "teal" }}>Register User</h2>
      <form>
        <label>Name:</label><br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <label>Email:</label><br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label>Phone:</label><br />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
        <label>Password:</label><br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button type="button" onClick={registerUser}>Register</button>
      </form>
    </div>
  );
};

export default Register;
