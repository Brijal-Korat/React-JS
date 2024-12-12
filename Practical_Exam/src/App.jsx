import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Edit from "./components/Edit";
import Add from "./components/Add";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<Add />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit" element={<Edit />} /> 
      </Routes>
    </BrowserRouter>

  );
}

export default App;
