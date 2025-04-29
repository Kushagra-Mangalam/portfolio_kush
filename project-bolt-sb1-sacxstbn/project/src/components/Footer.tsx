import * as React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Kushagra-Mangalam" 
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
                  aria-label="Github"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/kushagra-mangalam/" 
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                {/* <a 
                  href="#" 
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a> */}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#hero" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">Skills</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
                </li>
                <li>
                  <a href="#certificates" className="text-gray-400 hover:text-white transition-colors duration-300">Certificate</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">
                  <span className="block font-medium text-white">Email:</span>
                  <a href="mailto:kushagramangalam@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
                   <p>kushagramangalam@gmail.com</p> 
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="block font-medium text-white">Phone:</span>
                  <a href="tel:+917895322355" className="hover:text-blue-400 transition-colors duration-300">
                    +91 7895322355
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="block font-medium text-white">Location:</span>
                  Phagwara , Punjab
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center mt-4 md:mt-0">
              Made by kushagra <Heart size={16} className="text-red-500 mx-1" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;