import React from 'react'

const Add = () => {
  return (
    <div align="center">
      <h2>Add user</h2>

      <form>
        <table border={1}>
            <tr>
                <td>Name :- </td>
                <td><input type="text" name="name" /></td>
            </tr>
            <tr>
                <td>Phone :- </td>
                <td><input type="text" name="phone" /></td>
            </tr>
        </table>
      </form>
    </div>
  )
}

export default Add;
