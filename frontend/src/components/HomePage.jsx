// HomePage.js
import React from "react";
import logo from '../assets/pic.jpg'
import logo2 from '../assets/pic2.jpg'

import "../styles/tailwind.css";

const HomePage = () => {
  return (
    <div className="bg-blue-200 text-black h-full">
      <div className="flex justify-center ">
        <h1 className="flex justify-center font-bold pt-8 text-4xl">Welcome</h1>
      </div>
      
      <div className="flex justify-center ">
        
        <h1 className="flex justify-center font-bold pt-8 text-2xl">To</h1>
      </div>

      <div className="flex justify-center ">
        
        <h1 className="text-4xl font-bold mb-8 my-10 bg-blue-200 ">
          Student Management Portal!
        </h1>
      </div>

        
      {/* <img
        src={logo}
        alt="Profile"
        className="h-60 w-60 rounded-full mr-4 border-double border-black border-8"
      /> */}


      <div className="mt-5 flex justify-center">
        <a href ="/StudentTable">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-14 rounded-lg -ml-8">Student Master</button>
        </a>
        <a href ="/BatchMaster">
          <button className=" bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-14 rounded-lg ml-12  ">
            Batch  Master 
          </button>
        </a>
      </div>


      <div className="flex justify-center mt-12">

       <img
        src={logo}
        alt="Profile"
        className="h-60 w-60 rounded-full "
      /> 
       <img
        src={logo2}
        alt="Profile"
        className="ml-14 h-60 w-60 rounded-full "
      /> 
      
      </div>

        <div className="flex justify-end mt-20 mr-28 ">
          <h1 className="font-bold text-xl">- Made by </h1>
        </div>
        <div className="flex justify-end mr-4 pb-12">
          <h1 className="font-bold text-xl">Shivank Kapila </h1>
        </div>
    
    </div>

      
  );
};

export default HomePage;
