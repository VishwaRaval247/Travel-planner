import React from 'react'

export const ThankYou = () => {
  return (
    <div>
      <div className="h-32 relative">
        <img
          src={process.env.PUBLIC_URL + '/images/background.jpg'}
          alt="Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-12 rounded-lg shadow-lg">
          <h1 className="text-4xl font-semibold text-center text-green-600 mb-6">
            Thank You!!
          </h1>
          <p className="text-lg text-gray-800 text-center">
            Your package is booked.
          </p>
        </div>
      </div>
    </div>
  );
};
