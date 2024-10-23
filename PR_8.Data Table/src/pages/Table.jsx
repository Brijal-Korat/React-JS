import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Table = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const allUsersRecord = JSON.parse(localStorage.getItem('users')) || [];

  const [records, setRecords] = useState(allUsersRecord);
  const [mulDelete, setMulDelete] = useState([]);
  const [mulStatusChange, setMulStatusChange] = useState([]);

  const deleteFunction = (id) => {
    let d = records.filter((val) => val.id !== id);
    localStorage.setItem('users', JSON.stringify(d));
    setRecords(d);
    alert('Record deleted..!');
  };

  const changeStatus = (id, status) => {
    let updatedRecords = records.map((record) => {
      if (record.id === id) {
        record.status = status === 'active' ? 'deactive' : 'active';
      }
      return record;
    });

    localStorage.setItem('users', JSON.stringify(updatedRecords));
    setRecords(updatedRecords);
    alert('Status changed..!');
  };

  useEffect(() => {
    let filtered = [...allUsersRecord];

    if (status != "") {
      filtered = filtered.filter(val => val.status === status);
    } else {
      setRecords(allUsersRecord);
    }

    if (search != "") {
      filtered = filtered.filter(val =>
        val.name.toLowerCase().includes(search.toLowerCase())
      )
    } else {
      setRecords(allUsersRecord);
    }

    if (sort === "ascending") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "descending") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setRecords(filtered);

  }, [status, search, sort]);

  const resetData = () => {
    setSort("");
    setSearch("");
    setStatus("");
    setRecords(allUsersRecord);
  }

  const multipleDeleteRecord = (id, checked) => {
    let old = [...mulDelete];
    if (checked) {
      old.push(id)
    } else {
      old = old.filter(val => val != id);
    }
    setMulDelete(old);
  }

  const multipleDelete = () => {
    let d = records.filter(val => !mulDelete.includes(val.id));
    localStorage.setItem("users", JSON.stringify(d));
    setRecords(d);
    alert("Selected records has been Deleted..!");
  }

  const multipleStatusChange = (id, checked) => {
    let old = [...mulStatusChange];
    if (checked) {
      old.push(id)
    } else {
      old = old.filter(val => val != id);
    }
    setMulStatusChange(old);
  }

  const multipleStatus = () => {
    let updatedRecords = records.map((statusRecord) => {
      if (mulStatusChange.includes(statusRecord.id)) {
        statusRecord.status = statusRecord.status === 'active' ? 'deactive' : 'active';
      }
      return statusRecord;
    });

    localStorage.setItem('users', JSON.stringify(updatedRecords));
    setRecords(updatedRecords);
    alert("Status of selected records has been changed..!");
  }

  return (
    <div align='center'>
      <h2>View Data</h2>

      <select onChange={(e) => setStatus(e.target.value)} value={status}>
        <option value="">--- Select Status ---</option>
        <option value="active">Active</option>
        <option value="deactive">Deactive</option>
      </select>

      <input
        type="text"
        placeholder='Search Here....'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      <select onChange={(e) => setSort(e.target.value)} value={sort}>
        <option value="">--- Select Sort ---</option>
        <option value="ascending">A-Z</option>
        <option value="descending">Z-A</option>
      </select>

      <button onClick={resetData}>Reset</button>

      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            <th>
              <button onClick={() => multipleDelete()}>
                Selected Delete ({mulDelete.length})
              </button>
            </th>
            <th>
              <button onClick={() => multipleStatus()}>
                Selected Status ({mulStatusChange.length})
              </button>
            </th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((rcd, i) => {
              const { id, name, email, gender, courses, date, status } = rcd;

              return (
                <tr key={i}>
                  <td align='center'>
                    <input
                      type="checkbox"
                      onChange={(e) => multipleDeleteRecord(id, e.target.checked)}
                      checked={mulDelete.includes(rcd.id)}
                    />
                  </td>
                  <td align='center'>
                    <input
                      type="checkbox"
                      onChange={(e) => multipleStatusChange(id, e.target.checked)}
                      checked={mulStatusChange.includes(rcd.id)}
                    />
                  </td>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{gender}</td>
                  <td>{courses.join(',  ')}</td>
                  <td>{date}</td>
                  <td>
                    <button onClick={() => changeStatus(id, status)} style={{ backgroundColor: status === 'active' ? 'green' : 'red' }}>
                      {status}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => deleteFunction(id)}>Delete</button>
                    <button onClick={() => navigate(`/edit`, { state: rcd })}>Edit</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="8">No records found</td>
            </tr>
          )}
        </tbody>
      </table>

      <Link to={'/add'}>Add user</Link>
    </div>
  );
};

export default Table;
