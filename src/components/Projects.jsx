import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.project-menu-container')) {
        setOpenMenu(null);
      }
    };

    if (openMenu !== null) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openMenu]);

  const projects = [
    {
      title: "Swiggy Clone Application",
      description: "Built a Swiggy Clone using React JS, integrating Swiggy Live API for real-time restaurant data. Implemented Redux Toolkit for state management and added shimmer effects for enhanced UI/UX.",
      tech: ["React", "Redux Toolkit", "Tailwind CSS", "Live API"],
      icon: "fa-utensils",
      color: "from-orange-500 to-red-500",
      links: {
        github: "https://github.com/rupayansen23/Food-Order-App-",
        live: null
      }
    },
    {
      title: "Blood Bank Management System",
      description: "Developing a comprehensive system for real-time donor and blood inventory management with secure REST APIs and responsive UI for seamless user interaction.",
      tech: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
      icon: "fa-heart",
      color: "from-red-500 to-pink-500",
      links: {
        github: "https://github.com/rupayansen23/Blood-Bank-Management-System-BACKEND",
        live: null
      }
    },
    {
      title: "Coding Platform",
      description: "Online coding platform with various programming challenges. Integrated Judge0 API for solution testing and validation.",
      tech: ["React", "Express.js", "MongoDB", "Judge0 API"],
      icon: "fa-code",
      color: "from-blue-500 to-purple-500",
      links: {
        github: "https://github.com/rupayansen23/Coding-Platform-Backend",
        live: null
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-cyan-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 mx-auto mb-12 rounded-full"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-hover bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-blue-100 dark:border-blue-900/50 relative">
              <div className={`bg-gradient-to-r ${project.color} p-8 text-white text-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity"></div>
                <i className={`fas ${project.icon} text-6xl mb-4 drop-shadow-lg`}></i>
                <h3 className="text-2xl font-bold drop-shadow">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span 
                      key={tech}
                      className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 px-3 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500 hover:shadow-md transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* View Links Button */}
                <div className="relative project-menu-container">
                  <button
                    onClick={() => setOpenMenu(openMenu === index ? null : index)}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    View Project
                    <i className={`fas fa-chevron-down transition-transform duration-300 ${openMenu === index ? 'rotate-180' : ''}`}></i>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {openMenu === index && (
                    <div className="absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-gray-700 rounded-lg shadow-2xl border-2 border-purple-300 dark:border-purple-600 overflow-hidden z-10 animate-slideUp">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300 border-b border-gray-200 dark:border-gray-600"
                        >
                          <i className="fas fa-globe mr-2"></i>
                          Live Website
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300"
                        >
                          <i className="fab fa-github mr-2"></i>
                          GitHub Repository
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
