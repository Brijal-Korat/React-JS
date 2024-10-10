import React from 'react'

const Table = ({allUsers, deleteData}) => {
  return (
    <div>
      <h2>View Users</h2>
      <table border={1}>
        <thead>
            <tr>
                <th>SrNo</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                allUsers.map((users, index) => {
                    return(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{users.name}</td>
                            <td>{users.phone}</td>
                            <td>
                                <button onClick={() => deleteData(users.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
