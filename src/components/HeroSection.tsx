import React from 'react';

const HeroSection = () => {
  return (
    <section className="text-left py-20">
      <div className="container mx-auto grid grid-cols-2 ">
        <div className='ml-32'>
          <p className="text-[#5046C7] mb-4">We are Discover</p>
          <h2 className="text-5xl font-bold">Explore, Analyze, and</h2>
          <h2 className="text-5xl font-bold">Discover thousands of</h2>
          <h2 className="text-5xl font-bold">keyword</h2>
          <h6 className="mb-10 mt-10 text-[#68727D]">
            Gain new insights, expand your sales and make <br />
            better decisions
          </h6>
          <div className="flex space-x-4 mb-6">
            <button className="bg-[#5046C7] text-white px-6 py-3 rounded">Sign up for free</button>
            <button className="border-[#5046C7] text-[#5046C7] border-2 px-6 font-bold rounded">Learn More</button>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4 ">
          <input 
            type="text" 
            placeholder="Enter keyword" 
            className="border border-gray-300 px-6 py-3 rounded" 
          />
          <button className="bg-[#DEDEDE]  px-6 py-3 rounded">Get Ideas</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

