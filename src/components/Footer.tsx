import React from 'react';
import { Brain } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Brain className="h-8 w-8 text-indigo-400 mr-2" />
            <span className="text-xl font-semibold">Dr. Jane Smith</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#services" className="hover:text-indigo-400">Services</a></li>
              <li><a href="#about" className="hover:text-indigo-400">About</a></li>
              <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Dr. Jane Smith Psychology Practice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;