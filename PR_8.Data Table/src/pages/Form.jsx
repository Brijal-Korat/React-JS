import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [date, setDate] = useState('');

  const [allRecords, setAllRecords] = useState(
    localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
  );

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

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: Math.floor(Math.random() * 10000),
      name,
      email,
      gender,
      courses: selectedCourses,
      date,
      status: 'active'
    };

    const newRecord = [...allRecords, obj];
    localStorage.setItem('users', JSON.stringify(newRecord));
    alert('Record added..!');
    navigate('/');
  };

  const resetData = () => {
    setName("");
    setEmail("");
    setGender("");
    setSelectedCourses("");
    setDate("");
  }

  return (
    <div>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>
        <label>Name :- </label>
        <input
          type='text'
          id='name'
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <br />
        <br />
        <label>Email :- </label>
        <input
          type='email'
          id='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <br />
        <br />
        <label>Password :- </label>
        <input type='password' id='password' required />
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
          required
        />
        <br />
        <br />
        <button type='submit'>Submit</button>
        <button onClick={resetData}>Reset</button>
        <br />
        <br />
      </form>

      <Link to={'/'}>View User</Link>
    </div>
  );
};

export default Form;
