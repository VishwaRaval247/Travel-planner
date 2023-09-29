import React from 'react';
import { useLocation } from 'react-router-dom';
import PackageCard from '../components/Packages/PackageCard';

const SearchResultByList = () => {
  // Use useLocation to access the location object
  const location = useLocation();

  // Retrieve the state data from the location object
  const packagesData = location.state;

  return (
    <div>
      <div className="h-20 relative">
        <img
          src={process.env.PUBLIC_URL + '/images/background.jpg'}
          alt="Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-4">
        {packagesData.length === 0 ? (
          // Render "No packages found" message if packagesData is empty
          <p className="text-center text-red-500">No packages found.</p>
        ) : (
          // Render package cards if packagesData is not empty
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {packagesData.map((packageData) => (
              <PackageCard key={packageData._id} packageData={packageData} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultByList;
