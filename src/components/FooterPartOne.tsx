import React from 'react'

const FooterPartOne = () => {
  return (
    <div className='grid grid-cols-4 mb-10 p-10 mt-20'>
        <div className=' text-left ml-20'>
            <h1 className='font-bold text-xl text-[#0239AE]'>DISCOVER</h1>
            <p className='mt-4 text-[#878787]'  >2022 Discover, corp</p>
        </div>
        <div className='ml-48'>
            <h1 className='font-bold'>Links</h1>
            <p className='mt-3 text-[#878787]'>Home</p>
            <p className='mt-3 text-[#878787]'>About us</p>
            <p className='mt-3 text-[#878787]'>Pricing</p>
            <p className='mt-3 text-[#878787]'>Service</p>
            <p className='mt-3 text-[#878787]'>Company</p>
        </div>
        <div className='ml-24'>
            <h1 className='font-bold'>About</h1>
            <p className='mt-3 text-[#878787]'>Partners</p>
            <p className='mt-3 text-[#878787]'>Careers</p>
            <p className='mt-3 text-[#878787]'>Press</p>
            <p className='mt-3 text-[#878787]'>Community</p>
            
        </div>
        <div>
            <h1 className='font-bold'>Our Office</h1>
            <p className='mt-3 text-[#878787]'>Indonesia<br></br>Jl. Nagrak Cibodas<br></br> Nagrak Sukabumi 43351</p>
            <p className='mt-3 text-[#878787]'>Singapore<br></br>
            Chai Chee Road <br></br>Tampines Singapore 313141</p>
            
        </div>

    </div>
  )
}

export default FooterPartOne;