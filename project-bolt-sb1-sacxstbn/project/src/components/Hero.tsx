import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative pt-20 pb-16 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/photos/185978-3840x2160-desktop-4k-moon-background-photo.jpg')", // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.8)', // Adjust brightness for translucency
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/30 -z-10"></div> {/* Adds a translucent overlay */}

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h1 
            ref={headingRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">Kushagra Mangalam </span>{' '}
            <span className="inline-block"></span>
            </h1>
            <div className="flex justify-center mb-10">
            <img 
              src="/photos/profile_photo.jpg"     
              alt="Kushagra Mangalam" 
              className="w-32 h-32 md:w-60 md:h-60 rounded-full shadow-lg border-4 border-gray-300 dark:border-gray-700"
            />
            </div>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto opacity-0 translate-y-8 animate-fade-in-up delay-300">
            A curious mind with a passion for technology and data. I love exploring the intersection of computer science and data science to create innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 opacity-0 animate-fade-in delay-500">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white font-medium rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all transform hover:scale-105"
            >
              View My Work
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16 opacity-0 animate-fade-in delay-700">
            <a 
              href="https://github.com/Kushagra-Mangalam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kushagra-mangalam/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in delay-900">
          <a 
            href="#about"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;