import React from 'react';
import { Heart, Users, Brain, Smile } from 'lucide-react';

const services = [
  { icon: Heart, title: 'Individual Therapy', description: 'One-on-one sessions tailored to your unique needs.' },
  { icon: Users, title: 'Couples Counseling', description: 'Strengthen your relationship and improve communication.' },
  { icon: Brain, title: 'Cognitive Behavioral Therapy', description: 'Evidence-based approach to change negative thought patterns.' },
  { icon: Smile, title: 'Stress Management', description: 'Learn effective techniques to cope with daily stressors.' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;