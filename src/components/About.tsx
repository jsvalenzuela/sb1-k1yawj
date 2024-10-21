import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Dr. Jane Smith" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">About Dr. Jane Smith</h2>
            <p className="text-gray-700 mb-4">
              With over 15 years of experience, Dr. Jane Smith is a licensed clinical psychologist specializing in cognitive behavioral therapy, stress management, and relationship counseling. She is passionate about helping individuals and couples overcome challenges and achieve their full potential.
            </p>
            <p className="text-gray-700 mb-4">
              Dr. Smith received her Ph.D. in Clinical Psychology from Stanford University and has been in private practice for the past decade. Her approach combines evidence-based techniques with compassionate care to provide personalized treatment for each client.
            </p>
            <p className="text-gray-700">
              When not in the office, Dr. Smith enjoys hiking, practicing mindfulness, and spending time with her family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;