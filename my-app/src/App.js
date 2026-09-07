import "./App.css";

import React, { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    status: "present"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send to backend (Node.js + MySQL)
    await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    alert("Student record submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Student Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Student Number:</label>
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="present">Present</option>
          <option value="absent">Absent</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
