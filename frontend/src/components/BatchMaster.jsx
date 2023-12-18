import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BatchMaster = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/BatchMaster'); 
        setSessions(response.data); 
        // console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-12 mt-6 flex justify-center">Academic Sessions</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border border-black bg-blue-300 px-4 py-2">Year</th>
            <th className="border border-black bg-blue-300 px-4 py-2">Class</th>
            <th className="border border-black bg-blue-300 px-4 py-2">Batch ID</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session, index) => (
            <tr key={index}>
              <td className="border border-black px-4 py-2 ">{session.year}</td>
              <td className="border border-black px-4 py-2">{session.Class}</td>
              <td className="border border-black px-4 py-2">{session.Batch_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BatchMaster;
