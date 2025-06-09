import React, { useState } from 'react';
import './form.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [name, setName] = useState('');
  const [std, setStandard] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentData = {
      name,
      std,
    };

    axios
      .post('http://localhost:2004/form', studentData)
      .then((res) => {
        console.log(res.data);
        // Optionally reset fields
        setName('');
        setStandard('');
        navigate("/dashboard")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="name">Student Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Enter student name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="standard">Standard:</label>
        <select
          id="standard"
          name="standard"
          value={std}
          onChange={(e) => setStandard(e.target.value)}
          required
        >
          <option value="">Select Standard</option>
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4th">4th</option>
          <option value="5th">5th</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
