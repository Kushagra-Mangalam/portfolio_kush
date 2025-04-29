import React, { useRef, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      const children = sectionRef.current.children;
      for (let i = 0; i < children.length; i++) {
        observer.observe(children[i]);
      }
    }

    return () => {
      if (sectionRef.current) {
        const children = sectionRef.current.children;
        for (let i = 0; i < children.length; i++) {
          observer.unobserve(children[i]);
        }
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-blue-600" />,
      title: 'Email',
      content: 'kushagramangalam@gmail.com',
      link: 'mailto:kushagramangalam@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5 text-blue-600" />,
      title: 'Phone',
      content: '+917895322355',
      link: 'tel+917895322355',
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      title: 'Location',
      content: 'Phagwara , Punjab',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto" ref={sectionRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white opacity-0 translate-y-8 transition-all duration-700 ease-out">
            Get In Touch
          </h2>
          
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-5 gap-10 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
            {/* Contact Information */}
            <div className="md:col-span-2 space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Contact Information
              </h3>
              
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Portfolio Section */}
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                My Portfolio
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explore my work and projects that showcase my skills and expertise.
              </p>
              {/* <a
                href="#projects"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all"
              >
                View Portfolio
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;