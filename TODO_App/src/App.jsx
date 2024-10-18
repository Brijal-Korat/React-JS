import { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [allTask, setAllTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id : Math.floor(Math.random() * 100000),
      task : task,
      status : 'active'
    }

    let newRecord = [...allTask, obj];
    setAllTask(newRecord);
    setTask("");
  }

  const changeStatus = (id,st) => {
    if(st === "active"){
      let up = allTask.map((val) => {
        if(val.id == id){
          val.status = "deactive";
        }
        return val;
      })
      setAllTask(up);
      alert("Status changed..!");
    }else{
      let up = allTask.map((val) => {
        if(val.id == id){
          val.status = "active";
        }
        return val;
      })
      setAllTask(up);
      alert("Status changed..!");
    }
  }

  return (
    <>
      <div align="center">
        <h2>Add Task</h2>

        <form onSubmit={handleSubmit}>
          Task :- <input type="text" onChange={(e) => setTask(e.target.value)} value={task} />
          <button type="submit">Add</button>
        </form>

        <h2>View Task</h2>
        <table border={1}>
            <thead>
              <tr>
                <th>SrNo</th>
                <th>Task</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                allTask.map((t,i) => {
                  const { id, task, status } = t;

                  return(
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{task}</td>
                      <td>
                        {
                          status === "active" ? (
                            <button onClick={() => changeStatus(id, status)} style={{backgroundColor : "green"}}> {status} </button>
                          ) : (
                            <button onClick={() => changeStatus(id, status)} style={{backgroundColor : "red"}}> {status} </button>
                          )
                        }
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
        </table>
      </div>
    </>
  )
}

export default App;