import React from 'react';
import { Link } from 'react-router-dom';
import calculateAvgRating from '../../utils/calculateAvgRating';

const PackageCard = ({ packageData }) => {
  const { _id, title, description, price, photo, destinations,  reviews } = packageData;
  const{ totalRating, avgRating} = calculateAvgRating(reviews)
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <Link to={`/packages-detail/${_id}`}>
        <div className="w-full h-48 overflow-hidden rounded-t-lg">
          <img className="w-full h-full object-cover" src={process.env.PUBLIC_URL + photo} alt={title} />
        </div>
      </Link>
      <div className="flex flex-col flex-grow p-5">
        <Link to={`/packages-detail/${_id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <div className="flex-grow mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</div>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Destinations: {destinations.map((destination) => destination.name).join(', ')}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">${price}</p>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 flex items-center">
              <div className="ml-2 mr-1 text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-yellow-500">
                  <path
                    d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"
                    fill="goldenrod"
                  />
                </svg>
              </div>
              {avgRating === 0 ? null: avgRating.toFixed(1)}
              {
                  totalRating === 0 ? (
                    "Not rated"
                  ) : (<span className="text-gray-700 dark:text-gray-400">
                  ({reviews.length} Reviews)
                </span>)
              }
            </span>
            
          </div>
        </div>
        <Link to={`/packages/${_id}`}>
          <button
            className="inline-block px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none"
          >
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
