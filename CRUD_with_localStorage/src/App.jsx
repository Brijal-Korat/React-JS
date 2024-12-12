import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [editId, setEditId] = useState("");

  const getRecord = () => {
    let all = localStorage.getItem("users");
    if (all) {
      return JSON.parse(localStorage.getItem("users"));
    } else {
      return [];
    }
    
  }

  const [allRecord, setAllRecord] = useState(getRecord());



  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: Math.floor(Math.random() * 10000),
      name: name,
      phone: phone
    }

    if (editId) {
      let up = allRecord.map((val) => {
        if (val.id == editId) {
          val.name = name,
            val.phone = phone
        }
        return val;
      })
      localStorage.setItem("users", JSON.stringify(up));
      alert("record updated successfully");
      setAllRecord(up);
      setName("");
      setPhone("");
      setEditId("");
    } else {
      let oldRecord = [...allRecord, obj];
      localStorage.setItem("users", JSON.stringify(oldRecord));
      setAllRecord(oldRecord);
      setName("");
      setPhone("");
    }
  }

  const userDelete = (id) => {
    let d = allRecord.filter(val => val.id != id);
    localStorage.setItem("users", JSON.stringify(d));
    alert("Record deleted..!");
    setAllRecord(d);
  }

  const userEdit = (id) => {
    let singleEdit = allRecord.find(val => val.id == id);
    setName(singleEdit.name);
    setPhone(singleEdit.phone);
    setEditId(id);
  }

  return (

    <div className="container">
      <div className="row justify-content-center">
        <h2 align="center">Crud App</h2>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-header">
            Add Users
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} value={phone} />
                </div>
                {
                  editId ? (
                    <button type="submit" className="btn btn-primary">Update User</button>
                  ) : (
                    <button type="submit" className="btn btn-primary">Add User</button>
                  )
                }
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              View Users
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">SrNo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    allRecord.map((val, i) => {
                      return (
                        <tr>
                          <th scope="row">{++i}</th>
                          <td>{val.name}</td>
                          <td>{val.phone}</td>
                          <td>
                            <button className="btn btn-danger" onClick={() => userDelete(val.id)}>Delete</button>&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-primary" onClick={() => userEdit(val.id)}>Edit</button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

