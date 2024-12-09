import React, { useState } from 'react';
import { Layout } from 'lucide-react';

const RenderTreeSection = () => {
  const [showElement, setShowElement] = useState(true);

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Render Tree & Layout
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Layout className="w-6 h-6 text-purple-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Layout Controls</h3>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => setShowElement(!showElement)}
                className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Toggle Element Visibility
              </button>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>Watch how the render tree updates when elements are hidden or shown.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Visual Output</h3>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              {showElement && (
                <div className="transition-all duration-300 transform">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white p-4 rounded-lg mb-4">
                    Header Element
                  </div>
                  <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-4 rounded-lg">
                    Content Element
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenderTreeSection;