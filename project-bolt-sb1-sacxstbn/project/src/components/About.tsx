import * as React from 'react';
import { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, Users } from 'lucide-react';

const About: React.FC = () => {
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

  const stats = [
    // { 
    //   icon: <Briefcase className="w-5 h-5 text-blue-600" />,
    //   value: '5+',
    //   label: 'Years of Experience'
    // },
    // { 
    //   icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
    //   value: '4',
    //   label: 'Completed Projects'
    // },
    // { 
    //   icon: <Users className="w-5 h-5 text-blue-600" />,
    //   value: '15+',
    //   label: 'Happy Clients'
    // }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div ref={sectionRef}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white opacity-0 translate-y-8 transition-all duration-700 ease-out">
              About Me
            </h2>
            
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
            Hey, I'm Kushagra Mangalam, 
            a B.Tech Computer Science student at Lovely Professional University, 
            fueled by curiosity and a passion for learning it all! I specialize in data analysis, 
            statistical modeling, and data visualization, turning numbers into insights with flair.
             Right now, I'm diving into the basics of full-stack development, 
             eager to build a standout project that sharpens my front-end and back-end skills. 
             Ready to create something epic.
            </p>
            
            <div className="flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-800">
  <div className="w-80 h-1000 rounded-3xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
    <img 
      src="https://images.pexels.com/photos/4069289/pexels-photo-4069289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      alt="Professional portrait" 
      className="w-full h-full object-cover"
    />
  </div>

  <div className="flex justify-center gap-4 mt-8">
    <a
      href="#contact"
      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all transform hover:scale-105"
    >
      Contact Me
    </a>
    <a
      href="/photos/kushagra_blue.pdf"
      target="_blank"
      rel='noopener noreferrer'
      // download
      className="px-6 py-2 border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white font-medium rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all transform hover:scale-105"
    >
      Download CV
    </a>
  </div>
</div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg text-center transform transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;