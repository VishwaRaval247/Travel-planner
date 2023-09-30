const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const authenticate = require('../utils/authenticateJWT')

// Define routes for reviews
router.post('/',authenticate.authenticateUser,bookingController.createBooking);
router.get('/:id',authenticate.authenticateUser,bookingController.getBooking);
router.get('/',authenticate.authenticateUser,bookingController.getAllBookings);
  
module.exports = router;