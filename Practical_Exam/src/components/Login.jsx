import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      alert("Invalid Email or Password... Please Check...");
    } else {
      localStorage.setItem("checkuser", JSON.stringify(user));
      navigate("/dashboard");
    }
  };

  return (
    <div className="container my-4">
    <div className="card">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h4>Login User</h4>
      </div>
      <div className="card-body">
        <form className="p-4 border rounded bg-light">
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

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          <div className="d-flex">
            <button
              type="button"
              className="btn btn-primary me-3"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              type="reset"
              className="btn btn-secondary"
              onClick={() => {
                setEmail("");
                setPassword("");
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Login;
