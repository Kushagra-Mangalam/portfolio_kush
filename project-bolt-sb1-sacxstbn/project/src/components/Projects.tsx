import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State for selected image
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Youtube Extension',
      description: 'A Chrome extension that enhances the YouTube experience by adding bookmark to your video.',
      image: '/photos/youtube.png',
      tags: ['Html', 'CSS', 'Javascript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Kushagra-Mangalam/youtube_extension',
    },
    {
      id: 2,
      title: 'Air BNB Dashboard',
      description: 'A responsive dashboard for managing Air BNB listings.',
      image: '/photos/airbnb.png',
      tags: ['Excel', 'Tableau'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Kushagra-Mangalam/AirBnb_Dashboard',
    },
    {
      id: 3,
      title: 'Endless Road',
      description: 'A 3D interactive game built with Unity and C#.',
      image: '/photos/game.png',
      tags: ['React', 'TypeScript', 'Redux'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Kushagra-Mangalam/endless_road',
    },
    {
      id: 4,
      title: 'Medi chat',
      description: 'A ChatBot that provides medical information and advice.',
      image: '/photos/medi.png',
      tags: ['Python', 'Llama'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Kushagra-Mangalam/',
    },
  ];

  // Get all unique tags
  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)));

  useEffect(() => {
    // Filter projects based on selected tag
    if (filter === 'all') {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter((project) => project.tags.includes(filter)));
    }
  }, [filter]);

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

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // Close overlay when clicking outside
        >
          <div
            className="relative bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the image container
          >
            <img
              src={selectedImage}
              alt="Selected Project"
              className="max-w-full max-h-96 rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto" ref={sectionRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white opacity-0 translate-y-8 transition-all duration-700 ease-out">
            Projects
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
            A selection of my recent work and personal projects that showcase my skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110 cursor-pointer"
                    onClick={() => setSelectedImage(project.image)} // Open overlay on click
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;