import React, { useState } from 'react';
import { Code, GitBranch } from 'lucide-react';

const HTMLParsingSection = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const sampleHTML = `
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <header>
      <h1>Welcome</h1>
    </header>
    <main>
      <p>Content goes here</p>
    </main>
  </body>
</html>`.trim();

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          HTML Parsing
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">HTML Source</h3>
            </div>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{sampleHTML}</code>
            </pre>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <GitBranch className="w-6 h-6 text-green-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">DOM Tree</h3>
            </div>
            <div className="dom-tree-visualization">
              {/* Tree visualization would be implemented here */}
              <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                <span className="text-blue-500">└─</span>
                <span className="text-purple-500">&lt;html&gt;</span>
              </div>
              <div className="ml-6">
                <div className="flex items-center space-x-2 p-2">
                  <span className="text-blue-500">├─</span>
                  <span className="text-purple-500">&lt;head&gt;</span>
                </div>
                <div className="ml-6">
                  <div className="flex items-center space-x-2 p-2">
                    <span className="text-blue-500">└─</span>
                    <span className="text-purple-500">&lt;title&gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HTMLParsingSection;