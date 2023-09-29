import React from 'react';
import PackageCard from './PackageCard';
import useFetch from '../../hooks/useFetch';

const FeaturedPackages = () => {
  const { data: featuredPackages,loading,error } = useFetch(`${process.env.REACT_APP_BASE_URL}/packages/search/featured`);
  console.log(featuredPackages);
  return (
    <div>
      <div className='flex items-center justify-center'>
      {
        loading && <h4 className='text-center text-2xl font-semibold text-gray-500'>Loading........</h4>
      }

      </div>
      {
        error && <h4>{error}</h4>
      }
      {!loading && !error &&
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {featuredPackages.map((packageData, index) => {

          return (
            <PackageCard key={index} packageData={packageData} />
          );
        })}
      </div>}
    </div>
  );
};

export default FeaturedPackages;
