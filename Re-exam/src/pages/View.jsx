import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const View = () => {

    const navigate = useNavigate();
    const allUsersRecord = JSON.parse(localStorage.getItem('users')) || [];

    const [records, setRecords] = useState(allUsersRecord);

    const deleteFunction = (id) => {
        let d = records.filter((val) => val.id !== id);
        localStorage.setItem('users', JSON.stringify(d));
        setRecords(d);
        alert('Record deleted successfully..!');
    };

    const changeStatus = (id, status) => {
        let updatedRecords = records.map((records) => {
            if (records.id === id) {
                records.status = status === 'active' ? 'deactive' : 'active';
            }
            return records;
        });

        localStorage.setItem('users', JSON.stringify(updatedRecords));
        setRecords(updatedRecords);
        alert('Status changed..!');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white text-center">
                            <h3>Employee Records</h3>
                        </div>
                        <div className="card-body">

                            <table className="table table-striped table-bordered">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Sr No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>City</th>
                                        <th>Gender</th>
                                        <th>Salary</th>
                                        <th>Degignation</th>
                                        <th>Actions</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        records.length > 0 ? (
                                            records.map((viewRecord, index) => {
                                                const { id, name, email, city, gender, salary, degignation, status } =
                                                    viewRecord;
                                                return (
                                                    <tr key={id}>
                                                        <td>{index + 1}</td>
                                                        <td>{name}</td>
                                                        <td>{email}</td>
                                                        <td>{city}</td>
                                                        <td>{gender}</td>
                                                        <td>{salary}</td>
                                                        <td>{degignation}</td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <button
                                                                    className="btn btn-warning"
                                                                    onClick={() =>
                                                                        navigate(`/edit`, { state: viewRecord })
                                                                    }
                                                                >
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    className="btn btn-danger"
                                                                    onClick={() => deleteFunction(id)}
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className={`btn btn-${status === 'active' ? 'success' : 'danger'}`}
                                                                onClick={() => changeStatus(id, status)}
                                                            >
                                                                {status}
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <div align="center">
                                                <p>There is no records found.</p>
                                            </div>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer text-center">
                            <Link to={`/`} className="btn btn-success">
                                Add New Employee
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
