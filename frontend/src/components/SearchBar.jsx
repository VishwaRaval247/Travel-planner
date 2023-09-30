import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [destination, setDestination] = useState('');
  const [travelers, setTravelers] = useState(0);
  const navigate = useNavigate();

  const resetStates = () => {
    setDestination('');
    setTravelers(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!destination) {
      alert('Please fill in destination.');
      return;
    }

    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/packages/search?destination=${destination}`);

    if (!res.ok) {
      alert('Something went wrong.');
    }
    const result = await res.json();

    navigate(`/packages/search?destination=${destination}`, { state: result.data });

    console.log('Destination:', destination);

    resetStates();
  };

  return (
    <div>
      <form className="p-2 pl-4 rounded-lg w-full mr-auto">
        <div className="mb-4 relative flex items-center">
          <input
            className="rounded-md appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm transition-all duration-300 hover:border-red-500 hover:ring-red-500 hover:bg-gray-50"
            type="text"
            id="destination"
            name="destination"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
            {/* SVG Icon as a background image */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <button
            className="inline-block text-sm bg-red-600 h-10 w-28 px-4 py-2 leading-none rounded flex items-center justify-center text-white hover:bg-red-500 mt-2 lg:mt-0"
            type="submit"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
