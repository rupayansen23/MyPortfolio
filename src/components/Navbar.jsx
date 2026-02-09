import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden animate-fadeIn"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'navbar-blur shadow-lg dark:bg-gray-900/95 dark:shadow-purple-500/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold gradient-text cursor-pointer hover:scale-110 transition-transform duration-300">Rupayan Sen</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-medium relative group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-purple-200 dark:border-purple-800 overflow-hidden backdrop-blur-lg mobile-menu-enter">
            <div className="py-4">
              {navLinks.map((link, index) => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="group block py-4 px-6 text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-white transition-all duration-300 border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  <i className={`fas ${
                    link === 'Home' ? 'fa-home' :
                    link === 'About' ? 'fa-user' :
                    link === 'Skills' ? 'fa-code' :
                    link === 'Projects' ? 'fa-folder-open' :
                    'fa-envelope'
                  } mr-3 text-purple-600 dark:text-purple-400 group-hover:text-white`}></i>
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
