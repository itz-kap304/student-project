import React, { useState, useEffect } from "react";
import axios from "axios";

const GetAllStdDetailsPage = () => {
  const [studentID, setStudentID] = useState("");
  const [batchID, setBatchID] = useState("");

  const [responseData, setResponseData] = useState(null);
  const [responseBatch, setResponseBatch] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/get_all_std_details", { studentID })
      .then((response) => {
        console.log("Form data received from backend:", response.data);
        setResponseData(response.data);
        console.log(responseData.data);
        setStudentID(""); 
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/get_batch_students", { batchID })
      .then((response) => {
        console.log("Form data received from backend:", response.data);
        setResponseBatch(response.data);
        console.log(responseBatch);
        setBatchID(""); 
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    
    if (responseBatch !== null) {
      console.log("responseBatch : ", responseBatch);
    }
  }, [responseBatch]); 

  const tableView = (responseBatch) => {
    let result = [];
    responseBatch.name.forEach((_, index) =>
      result.push(
        <tr key={index}>
          <td className="border border-gray-500 px-4 py-2">
            {responseBatch.student_id[index]}
          </td>
          <td className="border border-gray-500 px-4 py-2">
            {responseBatch.name[index]}
          </td>
          <td className="border border-gray-500 px-4 py-2">
            {new Date(responseBatch.DOB[index]).toLocaleDateString("en-GB")}
          </td>
          <td className="border border-gray-500 px-4 py-2">
            {responseBatch.father_name[index]}
          </td>
          <td className="border border-gray-500 px-4 py-2">
            {responseBatch.mother_name[index]}
          </td>
          <td className="border border-gray-500 px-4 py-2">
            {responseBatch.address[index]}
          </td>
        </tr>
      )
    );
    return result;
  };

  return (
    <div className="page-background bg-purple-200 h-full">
      <div className="form-container mx-auto w-1/3 p-4 ">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-100 p-4 rounded-lg shadow-md flex flex-col items-center mt-12"
        >
          <div className="flex flex-col mb-2">
            <h2 className="text-2xl font-bold my-8 mb-8 flex justify-center">
              Student Detail Extract
            </h2>
            <label className="mb-2 ">Student ID:</label>
            <input
              type="text"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div className="flex">
            <button
              className="mx-2 bg-blue-500 text-white font-bold rounded hover:bg-green-500 mt-5 mb-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center">
        {responseData && Object.keys(responseData).length === 0 ? (
          <h2 className="font-bold text-2xl mt-4 text-red-600">
            Student not Mapped or Doesn't Exist!
          </h2>
        ) : null}

        {responseData && Object.keys(responseData).length > 0 ? (
          <table className="border-collapse border border-gray-500 mt-14 ">
            <thead>
              <tr>
                <th className="border border-black bg-blue-300 px-4 py-2">
                  Student ID
                </th>
                <th className="border border-black bg-blue-300 px-4 py-2">
                  Name
                </th>
                <th className="border border-black bg-blue-300 px-4 py-2">
                  DOB
                </th>
                <th className="border border-black bg-blue-300 px-4 py-2">
                  Father's Name
                </th>
                <th className="border border-black bg-blue-300 px-4 py-2">
                  Mother's Name
                </th>
                <th className="border border-black bg-blue-300 px-4 py-2">
                  Class
                </th>
                <th className="border border-black bg-blue-300 px-4 py-2">
                  Batch
                </th>
                <th className="border border-black bg-blue-300 px-4 py-2">
                  Address
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border border-gray-500 px-4 py-2">
                  {responseData.std_details.student_id}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {responseData.std_details.name}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {new Date(responseData.std_details.DOB).toLocaleDateString(
                    "en-GB"
                  )}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {responseData.std_details.father_name}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {responseData.std_details.mother_name}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {responseData.data[0][1]}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {responseData.batch_details}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {responseData.std_details.address}
                </td>
              </tr>
            </tbody>
          </table>
        ) : null}
      </div>

      {/* form 2 */}

      <div className="form-container mx-auto w-1/3 p-4 ">
        <form
          onSubmit={handleSubmit2}
          className="bg-blue-100 p-4 rounded-lg shadow-md flex flex-col items-center mt-12"
        >
          <div className="flex flex-col mb-2">
            <h2 className="text-2xl font-bold my-8 mb-8 flex justify-center">
              Batch Detail Extract
            </h2>
            <label className="mb-2 ">Batch ID:</label>
            <input
              type="text"
              value={batchID}
              onChange={(e) => setBatchID(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div className="flex">
            <button
              className="mx-2 bg-blue-500 text-white font-bold rounded hover:bg-green-500 mt-5 mb-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center">
        {responseBatch && Object.keys(responseBatch).length === 0 ? (
          <h2 className="font-bold text-2xl mt-4 mb-12 text-red-600">
            Batch not Mapped to any Student!
          </h2>
        ) : null}

        {responseBatch && Object.keys(responseBatch).length > 0 ? (
          <table className="border-collapse border border-gray-500 my-14 ">
            <thead>
              <tr>
                <th className="border border-black bg-blue-300 px-4 py-2">
                  Student ID
                </th>
                <th className="border border-black bg-blue-300 px-4 py-2">
                  Name
                </th>
                <th className="border border-black bg-blue-300 px-4 py-2">
                  DOB
                </th>
                <th className="border border-black bg-blue-300 px-4 py-2">
                  Father's Name
                </th>
                <th className="border border-black bg-blue-300 px-4 py-2">
                  Mother's Name
                </th>
                <th className="border border-black bg-blue-300 px-4 py-2">
                  Address
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {responseBatch.name.map((_, index) => (
                <tr key={index}>
                  <td className="border border-gray-500 px-4 py-2">
                    {responseBatch.student_id[index]}
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    {responseBatch.name[index]}
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    {new Date(responseBatch.DOB[index]).toLocaleDateString(
                      "en-GB"
                    )}
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    {responseBatch.father_name[index]}
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    {responseBatch.mother_name[index]}
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    {responseBatch.address[index]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default GetAllStdDetailsPage;
