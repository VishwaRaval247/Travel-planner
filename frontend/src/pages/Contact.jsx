import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="mb-6">
      <div className="h-20 relative">
        <img
          src={process.env.PUBLIC_URL + '/images/background.jpg'}
          alt="Image"
          className="object-cover w-full h-full"
          />
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mt-8 text-red-500 mb-8">Contact Us</h2>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full p-2 border rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="text-sm bg-red-600 h-10 w-28 px-4 py-2 leading-none rounded flex items-center justify-center text-white hover:bg-red-500 mt-2 lg:mt-0"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container mx-auto mt-8 px-4">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="mb-2">
            <strong>Email:</strong> contact@travelplanner.com
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="mb-2">
            <strong>Address:</strong> 1234 Travel Street, Adventure City, Wanderland
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
