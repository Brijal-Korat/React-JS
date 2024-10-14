import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <div>
        <h2>Add User</h2>
        <input type="text" />
        <Link to={"/"}>View</Link>
    </div>
  )
}

export default Form;