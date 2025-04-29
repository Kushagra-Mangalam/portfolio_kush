import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeProvider from './context/ThemeContext';
import Certificate from './components/certificate';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificate />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;