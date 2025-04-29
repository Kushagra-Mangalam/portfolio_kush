import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  image: string; // Add an image property
  category: 'frontend' | 'Language' | 'design' | 'other';
}

const Skills: React.FC = () => {
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

  const skills: Skill[] = [
    { name: 'HTML & CSS', image: '/photos/heml.jpeg', category: 'frontend' },
    { name: 'JavaScript', image: '/photos/javascript.jpeg', category: 'frontend' },
    { name: 'C++', image: '/photos/c++.jpeg', category: 'Language' },
    { name: 'C#', image: '/photos/csharp2.png', category: 'Language' },
    { name: 'R', image: '/photos/R.jpeg', category: 'Language' },
    { name: 'Unity', image: '/photos/unity.jpeg', category: 'design' },
    { name: 'Blender', image: '/photos/blender.jpeg', category: 'design' },
    { name: 'Tableau', image: '/photos/tableau.jpeg', category: 'design' },
    { name: 'PowerBi', image: '/photos/power bi.jpeg', category: 'design' },
    { name: 'Git', image: '/photos/git.jpeg', category: 'other' },
    // { name: 'Prompt Engineer', image: '/images/prompt-engineer.png', category: 'other' },
  ];

  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'Language');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="mb-6">
      <div className="flex items-center mb-1">
        <img src={skill.image} alt={skill.name} className="w-12 h-12 mr-4" />
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto" ref={sectionRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white opacity-0 translate-y-8 transition-all duration-700 ease-out">
            My Skills
          </h2>
          
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
            A comprehensive look at my technical skills and expertise in various areas of web development and design.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
                Frontend Development
              </h3>
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}

              <h3 className="text-xl font-bold mb-6 mt-12 text-gray-800 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
                Platforms
              </h3>
              {designSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
                Languages
              </h3>
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}

              <h3 className="text-xl font-bold mb-6 mt-12 text-gray-800 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
                Other Skills
              </h3>
              {otherSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;