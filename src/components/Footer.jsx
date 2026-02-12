import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Location Section with Map */}
      <div className="py-12 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-8">
            <i className="fas fa-map-marker-alt text-purple-400 mr-2"></i>
            Find Me Here
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Present Address */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-start space-x-3 mb-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <i className="fas fa-home text-xl"></i>
                </div>
                <h4 className="text-xl font-semibold mt-2">Parmanent Address</h4>
              </div>
              <div className="space-y-2 text-gray-200">
                <p>
                  <span className="font-semibold text-purple-300">Village:</span> Ranibazar, 
                  <span className="font-semibold text-purple-300"> Post:</span> Antpur
                </p>
                <p>
                  <span className="font-semibold text-purple-300">Police Station:</span> Jangipara
                </p>
                <p>
                  <span className="font-semibold text-purple-300">Sub-division:</span> Serampore, 
                  <span className="font-semibold text-purple-300"> District:</span> Hooghly
                </p>
                <p>
                  <span className="font-semibold text-purple-300">State:</span> West Bengal
                </p>
                <p className="font-bold text-white">
                  <span className="text-purple-300">PIN:</span> 712408
                </p>
              </div>
            </div>

            {/* Current Address */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-start space-x-3 mb-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <i className="fas fa-location-dot text-xl"></i>
                </div>
                <h4 className="text-xl font-semibold mt-2">Current Address</h4>
              </div>
              <div className="space-y-2 text-gray-200">
                <p>
                  <span className="font-semibold text-blue-300">Street:</span> Canal South Road, 
                  <span className="font-semibold text-blue-300"> Area:</span> New Purbayan
                </p>
                <p>
                  <span className="font-semibold text-blue-300">Locality:</span> Chingrighata
                </p>
                <p>
                  <span className="font-semibold text-blue-300">City:</span> Kolkata
                </p>
                <p>
                  <span className="font-semibold text-blue-300">State:</span> West Bengal, India
                </p>
                <p className="font-bold text-white">
                  <span className="text-blue-300">PIN:</span> 700105
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="lg:col-span-1 rounded-lg overflow-hidden shadow-2xl h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14703.5!2d88.2!3d22.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e0f0f0f0f0f%3A0x0!2sRanibazar%2C%20Antpur%2C%20Jangipara%2C%20Hooghly%2C%20West%20Bengal%20712408!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Permanent Address Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-200">
            © 2026 Rupayan Sen. Built with React & Tailwind CSS.
          </p>
          <p className="text-gray-300 text-sm mt-2">
            Full Stack Developer | MCA Student | Problem Solver
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;