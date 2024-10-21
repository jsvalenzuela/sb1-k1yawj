import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-indigo-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My Psychology Practice</h1>
        <p className="text-xl mb-8">Empowering you to live your best life through compassionate care and evidence-based therapy.</p>
        <a href="#contact" className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition duration-300">Book a Consultation</a>
      </div>
    </section>
  );
};

export default Hero;