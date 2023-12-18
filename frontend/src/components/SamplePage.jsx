// ExampleComponent.js
import '../styles/tailwind.css';
import React from 'react';

const ExampleComponent = () => {
  return (
    <div className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold !important">Hello, Tailwind!</h1>
        <p className="mt-2">Tailwind CSS is initialized in your React application.</p>
        <p className="text-red-500">This text should be red if Tailwind is working.</p>
    </div>

  );
};

export default ExampleComponent;
