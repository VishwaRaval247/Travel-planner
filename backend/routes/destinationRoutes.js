const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

// Define routes for destinations
router.post('/create', destinationController.createDestination);
router.get('/', destinationController.getAllDestinations);
router.get('/:id', destinationController.getDestinationById);
router.put('/:id', destinationController.updateDestinationById);
router.delete('/:id', destinationController.deleteDestinationById);

module.exports = router;
