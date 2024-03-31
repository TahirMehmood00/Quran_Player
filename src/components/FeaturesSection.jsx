import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-16 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Variety of Recitations</h3>
            <p className="text-sm text-gray-400">Explore a wide range of recitations by renowned Qaris.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">User-Friendly Interface</h3>
            <p className="text-sm text-gray-400">Enjoy a seamless listening experience with our intuitive interface.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">High-Quality Audio</h3>
            <p className="text-sm text-gray-400">Experience crystal-clear audio for an immersive Quran recitation experience.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Responsive Design</h3>
            <p className="text-sm text-gray-400">Access Quran Player seamlessly on any device, anytime, anywhere.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
