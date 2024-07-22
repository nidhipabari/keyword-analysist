import React from 'react';

const OurWorks = () => {
  return (
    <section className="text-left py-20 bg-[#010029] text-white">
      <div className="container mx-auto grid grid-cols-2 ">
        <div className='ml-32'>
          <p className="text-white mb-4">Our Works</p>
          <h2 className="text-5xl font-bold">We work as a</h2>
          <h2 className="text-5xl font-bold">team for you</h2>
          
          <h6 className="mb-10 mt-10 text-white">
          We always work together as a team to provide the <br></br>best service for you, because for us quality is a <br></br> priority to always improve our capacity
          </h6>
          <div className="flex space-x-4 mb-6">
            <button className="bg-[#5046C7] text-white px-6 py-3 rounded">Start Free Trial</button>
            
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <div className="bg-gray-400 h-40 w-32 mt-20"></div>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;