import React, { useState } from 'react';

const Header = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setMenuOpen(false); // Close the menu when an item is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="p-6 w-full relative font-ubuntu bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#5046C7]">Discover</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Home', 'Company', 'Pricing', 'Service', 'Learn'].map((item) => (
              <li
                key={item}
                className={`cursor-pointer ${
                  activeItem === item ? 'font-bold' : ''
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <button className="bg-[#5046C7] text-white px-4 py-2 rounded">Start Free Trial</button>
        </div>
        <button
          className="md:hidden flex items-center text-gray-600"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col p-4 space-y-4">
          {['Home', 'Company', 'Pricing', 'Service', 'Learn'].map((item) => (
            <li
              key={item}
              className={`cursor-pointer ${
                activeItem === item ? 'font-bold' : ''
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
          <li>
            <button className="bg-[#5046C7] text-white px-4 py-2 rounded w-full">
              Start Free Trial
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

