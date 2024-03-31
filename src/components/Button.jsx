import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-white text-indigo-700 py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-indigo-100 hover:text-indigo-800 transition duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
