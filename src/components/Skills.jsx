import React from 'react';

const Skills = () => {
  const skills = {
    "Languages": [
      { name: "Java", icon: "fab fa-java", color: "text-orange-600" },
      { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-500" },
      { name: "C", icon: "fas fa-code", color: "text-blue-600" },
      { name: "C++", icon: "fas fa-code", color: "text-blue-700" }
    ],
    "Frontend": [
      { name: "React", icon: "fab fa-react", color: "text-cyan-500" },
      { name: "HTML5", icon: "fab fa-html5", color: "text-orange-600" },
      { name: "CSS", icon: "fab fa-css3-alt", color: "text-blue-600" },
      { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-600" },
      { name: "Tailwind CSS", icon: "fas fa-wind", color: "text-teal-500" }
    ],
    "Backend": [
      { name: "Express.js", icon: "fab fa-node-js", color: "text-green-600" },
      { name: "Spring Boot", icon: "fas fa-leaf", color: "text-green-700" },
      { name: "REST APIs", icon: "fas fa-plug", color: "text-indigo-600" }
    ],
    "Database": [
      { name: "MySQL", icon: "fas fa-database", color: "text-blue-500" },
      { name: "MongoDB", icon: "fas fa-database", color: "text-green-600" }
    ],
    "Tools": [
      { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
      { name: "GitHub", icon: "fab fa-github", color: "text-gray-800" },
      { name: "VS Code", icon: "fas fa-code", color: "text-blue-500" },
      { name: "IntelliJ IDEA", icon: "fas fa-laptop-code", color: "text-purple-600" }
    ]
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-indigo-900/20 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 mx-auto mb-12 rounded-full"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="card-hover bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-purple-100 dark:border-purple-900/50">
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                <i className="fas fa-code mr-2 text-purple-600 dark:text-purple-400"></i>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span 
                    key={skill.name}
                    className="skill-badge bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"
                  >
                    <i className={`${skill.icon} ${skill.color} dark:text-white`}></i>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
