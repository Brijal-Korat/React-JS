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
      return;
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

  // return (
  //   <div>
  //     <h1 align="center">CRUD App</h1>
  //     <section style={{ marginTop: "25px" }}>
  //       <div className="container">
  //         <div className="row">
  //           <div
  //             className="card"
  //             style={{
  //               width: "20rem",
  //               marginTop: "20px",
  //               backgroundColor: "white",
  //               margin: "0 auto",
  //               padding: "20px",
  //               border: "1px solid black",
  //             }}
  //           >
  //             <div className="card-body">
  //               <form>
  //                 <div className="mb-3">
  //                   <label style={{ textAlign: "left", fontSize: "20px" }}>
  //                     <h5>Title </h5>
  //                   </label>
  //                   <br />
  //                   <input
  //                     type="text"
  //                     id="title"
  //                     placeholder="Title"
  //                     value={title}
  //                     onChange={(e) => setTitle(e.target.value)}
  //                     style={{
  //                       marginTop: "5px",
  //                       width: "240px",
  //                       padding: "10px",
  //                       outline: "none",
  //                       fontSize: "14px",
  //                     }}
  //                   />
  //                 </div>
  //                 <div className="mb-4" style={{ marginTop: "20px" }}>
  //                   <input type="hidden" id="editid" />
  //                   <label style={{ textAlign: "left", fontSize: "20px" }}>
  //                     <h5>Take a note</h5>
  //                   </label>
  //                   <br />
  //                   <input
  //                     type="text"
  //                     id="take"
  //                     placeholder="Take a note"
  //                     value={take}
  //                     onChange={(e) => setTake(e.target.value)}
  //                     style={{
  //                       marginTop: "5px",
  //                       width: "240px",
  //                       padding: "10px",
  //                       outline: "none",
  //                       fontSize: "14px",
  //                     }}
  //                   />
  //                 </div>
  //                 <div className="d-flex">
  //                   <button
  //                     type="button"
  //                     id="add"
  //                     onClick={addNote}
  //                     style={{
  //                       border: "none",
  //                       margin: "20px auto",
  //                       display: "block",
  //                       backgroundColor: "#032450",
  //                       color: "white",
  //                       padding: "10px",
  //                       borderRadius: "10px",
  //                     }}
  //                   >
  //                     <i className="fas fa-plus" />
  //                   </button>
  //                   <button
  //                     type="button"
  //                     id="edit"
  //                     onClick={updateNote}
  //                     style={{
  //                       border: "none",
  //                       margin: "20px auto",
  //                       display: "none",
  //                       backgroundColor: "#032450",
  //                       color: "white",
  //                       padding: "10px",
  //                       borderRadius: "10px",
  //                     }}
  //                   >
  //                     <i className="fas fa-edit" />
  //                   </button>
  //                 </div>
  //               </form>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>

  //     <section>
  //       <div className="container">
  //         <div className="row" id="record">
  //           {allData.map((val) => (
  //             <div className="col-md-3 mt-5" key={val.id}>
  //               <div
  //                 className="card"
  //                 style={{
  //                   width: "18rem",
  //                   backgroundColor: "white",
  //                   border: "1px solid black",
  //                   textAlign: "center",
  //                   padding: "20px",
  //                 }}
  //               >
  //                 <div className="card-body">
  //                   <p className="card-text" style={{ fontSize: "20px" }}>
  //                     <b>Title:- </b> {val.title}
  //                   </p>
  //                   <p className="card-text" style={{ fontSize: "20px" }}>
  //                     <b>Your Note:- </b> {val.take}
  //                   </p>
  //                   <div className="d-flex align-items-center justify-content-center mt-5">
  //                     <div>
  //                       <button
  //                         type="button"
  //                         onClick={() => deleteNote(val.id)}
  //                       >
  //                         <i className="fa-solid fa-trash" />
  //                       </button>
  //                     </div>
  //                     <div>
  //                       <button
  //                         type="button"
  //                         onClick={() => editNote(val.id)}
  //                       >
  //                         <i className="fa-regular fa-pen-to-square" />
  //                       </button>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );
}

export default App;
