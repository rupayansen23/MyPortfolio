import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 mx-auto mb-12 rounded-full"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              I'm a motivated MCA student (Expected 2026) with strong foundations in Java, JavaScript, 
              and full-stack development. Currently pursuing my Master's at RCC Institute of Information Technology.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              I specialize in building modern web applications using React, Spring Boot, Express.js, 
              and working with both SQL and NoSQL databases. I'm passionate about creating scalable, 
              user-friendly applications that solve real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20 rounded-lg shadow-md">
                <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-2">Education</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">MCA - 6.77 CGPA</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">BCA - 68%</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 rounded-lg shadow-md">
                <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Focus</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Development</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Web Applications</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-2xl blur opacity-25"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                <img 
                  src="/assets/img1.jpeg" 
                  alt="Rupayan Sen"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
