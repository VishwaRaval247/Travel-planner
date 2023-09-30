import React,{useEffect,useState} from 'react';
import useFetch from '../hooks/useFetch'
import PackageCard from '../components/Packages/PackageCard'
import { useNavigate } from 'react-router-dom';

const Packages = () => {
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const {data:packages,loading,error} = useFetch(`${process.env.REACT_APP_BASE_URL}/packages`)

  const resetStates = () => {
    setDestination('');
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
  
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
      <div className="h-20 relative">
        <img
          src={process.env.PUBLIC_URL + '/images/background.jpg'}
          alt="Image"
          className="object-cover w-full h-full"
          />
      </div>
      <div className='flex justify-center items-center w-full mt-8'>
      <form className="p-2 pl-4 rounded-lg">
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
        <div className="ml-4 text-center">
          <button
            className="inline-block text-sm bg-red-600 h-10 w-28 px-4 py-2 leading-none rounded flex items-center justify-center text-white hover:bg-red-500 mt-2 lg:mt-0"
            type="submit"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>

        </div>
      </form>
      </div>
      <div className='flex items-center justify-center'>
      {
        loading && <h4 className='m-10 text-center text-2xl font-semibold text-gray-500'>Loading........</h4>
      }

      </div>
      {
        error && <h4>{error}</h4>
      }
      {!loading && !error &&
        <div className="m-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {packages.map((packageData, index) => {

          return (
            <PackageCard key={index} packageData={packageData} />
          );
        })}
      </div>}
    </div>
  )
}

export default Packages