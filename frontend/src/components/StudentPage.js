import React, { useState } from "react";
import axios from "axios";

const StudentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    date_of_birth: "",
    father_name: "",
    mother_name: "",
    address: "",
  });

  const [responseData, setResponseData] = useState(null)


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/student", formData)
      .then((response) => {
        console.log("Form data submitted to backend:", response.data);
        setResponseData(response.data)
        setFormData({
          name: "",
          date_of_birth: "",
          father_name: "",
          mother_name: "",
          address: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-purple-200 pt-12 pb-10 h-full">
      <div className="max-w-md mx-auto p-8 bg-blue-200 rounded-lg shadow-md pt-8 mb-10">
        <h2 className="text-2xl font-bold mb-4 flex justify-center">Student Details Form</h2>
        <form onSubmit={handleSubmit}>
          <label className="block my-4">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          </label>
          <label className="block my-4">
            Date of Birth:
            <input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          </label>
          <label className="block my-4">
            Father's Name:
            <input
              type="text"
              name="father_name"
              value={formData.father_name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          </label>
          <label className="block my-4">
            Mother's Name:
            <input
              type="text"
              name="mother_name"
              value={formData.mother_name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          </label>
          <label className="block my-4">
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-green-500 font-bold my-4"
          >
            Submit
          </button>

          {responseData && Object.keys(responseData).length > 0 ? (
          <h2 className="font-bold text-2xl mt-4 text-green-600 flex justify-center">Student Created Successfully!</h2>
        ) : null}
        </form>
      </div>
    </div>
  );
};

export default StudentPage;
