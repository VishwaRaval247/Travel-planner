const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authenticate = require('../utils/authenticateJWT')

// Define routes for reviews
router.post('/:packageId',authenticate.authenticateUser,reviewController.createReview);
  
  module.exports = router;

// router.get('/all', reviewController.getAllReviews);
// router.get('/:id', reviewController.getReviewById);
// router.put('/:id', reviewController.updateReviewById);
// router.delete('/:id', reviewController.deleteReviewById);

