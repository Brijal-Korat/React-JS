import { useState } from "react";
import Form from "./pages/Form"
import Table from "./pages/Table"

function App() {

  let old = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
  const [allRecord, setAllRecord] = useState(old);
  const addRecord = (data) => {
    let newData = [...allRecord, data];
    localStorage.setItem("users", JSON.stringify(newData));
    setAllRecord(newData);
  }

  const deleteRecord = (id) => {
    let d = allRecord.filter(val => val.id != id);
    localStorage.setItem("users", JSON.stringify(d));
    setAllRecord(d);
    alert("Record deleted successfully");
  }

  return (
    <div>
      <Form addData = {addRecord}/>
      <Table 
        allUsers = {allRecord}
        deleteData = {deleteRecord}
      />
    </div>
  )
}

export default App
