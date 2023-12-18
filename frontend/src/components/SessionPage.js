import React, { useState } from "react";
import axios from "axios";
import "./SessionPage.css";

const SessionPage = () => {
  const [formData, setFormData] = useState({
    year: "",
    class: "",
  });

  const [responseData, setResponseData] = useState(null)
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    axios
      .post("http://localhost:4000/session", formData)
      .then((response) => {
        console.log("Form data submitted to backend:", response.data);
        setResponseData(response.data)
        setFormData({
          year: "",
          class: "",
        });
        
      })
      .catch((error) => {
        console.error("Error:", error);
        
      });
  };

  return (
    <div className="bg-purple-200">
      <div className="h-screen flex items-center justify-center">
        <div className="session-form-container bg-blue-200 p-8 rounded-lg shadow-md">
          <h2 className="heading text-xl font-bold flex justify-center mb-12">Session Details Form</h2>
          <form onSubmit={handleSubmit} className="session-form">
            <div className="form-group">
              <label>
                Batch Year:
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Class:
                <input
                  type="text"
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </label>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="bg-blue-500 text-white mx-24 mt-4 py-2 px-4 rounded-md hover:bg-green-500 font-bold"
              >
                Submit
              </button>
            </div>

            {responseData && Object.keys(responseData).length === 0 ? (
          <h2 className="font-bold text-2xl mt-4 text-red-600">Batch already Exists!</h2>
        ) : null}
            {responseData && Object.keys(responseData).length > 0 ? (
          <h2 className="font-bold text-2xl mt-4 text-green-600">Batch Created Successfully!</h2>
        ) : null}

          </form>
        </div>
      </div>

    </div>
  );
};

export default SessionPage;
