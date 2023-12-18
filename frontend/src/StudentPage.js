// StudentPage.js
import React, { useState } from 'react';
import axios from 'axios'
import './StudentPage.css'; // Import your custom stylesheet

const StudentPage = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    date_of_birth: '',
    father_name: '',
    mother_name: '',
    address: '',
  });

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('../backend/app.js', formData);
      console.log('Form data submitted successfully:', response.data);
      // Handle success or update UI accordingly
    } catch (error) {
      console.error('Failed to submit form data:', error);
      // Handle errors or update UI accordingly
    }
  };

  return (
    <div className="student-form-container">
      <h2>Student Details Form</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Father's Name:
          <input
            type="text"
            name="father_name"
            value={formData.father_name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Mother's Name:
          <input
            type="text"
            name="mother_name"
            value={formData.mother_name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentPage;
