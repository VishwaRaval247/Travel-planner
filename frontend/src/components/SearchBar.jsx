import React,{useState} from 'react'
import useFetch from '../hooks/useFetch';
import {useNavigate} from 'react-router-dom'

const SearchBar = () => {
  
  const [destination, setDestination] = useState('');
  const [travelers,setTravelers] = useState(0);
  const navigate = useNavigate()


  const resetStates = () =>{
    
    setDestination('');
    setTravelers(0)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!destination) {
      alert('Please fill in destination.');
      return;
    }

    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/packages/search?destination=${destination}`)
    
    if(!res.ok){
      alert('somthing went wrong.')
    }
    const result = await res.json();

    navigate(`/packages/search?destination=${destination}`,{state: result.data});

    // You can access checkInDate and checkOutDate here for submission
    console.log('Destination:', destination); 

    resetStates();
  };
  return (
    <div>
    <form className="p-2 pl-4 rounded-lg w-full mr-auto">
        <div className="mb-4 relative flex items-center">
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-400"
            >
              <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
            </svg>
          </div>
          <input
            className="rounded-md appearance-none relative block w-full pl-8 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
            type="text"
            id="destination"
            name="destination"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
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
  )
}

export default SearchBar