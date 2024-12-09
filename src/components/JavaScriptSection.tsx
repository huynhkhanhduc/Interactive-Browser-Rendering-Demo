import React, { useState } from 'react';
import { Code2 } from 'lucide-react';

const JavaScriptSection = () => {
  const [output, setOutput] = useState<string>('// Output will appear here');
  const [code, setCode] = useState(`// Try this example:
document.querySelector('.demo-element').style.backgroundColor = 'blue';
console.log('Background color changed!');`);

  const runCode = () => {
    try {
      // Create a safe evaluation environment
      const element = document.querySelector('.demo-element');
      const consoleOutput: string[] = [];
      const customConsole = {
        log: (...args: any[]) => consoleOutput.push(args.join(' ')),
        error: (...args: any[]) => consoleOutput.push(`Error: ${args.join(' ')}`),
      };

      // Execute the code with the custom console
      const fn = new Function('element', 'console', code);
      fn(element, customConsole);

      setOutput(consoleOutput.join('\n') || '// Code executed successfully!');
    } catch (error) {
      setOutput(`// Error: ${(error as Error).message}`);
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          JavaScript Execution
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Code2 className="w-6 h-6 text-yellow-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Code Editor</h3>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-48 p-4 bg-gray-900 text-gray-100 font-mono text-sm rounded-lg mb-4"
            />
            <button
              onClick={runCode}
              className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
            >
              Run Code
            </button>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Live Preview</h3>
            <div className="demo-element p-4 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 transition-all duration-300">
              Interactive Element
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <pre className="text-green-400 font-mono text-sm">{output}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JavaScriptSection;