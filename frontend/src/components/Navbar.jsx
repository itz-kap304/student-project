import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-black flex justify-center p-10 ">
        <a href="/" className="nav-btn">Home</a>
        <a href="/student" className="nav-btn">Student</a>
        <a href="/session" className="nav-btn">Batch Details</a>
        <a href="/batch_std_details" className="nav-btn">Batch Mapping</a>
        <a href="/get_all_std_details" className="nav-btn">Student Details</a>
    </div>
  )
}

export default Navbar