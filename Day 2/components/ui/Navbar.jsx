import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between p-3 bg-purple-900">
        <img
          src="/src/images/logo.png"
          className="h-15 w-11 rounded-md"
          alt="NEXUS"
          width="120"
        />
        <div className="flex md:hidden">
          <button id="hamburger" onClick={toggleMenu}>
            <img
              className={`toggle ${menuOpen ? 'hidden' : 'block'}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
              alt="Menu"
            />
            <img
              className={`toggle ${menuOpen ? 'block' : 'hidden'}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
              alt="Close"
            />
          </button>
        </div>
        <div
          className={`toggle ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none`}
        >
          <Link to="/" className="block md:inline-block text-slate-50 hover:text-slate-900 px-3 py-3 border-b-2 border-blue-900 md:border-none">
            Home
          </Link>
          <Link to="/demo-project/courses" className="block md:inline-block text-slate-50 hover:text-slate-900 px-3 py-3 border-b-2 border-blue-900 md:border-none">
           Courses
          </Link>
          <Link to="/demo-project/about" className="block md:inline-block text-slate-50 hover:text-slate-900 px-3 py-3 border-b-2 border-blue-900 md:border-none">
            About
          </Link>
          <Link to="/demo-project/contact" className="block md:inline-block text-slate-50 hover:text-slate-900 px-3 py-3 border-b-2 border-blue-900 md:border-none">
            Contact
          </Link>
          <Link to="/demo-project/login" className="block md:inline-block text-slate-50 hover:text-slate-900 px-3 py-3 border-b-2 border-blue-900 md:border-none">
            Login
          </Link>
          <Link to="/demo-project/signup" className="block md:inline-block text-slate-50 hover:text-slate-900 px-3 py-3 border-b-2 border-blue-900 md:border-none">
            Sign Up
          </Link>
        </div>
        
        {/* Uncomment the following sections if you want "Login" and "Sign Up" buttons in the desktop view */}
        {/* <Link to="/login" className={`toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded`}>
          LOGIN
        </Link>
        <Link to="/signup" className={`toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded`}>
          SIGNUP
        </Link> */}
        
        <div className="md:flex hidden items-center">
          <button onClick={toggleProfileDropdown} className="text-white focus:outline-none ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </button>
          {profileDropdownOpen && (
            <div className="ml-2 ">
              <div className="absolute top-0 right-8 mt-12 bg-white text-gray-900 border rounded-md shadow-lg p-2">
                <Link to="/demo-project/account" className="block py-2 hover:bg-gray-50">
                  Account
                </Link>
                <Link to="/demo-project/login">
                  <button onClick={() => console.log('Logout clicked')} className="block py-2 hover:bg-gra-200">
                    Logout
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
