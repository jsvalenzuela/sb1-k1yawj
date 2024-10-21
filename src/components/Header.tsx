import React from 'react';
import { Brain } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Brain className="h-8 w-8 text-indigo-600 mr-2" />
          <span className="text-xl font-semibold text-gray-800">Dr. Jane Smith</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#services" className="text-gray-600 hover:text-indigo-600">Services</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-indigo-600">About</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;