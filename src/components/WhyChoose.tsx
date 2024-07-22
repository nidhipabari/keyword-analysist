import React from 'react'

const WhyChoose = () => {
  return (
    <div>
        <div>
            <h1 className='font-bold text-4xl text-center'>Why choose us?</h1>
            <p className='mt-7 text-center text-[#68727D]'>Our own proprietary data and toolset means you can get 10,000 <br></br> keywords per search as well as related keywords, so your pages can <br></br> be optimised more effectively to outrank the competition.</p>
        </div>
        <div className='grid grid-cols-3  space-x-6 p-20'>
            <div className='border'>
                <h4 className='font-semibold text-center mt-20 text-xl'>Related Items</h4>
                <p className='text-center text-[#68727D] m-3 mb-8'>Find related keywords for stronger <br></br>content that ranks better</p>
            </div>
            <div className='border'>
                <h4 className='font-semibold text-center mt-20 text-xl'>SERP Preview</h4>
                <p className='text-center text-[#68727D] m-3'>See the search results and the difficulty<br></br> of the competition right in the tool</p>
            </div>
            <div className='border '>
                <h4 className='font-semibold text-center mt-20 text-xl  '>Multiple Sources</h4>
                <p className='text-center text-[#68727D] m-3'>Discover, Google, Youtube and Amazon <br></br> results are all available</p>
            </div>

        </div>
    </div>
  )
}

export default WhyChoose