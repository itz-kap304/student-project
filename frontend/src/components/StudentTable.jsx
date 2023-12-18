import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/StudentTable'); 
        setStudents(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-10 mt-6 flex justify-center">Student List</h1>

      

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border border-black bg-blue-300 px-4 py-2">Student ID</th>
            <th className="border border-black bg-blue-300 px-4 py-2">Name</th>
            <th className="border border-black bg-blue-300 px-4 py-2">Date of Birth</th>
            <th className="border border-black bg-blue-300 px-4 py-2">Father's Name</th>
            <th className="border border-black bg-blue-300 px-4 py-2">Mother's Name</th>
            <th className="border border-black bg-blue-300 px-4 py-2">Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            
            <tr key={student.student_id}>
              <td className="border border-black px-4 py-2">{student.student_id}</td>
              <td className="border border-black px-4 py-2">{student.name}</td>
              <td className="border border-black px-4 py-2">{new Date(student.DOB).toLocaleDateString('en-GB')}</td>
              <td className="border border-black px-4 py-2">{student.father_name}</td>
              <td className="border border-black px-4 py-2">{student.mother_name}</td>
              <td className="border border-black px-4 py-2">{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
