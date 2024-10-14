import React from 'react'
import { Link } from 'react-router-dom'

const Table = () => {
  return (
    <div>
      <h2>View User</h2>
      <Link to={"/form"}>Add</Link>
    </div>
  )
}

export default Table;