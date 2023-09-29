import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CustomNavLink = ({ to, children }) => {
  const location = useLocation();

  // Check if the current route matches the 'to' prop
  const isActive = location.pathname === to;

  // Define the Tailwind CSS classes for active and inactive states
  const activeClassName = isActive ? 'text-red-400' : 'text-white';

  return (
    <Link to={to} className={`block mt-2 lg:inline-block lg:mt-0 hover:text-red-400 mr-6 ${activeClassName}`}>
      {children}
    </Link>
  );
};

export default CustomNavLink;
