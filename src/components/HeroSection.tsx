import React from 'react';

const HeroSection = () => {
  return (
    <section className="text-left py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="md:ml-32 text-center md:text-left">
          <p className="text-[#5046C7] mb-4">We are Discover</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Explore, Analyze, and Discover thousands of keyword
          </h2>
          <h6 className="mb-10 mt-10 text-[#68727D] leading-relaxed">
            Gain new insights, expand your sales and make better decisions
          </h6>
          <div className="flex flex-col md:flex-row md:space-x-4 mb-6 items-center md:items-start justify-center md:justify-start">
            <button className="bg-[#5046C7] text-white px-6 py-3 rounded mb-4 md:mb-0">
              Sign up for free
            </button>
            <button className="border-[#5046C7] text-[#5046C7] border-2 px-6 py-3 font-bold rounded">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <input 
            type="text" 
            placeholder="Enter keyword" 
            className="border border-gray-300 px-6 py-3 rounded w-full md:w-auto" 
          />
          <button className="bg-[#DEDEDE] px-6 py-3 rounded w-full md:w-auto">
            Get Ideas
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


