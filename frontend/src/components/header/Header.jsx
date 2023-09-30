import React, { useContext } from 'react';
import CustomNavLink from './ActiveHeader';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap bg-gray-700 bg-opacity-75 p-3 z-50">
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
        <div className="flex justify-end text-sm lg:flex-grow items-center">
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

          {user ? (
            <div className="flex items-center"> {/* Flex container */}
              <h5 className="font-semibold text-red-500 block mt-2 lg:inline-block lg:mt-0 hover:text-red-400 mr-2">
                {user.username}
              </h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <button onClick={logout} className="ml-4 inline-block text-sm bg-red-500 px-4 py-2 leading-none rounded text-white hover:bg-red-400 mt-2 lg:mt-0 mr-6">
                  Logout
                </button>
            </div>
            
          ) : (
            <>
              <Link to="/login">
                <button className="inline-block text-sm bg-red-500 px-4 py-2 leading-none rounded text-white hover:bg-red-400 mt-2 lg:mt-0 mr-6">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="inline-block text-sm bg-red-500 px-4 py-2 leading-none rounded text-white hover:bg-red-400 mt-2 lg:mt-0">signup</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
