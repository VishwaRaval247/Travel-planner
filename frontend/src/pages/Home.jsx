import React from 'react';
import { Link } from 'react-router-dom';
import videoSource from '../assets/videos/background.mp4';
import SearchBar from '../components/SearchBar';
import FeaturedPackages from '../components/Packages/FeaturedPackages';

const Home = () => {
  return (
    <div>
      <div>
        {/* Video Background */}
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-85 object-cover z-10">
          <source src={videoSource} type="video/mp4" />
          {/* Add additional source elements for different video formats if needed */}
        </video>

        {/* Content Centered */}
        <div className="min-h-screen flex items-center justify-center relative z-20">
          <div className="text-left pr-4 sm:pr-0 ml-auto">
            <h3 className="text-3xl font-semibold text-red-500">It's time to</h3>
            <h2 className="text-6xl font-bold text-white">Travel</h2>
            <p className="text-white text-lg mb-4">Book With Us And Book It Out Of Here!</p>
            <div>
              <Link to='/packages'>
                <p className="inline-block mt-4 text-sm bg-red-600 h-10 w-28 px-4 py-2 leading-none rounded flex items-center justify-center text-white hover:bg-red-500 mt-2 lg:mt-0">
                  Explore
                </p>
              </Link>
            </div>
          </div>
          <div className="w-1/2 p-4 flex justify-start items-center">
            <SearchBar/>
          </div>
        </div>
      </div>

      {/* Content Below Video */}
      <div>
        <div className="flex items-center justify-center relative z-30 mt-48">
          {/* Left Side: Text */}
          <div className="w-1/2 p-4 pl-24">
          <div className="flex items-center flex-shrink-0 text-red-500 mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="text-red-500 tracking-tight">TravelPlanner</span>
        </div>
            <h2 className="text-2xl font-semibold mb-4">Traveling opens the door to creating <span className="text-red-500">Memories</span> </h2>
            <p className="text-gray-600">
            We would love to help you realize your travel dreams,to start a new. Take the first steps towards making your dream a reality.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={process.env.PUBLIC_URL + '/images/hiking.jpg'}
              alt="About Us"
              className="max-w-full max-h-80 border border-gray-300 rounded"
            />
          </div>
        </div>
      </div>

      {/*Package Data */}
      <div>
      <div className="flex flex-col justify-center items-center p-4 m-8 mt-24 pl-24">
          <span className="text-red-500">Modern & Beautiful</span>
            <h2 className="text-4xl font-semibold mb-4">Our Most Popular Packages</h2>
        </div>
          </div>
        <div className='mt-4 m-8'>
        <FeaturedPackages/>
        </div>
      </div>
  );
};

export default Home;
