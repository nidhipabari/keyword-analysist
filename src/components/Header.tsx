import React, { useState } from 'react';

const Header = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <header className=" p-6 w-full relative font-ubuntu">
      <div className="container flex justify-between items-center">
        <h1 className="text-2xl font-bold ml-24 text-[#5046C7]">Discover</h1>
        <nav>
          <ul className="flex space-x-14 ml-40">
            {['Home', 'Company', 'Pricing', 'Service', 'Learn'].map((item) => (
              <li
                key={item}
                className={`cursor-pointer ${
                  activeItem === item ? ' font-bold' : ''
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-20">
          
          <button className="bg-[#5046C7] text-white px-4 py-2 rounded mr-12">Start Free Trial</button>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5/6 h-0.5 bg-white"></div>
    </header>
  );
};

export default Header;