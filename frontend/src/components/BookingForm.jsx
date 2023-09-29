import React, { useState } from 'react';

const BookingForm = ({ packageData }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    date: '',
    guests: '',
  });

  const { fullName, phoneNumber, date, guests } = formData;
  const { price } = packageData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateTotalPrice = () => {
    if (!guests || !price) return 0;
    return parseInt(guests) * price;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPrice = calculateTotalPrice();
    console.log('Booking Data:', {
      fullName,
      phoneNumber,
      date,
      guests,
      totalPrice,
    });
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
          <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
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
