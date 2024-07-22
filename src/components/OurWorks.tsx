import React from 'react';

const OurWorks = () => {
  return (
    <section className="text-left py-20 bg-[#010029] text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className='md:ml-32 text-center md:text-left'>
          <p className="text-white mb-4">Our Works</p>
          <h2 className="text-3xl md:text-5xl font-bold">We work as a team for you</h2>
          <h6 className="mb-10 mt-10 text-white leading-relaxed">
            We always work together as a team to provide the <br className="hidden md:block" />
            best service for you, because for us quality is a <br className="hidden md:block" />
            priority to always improve our capacity
          </h6>
          <div className="flex flex-col md:flex-row md:space-x-4 mb-6 items-center md:items-start justify-center md:justify-start">
            <button className="bg-[#5046C7] text-white px-6 py-3 rounded mb-4 md:mb-0">
              Start Free Trial
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center md:justify-center md:items-start space-x-4">
          <div className="bg-gray-400 h-40 w-32 mt-0 md:mt-20"></div>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
