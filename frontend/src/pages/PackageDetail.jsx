import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import useFetch from '../hooks/useFetch';
import calculateAvgRating from '../utils/calculateAvgRating';
import { AuthContext } from '../context/AuthContext';

const PackageDetail = () => {
  const { _id } = useParams();

  const {user} = useContext(AuthContext)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: packageItem } = useFetch(`${process.env.REACT_APP_BASE_URL}/packages/${_id}`);
  if (!packageItem) {
    return <div>Package not found</div>;
  }

  const {
    title,
    description,
    price,
    photo,
    reviews,
    destinations,
    inclusions,
    exclusions,
    duration,
    featured,
    tags,
    additionalInfo,
  } = packageItem;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="flex">
      {/* Left side with package details */}
      <div className="w-2/3 p-4 overflow-y-auto">
         <div className="bg-white rounded-lg shadow-lg">
           <img className="rounded-t-lg" src={process.env.PUBLIC_URL + photo} alt={title} />
           <div className="p-5">
             <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
             <p className="mt-2 text-gray-700">{description}</p>
             <p className="mt-2 text-lg font-semibold text-gray-900">${price}</p>
             {/* <div className="mt-4 flex items-center space-x-2">
               <span className="text-yellow-500">{avgRating.toFixed(1)}</span>
               <span className="text-gray-700">({reviews?.length} Reviews)</span>
             </div> */}
             <div className="flex items-center space-x-2">
               <div className="flex items-center space-x-2">
                 <div className="relative">
                   <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"
                    />
                  </svg>
                </div>
                <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-900">Destinations</h2>
              {destinations?.map((destination, index) => (
                <div key={index} className="mt-2">
                  <p className="text-gray-700 font-semibold">{destination.name}</p>
                  <p className="text-gray-700">{destination.description}</p>
                </div>
              ))}
            </div>
              </div>
            </div>
            
            {/* Display additional details */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-900">Additional Details</h2>
              <p className="mt-2 text-gray-700">Duration: {duration}</p>
              <p className="mt-2 text-gray-700">Featured: {featured ? 'Yes' : 'No'}</p>
              <p className="mt-2 text-gray-700">Tags: {tags?.join(', ')}</p>
              <p className="mt-2 text-gray-700">Additional Info: {additionalInfo}</p>
            </div>

            {/* Display inclusions */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-900">Inclusions</h2>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                {inclusions?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Display exclusions */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-900">Exclusions</h2>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                {exclusions?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Right side with booking form */}
      <div className="w-1/3 p-4 mt-12">
        <BookingForm packageData={packageItem} />
      </div>
    </div>
  );
};

export default PackageDetail;



// import React,{useEffect} from 'react';
// import { useParams } from 'react-router-dom';
// import BookingForm from '../components/BookingForm';
// import useFetch from '../hooks/useFetch';
// import calculateAvgRating from '../utils/calculateAvgRating';

// const PackageDetail = () => {
//   const { _id } = useParams();

//   useEffect(()=>{
//     window.scrollTo(0,0)
//   },[])
//   // Find the package with the matching _id
//   const { data: packageItem } = useFetch(`${process.env.REACT_APP_BASE_URL}/packages/${_id}`);
//   if (!packageItem) {
//     return <div>Package not found</div>;
//   }

//   const {
//     title,
//     description,
//     price,
//     photo,
//     reviews,
//     destinations,
//     inclusions,
//     exclusions,
//     duration,
//     featured,
//     tags,
//     additionalInfo,
//   } = packageItem;
   
//   console.log(packageItem)

//   const{totalRating,avgRating} = calculateAvgRating(reviews)

//   return (
//     <div className="flex">
//       {/* Left side with package details */}
//       <div className="w-2/3 p-4">
//         <div className="bg-white rounded-lg shadow-lg">
//           <img className="rounded-t-lg" src={process.env.PUBLIC_URL + photo} alt={title} />
//           <div className="p-5">
//             <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
//             <p className="mt-2 text-gray-700">{description}</p>
//             <p className="mt-2 text-lg font-semibold text-gray-900">${price}</p>
//             <div className="mt-4 flex items-center space-x-2">
//               <span className="text-yellow-500">{avgRating.toFixed(1)}</span>
//               <span className="text-gray-700">({reviews?.length} Reviews)</span>
//             </div>
//             <div className="mt-4 flex items-center space-x-2">
//               <div className="flex items-center space-x-2">
//                 <div className="relative">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     className="w-6 h-6 text-gray-400"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"
//                     />
//                   </svg>
//                 </div>
//                 <div className="mt-4">
//               <h2 className="text-xl font-semibold text-gray-900">Destinations</h2>
//               {destinations?.map((destination, index) => (
//                 <div key={index} className="mt-2">
//                   <p className="text-gray-700 font-semibold">{destination.name}</p>
//                   <p className="text-gray-700">{destination.description}</p>
//                 </div>
//               ))}
//             </div>
//               </div>
//             </div>
            
//             {/* Display additional details */}
//             <div className="mt-4">
//               <h2 className="text-xl font-semibold text-gray-900">Additional Details</h2>
//               <p className="mt-2 text-gray-700">Duration: {duration}</p>
//               <p className="mt-2 text-gray-700">Featured: {featured ? 'Yes' : 'No'}</p>
//               <p className="mt-2 text-gray-700">Tags: {tags?.join(', ')}</p>
//               <p className="mt-2 text-gray-700">Additional Info: {additionalInfo}</p>
//             </div>

//             {/* Display inclusions */}
//             <div className="mt-4">
//               <h2 className="text-xl font-semibold text-gray-900">Inclusions</h2>
//               <ul className="list-disc list-inside mt-2 text-gray-700">
//                 {inclusions?.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Display exclusions */}
//             <div className="mt-4">
//               <h2 className="text-xl font-semibold text-gray-900">Exclusions</h2>
//               <ul className="list-disc list-inside mt-2 text-gray-700">
//                 {exclusions?.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right side with booking form */}
//       <div className="w-1/3 p-4 mt-12">
//         <BookingForm packageData={packageItem} />
//       </div>
//     </div>
//   );
// };

// export default PackageDetail;
