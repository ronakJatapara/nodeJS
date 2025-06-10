import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../css/addData.css";

function AddData() {
  const [name, setName] = useState("");
  const [gerne, setGenre] = useState("");
  const [year, setYear] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const movie = { name, gerne, year };

    try {
      const res = await axios.post("http://localhost:2004/addData", movie);
      console.log(res);
      navigate("/home");
    } catch (err) {
      console.error("Error adding movie:", err);
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit} style={{width:"400px"}}>
        <div className="form-group">
          <label htmlFor="name">Movie Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter movie name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            name="genre"
            value={gerne}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Enter genre"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Release Year:</label>
          <input
            type="text"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="e.g., 2024"
            required
          />
        </div>

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddData;
