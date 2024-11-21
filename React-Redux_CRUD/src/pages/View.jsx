import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userChangeStatus, deleteUser } from "../redux/Action/crudAction";

const View = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [filterSearch, setFilterSearch] = useState("");

  const viewUsers = useSelector((state) => state.crudReducer.users) || [];

  const changeStatus = (id, st) => {
    let obj = { id, st };
    dispatch(userChangeStatus(obj));
    alert("Status changed successfully!");
  };

  const filteredUsers = viewUsers.filter((u) =>
    (u.name?.toLowerCase() || "").includes((filterSearch || "").toLowerCase())
  );

  return (
    <div align="center">
      <h2>View User</h2>

      <br />
      <div align="center">
        <input
          type="text"
          placeholder="Search by name..."
          value={filterSearch}
          onChange={(e) => setFilterSearch(e.target.value)}
        />
      </div>
      <br />

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.phone}</td>
              <td>
                <button onClick={() => dispatch(deleteUser(u.id))}>Delete</button>
                &nbsp; || &nbsp;
                <button onClick={() => navigate(`/edit`, { state: u })}>Edit</button>
              </td>
              <td>
                {u.status === "active" ? (
                  <button
                    onClick={() => changeStatus(u.id, u.status)}
                    style={{ backgroundColor: "green" }}
                  >
                    {u.status}
                  </button>
                ) : (
                  <button
                    onClick={() => changeStatus(u.id, u.status)}
                    style={{ backgroundColor: "red" }}
                  >
                    {u.status}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to={`/add`}>Add User</Link>
    </div>
  );
};

export default View;
