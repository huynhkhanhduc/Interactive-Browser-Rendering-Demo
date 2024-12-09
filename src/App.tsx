import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import HTMLParsingSection from './components/HTMLParsingSection';
import CSSParsingSection from './components/CSSParsingSection';
import RenderTreeSection from './components/RenderTreeSection';
import JavaScriptSection from './components/JavaScriptSection';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
      <HeroSection />
      <HTMLParsingSection />
      <CSSParsingSection />
      <RenderTreeSection />
      <JavaScriptSection />
      <Footer />
    </div>
  );
}

export default App;