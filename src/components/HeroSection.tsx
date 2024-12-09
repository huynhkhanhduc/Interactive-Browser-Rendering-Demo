import React from 'react';
import { Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Globe className="w-16 h-16 text-indigo-600 dark:text-indigo-400 animate-pulse" />
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          How Browsers Turn Code Into Websites
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Explore the step-by-step process of rendering HTML, CSS, and JavaScript in a browser
        </p>
        <div className="relative max-w-2xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 flex items-center">
            <span className="text-gray-400">https://</span>
            <span className="text-gray-800 dark:text-gray-200 ml-1 typewriter">example.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;