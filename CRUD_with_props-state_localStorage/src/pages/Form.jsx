import React, { useState } from 'react'

const Form = ({addData}) => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            id : Math.floor(Math.random() * 10000),
            name : name,
            phone : phone
        }
        addData(obj);
        alert("Record added..!");
        setName("");
        setPhone("");
    }

  return (
    <div>
      <h2>Add Users</h2>
      <form onSubmit={handleSubmit}>
            <table border={1}>
                <tr>
                    <td>
                        <label>Name :- </label>
                    </td>
                    <td>
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Phone :- </label>
                    </td>
                    <td>
                        <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" /></td>
                </tr>
            </table>
      </form>
    </div>
  )
}

export default Form
