import React from 'react';

const FooterPartOne = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10 mt-20'>
      <div className='text-left'>
        <h1 className='font-bold text-xl text-[#0239AE]'>DISCOVER</h1>
        <p className='mt-4 text-[#878787]'>2022 Discover, corp</p>
      </div>
      <div>
        <h1 className='font-bold'>Links</h1>
        <p className='mt-3 text-[#878787]'>Home</p>
        <p className='mt-3 text-[#878787]'>About us</p>
        <p className='mt-3 text-[#878787]'>Pricing</p>
        <p className='mt-3 text-[#878787]'>Service</p>
        <p className='mt-3 text-[#878787]'>Company</p>
      </div>
      <div>
        <h1 className='font-bold'>About</h1>
        <p className='mt-3 text-[#878787]'>Partners</p>
        <p className='mt-3 text-[#878787]'>Careers</p>
        <p className='mt-3 text-[#878787]'>Press</p>
        <p className='mt-3 text-[#878787]'>Community</p>
      </div>
      <div>
        <h1 className='font-bold'>Our Office</h1>
        <p className='mt-3 text-[#878787]'>
          Indonesia<br />
          Jl. Nagrak Cibodas<br />
          Nagrak Sukabumi 43351
        </p>
        <p className='mt-3 text-[#878787]'>
          Singapore<br />
          Chai Chee Road<br />
          Tampines Singapore 313141
        </p>
      </div>
    </div>
  );
};

export default FooterPartOne;
