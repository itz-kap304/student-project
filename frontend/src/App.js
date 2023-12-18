// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import StudentPage from './components/StudentPage';
import SessionPage from './components/SessionPage';
import BatchStdDetailsPage from './components/BatchStdDetailsPage';
import GetAllStdDetailsPage from './components/GetAllStdDetailsPage';
import Navbar from './components/Navbar';
import StudentTable from './components/StudentTable';
import BatchMaster from './components/BatchMaster';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
                
        <Routes>
          <Route path="/student" element={<StudentPage />} />
          <Route path="/session" element={<SessionPage />} />
          <Route path="/batch_std_details" element={<BatchStdDetailsPage />} />
          <Route path="/get_all_std_details" element={<GetAllStdDetailsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/StudentTable" element={<StudentTable />} />
          <Route path="/BatchMaster" element={<BatchMaster />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
