import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {

  const [input, setInput] = useState([
    { id: Math.floor(Math.random() * 10000), name: "", email: "", salary: "" }
  ]);

  const plus = () => {
    let plusAction = { id: Math.floor(Math.random() * 10000), name: "", email: "", salary: "" };
    setInput([...input, plusAction]);
  }

  const deleteRow = (id) => {
    let updatedInput = input.filter(val => val.id !== id);
    setInput(updatedInput);
  }

  const handleChange = (id, event) => {
    const { name, value } = event.target;
    const updatedInput = input.map(item =>
      item.id === id ? { ...item, [name]: value } : item
    );
    setInput(updatedInput);
  }

  return (
    <div align="center" className="container">
      <h1 className="m-4">Manage Employee Details</h1>
      <table className="table table-hover table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Salary</th>
            <th scope="col" width="80px">
              <button onClick={plus} className="btn btn-success btn-sm fw-bold">
                 ADD +
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            input.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={item.name}
                    onChange={(e) => handleChange(item.id, e)}
                    className="form-control form-control-sm"
                    placeholder="Enter full name"
                  />
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={item.email}
                    onChange={(e) => handleChange(item.id, e)}
                    className="form-control form-control-sm"
                    placeholder="Enter email address"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="salary"
                    value={item.salary}
                    onChange={(e) => handleChange(item.id, e)}
                    className="form-control form-control-sm"
                    placeholder="Enter salary"
                  />
                </td>
                <td>
                  <button
                    onClick={() => deleteRow(item.id)}
                    className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
