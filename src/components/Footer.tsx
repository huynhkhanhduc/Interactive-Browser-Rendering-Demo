import React from 'react';
import { BookOpen, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Browsers parse HTML into the DOM tree</li>
              <li>• CSS is processed into the CSSOM</li>
              <li>• DOM and CSSOM combine to form the render tree</li>
              <li>• Layout determines element positioning</li>
              <li>• Paint renders the final visual output</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work"
                  className="text-blue-400 hover:text-blue-300 flex items-center"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  MDN Web Docs
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/topics/browser-rendering"
                  className="text-blue-400 hover:text-blue-300 flex items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub Resources
                </a>
              </li>
              <li>
                <a
                  href="https://web.dev/howbrowserswork/"
                  className="text-blue-400 hover:text-blue-300 flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Web.dev Guide
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">About This Demo</h3>
            <p className="text-gray-300">
              This interactive demonstration was created to help developers understand how browsers
              render web pages. It visualizes the complex process of turning code into the visual
              elements you see on screen.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;