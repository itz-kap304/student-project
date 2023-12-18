import React, { useState } from 'react';
import axios from 'axios';

const BatchStdDetailsPage = () => {
  const [formData, setFormData] = useState({
    batch_id: '',
    student_id: '',
  });

const [responseData, setResponseData] = useState(null);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleSubmit1 = (e) => {
  e.preventDefault();
  axios
    .post('http://localhost:4000/batch_std_details', formData)
    .then((response) => {
      console.log('Form data submitted to backend:', response.data);
      setResponseData(response.data)
      setFormData({
        batch_id: '',
        student_id: '',
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <div className="background bg-purple-200 ">
        <div className="batch-std-details-container  bg-blue-200 p-12 rounded-md shadow-md">
          <h2 className="heading text-center text-xl  font-bold ">Batch Student Allocation </h2>
          <h2 className="heading text-center text-xl mb-8 font-bold ">Form</h2>

          <form onSubmit={handleSubmit1} className="batch-std-details-form ">
            <div className="form-group mb-4">
              <label>
                Student ID:
                <input
                  type="text"
                  name="student_id"
                  value={formData.student_id}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                />
              </label>
            </div>

            <div className="form-group mb-4">
              <label>
                Batch ID:
                <input
                  type="text"
                  name="batch_id"
                  value={formData.batch_id}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                />
              </label>
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold mt-6 mx-24 py-2 px-4 rounded cursor-pointer hover:bg-green-500"
              >
                Submit
              </button>
            </div>

            {responseData && Object.keys(responseData).length === 0 ? (
          <h2 className="font-bold text-2xl mt-4 text-red-600">Student already Mapped </h2>
        ) : null}
            {responseData && Object.keys(responseData).length === 0 ? (
          <h2 className="font-bold text-2xl mt-4 text-red-600">or Doesn't Exist! </h2>
        ) : null}

            {responseData && Object.keys(responseData).length > 0 ? (
          <h2 className="font-bold text-2xl mt-4 text-green-600">Student Mapped Successfully!</h2>
        ) : null}
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default BatchStdDetailsPage;
