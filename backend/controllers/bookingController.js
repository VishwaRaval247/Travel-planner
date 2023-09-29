const Booking = require('../models/Booking')

const createBooking = async(req,res) =>{
    const newBooking = new Booking(req.body)
    try {
        const savedBooking = await newBooking.save()
        res.status(200).json({
            success: true,
            message: 'Your package is booked',
            data: savedBooking,
          });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error',
          });
    }
}

const getBooking = async (req, res) => {
    try {
      const id = req.params.id;
  
      const booking = await Booking.findById(id);
  
      if (!booking) {
        return res.status(404).json({
          success: false,
          message: 'booking not found.',
        });
      }
  
      res.status(200).json({
        success: true,
        message: 'booking retrieved successfully.',
        data: booking,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch the booking.',
      });
    }
  };

  const getAllBookings = async (req, res) => {
    try {
      const booking = await Booking.find();
      res.status(201).json({
        success: true,
        message: 'success',
        data: booking
    });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch bookings.',
        });    }
  };


module.exports = {
    createBooking,
    getBooking,
    getAllBookings,
}