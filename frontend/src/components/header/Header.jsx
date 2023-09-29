import React from 'react';
import CustomNavLink from './ActiveHeader';

const Header = () => {
  return (
    <div>
      <nav
        className="fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap bg-gray-700 bg-opacity-75 p-3 z-50"
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">TravelPlanner</span>
        </div>
        <div className="text-sm lg:flex-grow text-right">
          <CustomNavLink to="/" exact>
            Home
          </CustomNavLink>
          <CustomNavLink to="/about">
            About Us
          </CustomNavLink>
          <CustomNavLink to="/packages">
            Packages
          </CustomNavLink>
          <CustomNavLink to="/contact">
            Contact Us
          </CustomNavLink>
          <CustomNavLink to="/login">
            <p className="inline-block text-sm bg-red-500 px-4 py-2 leading-none rounded text-white hover:bg-red-400 mt-2 lg:mt-0">Login</p>
          </CustomNavLink>
        </div>
        {/* <div>
          <a href="#" className="inline-block text-sm bg-red-500 px-4 py-2 leading-none rounded text-white hover:bg-red-400 mt-2 lg:mt-0">
            Book Now
          </a>
        </div> */}
      </nav>
    </div>
  );
};

export default Header;
