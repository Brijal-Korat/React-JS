import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const Table = () => {
  const navigate = useNavigate();
  const allUsers = JSON.parse(localStorage.getItem("users")) || [];

  const [record, setRecord] = useState(allUsers);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const userDelete = (id) => {
    const updatedRecords = record.filter(val => val.id !== id);
    localStorage.setItem("users", JSON.stringify(updatedRecords));
    setRecord(updatedRecords);
    alert("Record deleted!");
  };

  const handleBulkDelete = () => {
    const updatedRecords = record.filter(user => !selectedUsers.includes(user.id));
    localStorage.setItem("users", JSON.stringify(updatedRecords));
    setRecord(updatedRecords);
    setSelectedUsers([]);
    alert("Selected records deleted!");
  };

  const changeStatus = (id, st) => {
    const newStatus = st === "active" ? "deactive" : "active";
    const updatedRecords = record.map((user) => {
      if (user.id === id) {
        return { ...user, status: newStatus };
      }
      return user;
    });
    localStorage.setItem("users", JSON.stringify(updatedRecords));
    setRecord(updatedRecords);
    alert("Status changed!");
  };

  const handleCheckboxChange = (id) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter(userId => userId !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  useEffect(() => {
    let filtered = [...allUsers];

    if (status !== "") {
      filtered = filtered.filter(val => val.status === status);
    }

    if (search !== "") {
      filtered = filtered.filter(val => val.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (sort === "ascending") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "descending") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setRecord(filtered);
  }, [status, search, sort, allUsers]);

  const resetData = () => {
    setStatus("");
    setSearch("");
    setSort("");
    setRecord(allUsers);
    setSelectedUsers([]);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">View Users</h2>

      <div className="d-flex justify-content-between mb-3">
        <div className="form-group">
          <select className="form-control" onChange={(e) => setStatus(e.target.value)} value={status}>
            <option value="">--- Filter by status ---</option>
            <option value="active">Active</option>
            <option value="deactive">Deactive</option>
          </select>
        </div>

        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search by name..." onChange={(e) => setSearch(e.target.value)} value={search} />
        </div>

        <div className="form-group">
          <select className="form-control" onChange={(e) => setSort(e.target.value)} value={sort}>
            <option value="">--- Sort by name ---</option>
            <option value="ascending">A-Z</option>
            <option value="descending">Z-A</option>
          </select>
        </div>

        <button className="btn btn-secondary" onClick={resetData}>Reset</button>
      </div>

      <table className="table table-bordered table-striped text-center">
        <thead className="thead-dark">
          <tr>
            <th>Select to Delete</th>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {record.length > 0 ? (
            record.map((u, i) => {
              const { id, name, phone, status } = u;
              return (
                <tr key={i}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(id)}
                      onChange={() => handleCheckboxChange(id)}
                    />
                  </td>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{phone}</td>
                  <td>
                    <button
                      onClick={() => changeStatus(id, status)}
                      className={`btn btn-sm ${status === "active" ? 'btn-success' : 'btn-danger'}`}>
                      {status}
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-danger me-2" onClick={() => userDelete(id)}>Delete</button>
                    <button className="btn btn-sm btn-warning" onClick={() => navigate(`/edit`, { state: u })}>Edit</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="6">No records found</td>
            </tr>
          )}
        </tbody>
      </table>

      {selectedUsers.length > 0 && (
        <div className="mb-3">
          <button className="btn btn-danger" onClick={handleBulkDelete}>
            Delete Selected ({selectedUsers.length})
          </button>
        </div>
      )}

      <div className="text-center">
        <Link to="/add" className="btn btn-primary">Add New User</Link>
      </div>
    </div>
  );
};

export default Table;
