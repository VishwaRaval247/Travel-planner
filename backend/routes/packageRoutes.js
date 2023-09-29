// routes/packages.js
const express = require('express');
const router = express.Router();
const packageController = require('../controllers/packageController');

// Define routes that use the controller functions
router.post('/create', packageController.createPackage);
router.get('/', packageController.getAllPackages);
router.put('/:id', packageController.updatePackage);
router.delete('/:id', packageController.deletePackage);
router.get('/search',packageController.getPackageBySearch);
router.get('/search/featured',packageController.getFeaturedPackages);
router.get('/:id', packageController.getPackageById);
//get tour by search

// ... other routes

module.exports = router;
