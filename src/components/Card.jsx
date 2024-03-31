import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      {children}
    </div>
  );
};

export default Card;
