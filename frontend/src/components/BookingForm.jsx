import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ packageData }) => {

  const { price, title } = packageData;
  const { user } = useContext(AuthContext);

  console.log('price,title',price,title)
  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    packageName: title || '',
    fullName: '',       // Initialize fullName
    phoneNumber: '',    // Initialize phoneNumber
    guests: 1,          // Initialize guests
    bookAt: '',         // Initialize bookAt
  });

  const { fullName, phoneNumber, guests, bookAt } = booking;   // Destructure these variables

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const calculateTotalPrice = () => {
    if (!guests || !price) return 0;
    return parseInt(guests) * price;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(booking);
    const totalPrice = calculateTotalPrice();
    try {
      if (!user || user === undefined || user === null) {
        alert('Please sign in.');
      } else {
        navigate('/thank-you');
        
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="w-full p-5 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Book this package</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="bookAt">
            Date
          </label>
          <input
            type="date"
            name="bookAt"
            id="bookAt"
            value={bookAt}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="guests">
            Number of Guests
          </label>
          <input
            type="number"
            name="guests"
            id="guests"
            value={guests}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-700">Total Price: ${calculateTotalPrice()}</p>
        </div>
        <button
          type="submit"
          className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 focus:outline-none"
        >
          Book
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
