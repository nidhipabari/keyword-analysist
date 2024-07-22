import React from 'react';

const WhyChoose = () => {
  return (
    <div className="px-4 py-20">
      <div>
        <h1 className="font-bold text-4xl text-center">Why choose us?</h1>
        <p className="mt-7 text-center text-[#68727D]">
          Our own proprietary data and toolset means you can get 10,000 <br className="hidden md:block" />
          keywords per search as well as related keywords, so your pages can <br className="hidden md:block" />
          be optimised more effectively to outrank the competition.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-20">
        <div className="border p-6">
          <h4 className="font-semibold text-center mt-6 md:mt-20 text-xl">Related Items</h4>
          <p className="text-center text-[#68727D] mt-3 mb-8">
            Find related keywords for stronger <br className="hidden md:block" />
            content that ranks better
          </p>
        </div>
        <div className="border p-6">
          <h4 className="font-semibold text-center mt-6 md:mt-20 text-xl">SERP Preview</h4>
          <p className="text-center text-[#68727D] mt-3 mb-8">
            See the search results and the difficulty<br className="hidden md:block" />
            of the competition right in the tool
          </p>
        </div>
        <div className="border p-6">
          <h4 className="font-semibold text-center mt-6 md:mt-20 text-xl">Multiple Sources</h4>
          <p className="text-center text-[#68727D] mt-3 mb-8">
            Discover, Google, Youtube and Amazon <br className="hidden md:block" />
            results are all available
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
