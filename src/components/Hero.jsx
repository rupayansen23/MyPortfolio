import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    'I am a Web Developer',
    'I build modern web applications',
    'I turn ideas into code'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up md:pl-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 dark:text-white">
              Hi, I'm <span className="gradient-text">Rupayan Sen</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 h-20 flex items-center">
              <span className="font-mono text-purple-700 dark:text-purple-400 font-semibold">
                {text}
                <span className="animate-blink text-purple-600 dark:text-purple-400">|</span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              MCA student with expertise in React, Spring Boot, and modern web technologies. 
              Passionate about building scalable applications and solving real-world problems.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact"
                className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a 
                href="#projects"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300"
              >
                View Projects
              </a>
            </div>
            <div className="flex space-x-6 mt-8">
              <a href="https://github.com/rupayansen23" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <i className="fab fa-github text-3xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/rupayan-sen-28a21b279/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <i className="fab fa-linkedin text-3xl"></i>
              </a>
              <a href="mailto:rupayansen23@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <i className="fas fa-envelope text-3xl"></i>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 opacity-30 absolute -top-4 -left-4 blur-xl"></div>
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl relative ring-4 ring-purple-200 dark:ring-purple-500/50">
                <img 
                  src="/assets/img2.jpeg" 
                  alt="Rupayan Sen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
