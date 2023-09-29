import React,{useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import PackageCard from '../components/Packages/PackageCard'

const Packages = () => {
  const {data:packages,loading,error} = useFetch(`${process.env.REACT_APP_BASE_URL}/packages`)
  
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