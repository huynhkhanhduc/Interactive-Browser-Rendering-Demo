import React, { useState } from 'react';
import { Paintbrush } from 'lucide-react';

const CSSParsingSection = () => {
  const [activeStyle, setActiveStyle] = useState({
    color: '#3B82F6',
    fontSize: '24px',
    padding: '16px'
  });

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          CSS Parsing & CSSOM
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Paintbrush className="w-6 h-6 text-green-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Style Controls</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Color
                </label>
                <input
                  type="color"
                  value={activeStyle.color}
                  onChange={(e) => setActiveStyle({ ...activeStyle, color: e.target.value })}
                  className="w-full h-10 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Font Size
                </label>
                <input
                  type="range"
                  min="12"
                  max="48"
                  value={activeStyle.fontSize.replace('px', '')}
                  onChange={(e) => setActiveStyle({ ...activeStyle, fontSize: `${e.target.value}px` })}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Padding
                </label>
                <input
                  type="range"
                  min="0"
                  max="32"
                  value={activeStyle.padding.replace('px', '')}
                  onChange={(e) => setActiveStyle({ ...activeStyle, padding: `${e.target.value}px` })}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Live Preview</h3>
            <div
              style={activeStyle}
              className="border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-200"
            >
              <p>This text updates in real-time as you adjust the styles!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSSParsingSection;