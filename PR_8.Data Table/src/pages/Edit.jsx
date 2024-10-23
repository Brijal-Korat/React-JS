import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Edit = () => {

  const location = useLocation();

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [date, setDate] = useState('');
  const [editId, setEditId] = useState("");

  const [allRecord, setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [])

  useEffect(() => {
    setName(location?.state?.name)
    setEmail(location?.state?.email)
    setGender(location?.state?.gender)
    setSelectedCourses(location?.state?.selectedCourses)
    setDate(location?.state?.date)
    setEditId(location?.state?.id)
  }, [location?.state])

  const handleSubmit = (e) => {
    e.preventDefault();

    let up = allRecord.map((val, i) => {
      if (val.id == editId) {
        val.name = name,
          val.email = email,
          val.gender = gender,
          val.selectedCourses = selectedCourses,
          val.date = date
      }
      return val;
    })
    localStorage.setItem("users", JSON.stringify(up));
    alert("Record updated..!");
    navigate('/');
  }

  const handleCourseChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCourses((prevCourses) => [...prevCourses, value]);
    } else {
      setSelectedCourses((prevCourses) =>
        prevCourses.filter((course) => course !== value)
      );
    }
  };

  useEffect(() => {
    console.log(location.state); 
  }, [location.state]);

  return (
    <div>
      <h2>Edit User React Route</h2>

      <form onSubmit={handleSubmit}>
        <label>Name :- </label>
        <input
          type='text'
          id='name'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <br />
        <label>Email :- </label>
        <input
          type='email'
          id='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <br />
        <label>Gender :- </label>
        <input
          type='radio'
          name='gender'
          id='male'
          onChange={(e) => setGender(e.target.value)}
          value={'male'}
        />
        Male
        <input
          type='radio'
          name='gender'
          id='female'
          onChange={(e) => setGender(e.target.value)}
          value={'female'}
        />
        Female
        <br />
        <br />
        <label>Course :- </label>
        <input
          type='checkbox'
          id='html'
          onChange={handleCourseChange}
          value='HTML'
        />
        HTML
        <input
          type='checkbox'
          id='css'
          onChange={handleCourseChange}
          value='CSS'
        />
        CSS
        <input
          type='checkbox'
          id='bootstrap'
          onChange={handleCourseChange}
          value='Bootstrap'
        />
        Bootstrap
        <input
          type='checkbox'
          id='js'
          onChange={handleCourseChange}
          value='JavaScript'
        />
        JavaScript
        <input
          type='checkbox'
          id='php'
          onChange={handleCourseChange}
          value='PHP'
        />
        PHP
        <input
          type='checkbox'
          id='react'
          onChange={handleCourseChange}
          value='React-js'
        />
        React-js
        <input
          type='checkbox'
          id='node'
          onChange={handleCourseChange}
          value='Node-js'
        />
        Node-js
        <input
          type='checkbox'
          id='laravel'
          onChange={handleCourseChange}
          value='Laravel'
        />
        Laravel
        <input
          type='checkbox'
          id='angular'
          onChange={handleCourseChange}
          value='Angular'
        />
        Angular
        <input
          type='checkbox'
          id='python'
          onChange={handleCourseChange}
          value='Python'
        />
        Python

        <br />
        <br />
        <label>Date :- </label>
        <input
          type='date'
          id='date'
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <br />
        <br />
        <button type='submit'>Submit</button>
        <button type='reset'>Reset</button>
        <br />
        <br />
      </form>

      <Link to={'/'}>View</Link>
    </div>
  )
}

export default Edit;
