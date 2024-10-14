import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [title, setTitle] = useState("");
  const [take, setTake] = useState("");
  const [editId, setEditId] = useState(null);

  let old = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
  const [allData, setAllData] = useState(old);


  const addNote = () => {
    if (!title || !take) {
      alert("Please fill all the fields...!");
      return false;
    }

    let newNote = {
      id: Math.floor(Math.random() * 10000),
      title,
      take,
    };

    const updatedData = [...allData, newNote];
    setAllData(updatedData);
    localStorage.setItem("take", JSON.stringify(updatedData));

    setTitle("");
    setTake("");
    alert("Note added..!");
  };

  const deleteNote = (id) => {
    const filteredData = allData.filter((note) => note.id !== id);
    setAllData(filteredData);
    localStorage.setItem("take", JSON.stringify(filteredData));
    alert("Note deleted..!");
  };

  const editNote = (id) => {
    const noteToEdit = allData.find((note) => note.id === id);
    setTitle(noteToEdit.title);
    setTake(noteToEdit.take);
    setEditId(id);
    document.getElementById("add").style.display = "none";
    document.getElementById("edit").style.display = "block";
  };

  const updateNote = () => {
    const updatedData = allData.map((note) => {
      if (note.id === editId) {
        return { ...note, title, take };
      }
      return note;
    });

    setAllData(updatedData);
    localStorage.setItem("take", JSON.stringify(updatedData));

    setTitle("");
    setTake("");
    setEditId(null);
    document.getElementById("add").style.display = "block";
    document.getElementById("edit").style.display = "none";
    alert("Updated successfully..!");
  };

  return (
    <div className="app-container">
      <h1 className="text-center my-4">My Notes</h1>

      <section className="form-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="card shadow-lg p-4 bg-white rounded" style={{ maxWidth: "400px" }}>
              <div className="card-body">
                <form>
                  <div className="form-group mb-3">
                    <label htmlFor="title" className="form-label">
                      <h5>Title</h5>
                    </label>
                    <input
                      type="text"
                      id="title"
                      placeholder="Enter note title"
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="take" className="form-label">
                      <h5>Write a Note</h5>
                    </label>
                    <input
                      type="text"
                      id="take"
                      placeholder="Enter your note"
                      className="form-control"
                      value={take}
                      onChange={(e) => setTake(e.target.value)}
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <button
                      type="button"
                      id="add"
                      className="btn btn-primary w-100 me-2"
                      onClick={addNote}
                    >
                      Add Note
                    </button>
                    <button
                      type="button"
                      id="edit"
                      className="btn btn-success w-100"
                      onClick={updateNote}
                      style={{ display: "none" }}
                    >
                      Update Note
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="notes-section py-5">
        <div className="container">
          <div className="row">
            {allData.length > 0 ? (
              allData.map((val) => (
                <div className="col-md-4 mb-4" key={val.id}>
                  <div className="card note-card shadow-sm p-3 bg-light rounded">
                    <div className="card-body">
                      <h5 className="card-title mb-3">{val.title}</h5>
                      <p className="card-text mb-4">{val.take}</p>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-danger" onClick={() => deleteNote(val.id)}>
                          <i className="fa-solid fa-trash"></i> Delete
                        </button>
                        <button className="btn btn-outline-primary" onClick={() => editNote(val.id)}>
                          <i className="fa-solid fa-edit"></i> Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No notes available. Add some notes!</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );

}

export default App;
