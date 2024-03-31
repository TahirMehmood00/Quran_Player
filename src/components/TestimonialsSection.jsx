import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Cards */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <p className="text-lg text-white mb-4">"The Quran Player has completely transformed my Quran listening experience. Highly recommended!"</p>
            <p className="text-sm text-gray-400">- Fatima A.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <p className="text-lg text-white mb-4">"I love the variety of recitations available on Quran Player. It's my go-to platform for Quran recitations."</p>
            <p className="text-sm text-gray-400">- Ahmed S.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <p className="text-lg text-white mb-4">"The user-friendly interface and high-quality audio make Quran Player stand out. Excellent work!"</p>
            <p className="text-sm text-gray-400">- Aisha K.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
