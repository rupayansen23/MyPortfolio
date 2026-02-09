import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 mx-auto mb-12 rounded-full"></div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="card-hover bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border-2 border-purple-200 dark:border-purple-800 text-center">
            <i className="fas fa-envelope text-5xl text-purple-600 dark:text-purple-400 mb-4"></i>
            <h3 className="text-xl font-bold mb-2 dark:text-white">Email</h3>
            <a href="mailto:rupayansen23@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
              rupayansen23@gmail.com
            </a>
          </div>
          <div className="card-hover bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border-2 border-blue-200 dark:border-blue-800 text-center">
            <i className="fas fa-phone text-5xl text-blue-600 dark:text-blue-400 mb-4"></i>
            <h3 className="text-xl font-bold mb-2 dark:text-white">Phone</h3>
            <a href="tel:+917478339033" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              +91 7478339033
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <a 
            href="https://github.com/rupayansen23" 
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover bg-gradient-to-br from-gray-100 to-white dark:from-gray-700 dark:to-gray-800 w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl transition-all border-2 border-gray-200 dark:border-gray-600"
          >
            <i className="fab fa-github text-3xl text-gray-700 dark:text-gray-200"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/rupayan-sen-28a21b279/" 
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover bg-gradient-to-br from-blue-100 to-white dark:from-blue-900/40 dark:to-gray-800 w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl transition-all border-2 border-blue-200 dark:border-blue-700"
          >
            <i className="fab fa-linkedin text-3xl text-blue-600 dark:text-blue-400"></i>
          </a>
          <a 
            href="https://x.com/rupayan_sen_23" 
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover bg-gradient-to-br from-sky-100 to-white dark:from-sky-900/40 dark:to-gray-800 w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl transition-all border-2 border-sky-200 dark:border-sky-700"
          >
            <i className="fab fa-x-twitter text-3xl text-sky-600 dark:text-sky-400"></i>
          </a>
          <a 
            href="https://www.facebook.com/people/Rupayan-Sen/pfbid02hcq5CtHRfrLgXMEVL6Y5M8HgrNASUWURK8jM7zRk27nLNqVrAozGyTXhhQ81kd4el/" 
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover bg-gradient-to-br from-blue-100 to-white dark:from-blue-800/40 dark:to-gray-800 w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl transition-all border-2 border-blue-300 dark:border-blue-600"
          >
            <i className="fab fa-facebook text-3xl text-blue-700 dark:text-blue-400"></i>
          </a>
          <a 
            href="https://instagram.com/rupayan_sen_23" 
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover bg-gradient-to-br from-pink-100 to-white dark:from-pink-900/40 dark:to-gray-800 w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl transition-all border-2 border-pink-200 dark:border-pink-700"
          >
            <i className="fab fa-instagram text-3xl text-pink-600 dark:text-pink-400"></i>
          </a>
          <a 
            href="https://threads.net/@rupayan_sen_23" 
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover bg-gradient-to-br from-gray-100 to-white dark:from-gray-700 dark:to-gray-800 w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl transition-all border-2 border-gray-300 dark:border-gray-600"
          >
            <i className="fab fa-threads text-3xl text-gray-700 dark:text-gray-200"></i>
          </a>
          <a 
            href="https://discord.com/channels/1283346548167802912/1284036350932287539" 
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover bg-gradient-to-br from-indigo-100 to-white dark:from-indigo-900/40 dark:to-gray-800 w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl transition-all border-2 border-indigo-200 dark:border-indigo-700"
          >
            <i className="fab fa-discord text-3xl text-indigo-600 dark:text-indigo-400"></i>
          </a>
          <a 
            href="mailto:rupayansen23@gmail.com"
            className="card-hover bg-gradient-to-br from-purple-100 to-white dark:from-purple-900/40 dark:to-gray-800 w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl transition-all border-2 border-purple-200 dark:border-purple-700"
          >
            <i className="fas fa-envelope text-3xl text-purple-600 dark:text-purple-400"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
