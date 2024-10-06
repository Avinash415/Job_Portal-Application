

import React from "react";

const Hero = () => {
  return (
<section className="hero bg-cover bg-center h-screen relative" style={{ backgroundImage: 'url("https://i.pinimg.com/564x/cc/e8/7e/cce87e2788907b09145c7bc1270b71bc.jpg")' }}>
  
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Hero Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    
    {/* Hero Heading */}
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeInUp overflow-hidden">
      Find Your Dream Job Today
    </h1>

    {/* Subheading */}
    <h4 className="text-lg md:text-2xl text-blue-500 mb-8 animate-fadeInUp delay-500 overflow-hidden">
      Connecting Talent with Opportunities Across the Nation for Every Skill Level
    </h4>

    {/* Description Box */}
    <div className="bg-white bg-opacity-20 backdrop-blur-lg hover:bg-indigo-500 hover:text-black text-gray-100 p-6 rounded-lg shadow-lg max-w-xl animate-fadeInUp delay-700">
      Explore a vast array of job listings in diverse industries. Whether you're a seasoned professional or just starting out, find the perfect role to advance your career. Our platform makes job searching easy and efficient, bringing you closer to your next big opportunity.
    </div>
  </div>
</section>

      </div>
    </section>
  );
};

export default Hero;
