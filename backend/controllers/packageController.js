const Package = require('../models/Package');

const getAllPackages = async (req, res) => {
    try {
      const packages = await Package.find().populate('reviews');
      res.status(201).json({
        success: true,
        message: 'success',
        data: packages
    });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch packages.',
        });    }
  };
  
  const createPackage = async (req, res) => {
    console.log('Route reached');
    try {
        const newPackage = new Package({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            photo: req.body.photo,
            averageRating: req.body.averageRating,
            destinations: req.body.destinations,
            reviews: req.body.reviews,
            availability: req.body.availability,
            inclusions: req.body.inclusions,
            exclusions: req.body.exclusions,
            duration: req.body.duration,
            featured: req.body.featured,
            tags: req.body.tags,
            additionalInfo: req.body.additionalInfo,
        });
        
        console.log('New data:',newPackage);
        await newPackage.save();
        res.status(201).json({
            success: true,
            message: 'New package created successfully.',
            data: newPackage
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to create a new package.',
        });
    }
};

const deletePackage = async (req, res) => {
    try {
      const packageId = req.params.id;
  
      // Check if the package exists
      const package = await Package.findById(packageId);
      if (!package) {
        return res.status(404).json({
          success: false,
          message: 'Package not found.',
        });
      }
  
      // Delete the package
      await Package.findByIdAndRemove(packageId);
  
      res.status(200).json({
        success: true,
        message: 'Package deleted successfully.',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Failed to delete the package.',
      });
    }
  };

  
  const updatePackage = async (req, res) => {
    try {
      const packageId = req.params.id;
      const updateData = req.body;
  
      // Check if the package exists
      const package = await Package.findById(packageId);
      if (!package) {
        return res.status(404).json({
          success: false,
          message: 'Package not found.',
        });
      }
  
      // Update the package
      const updatedPackage = await Package.findByIdAndUpdate(packageId, updateData, {
        new: true, // Return the updated package
      });
  
      res.status(200).json({
        success: true,
        message: 'Package updated successfully.',
        data: updatedPackage,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Failed to update the package.',
      });
    }
  };

  
  const getPackageById = async (req, res) => {
    try {
      const packageId = req.params.id;
  
      // Find the package by ID
      const package = await Package.findById(packageId).populate('reviews');
  
      if (!package) {
        return res.status(404).json({
          success: false,
          message: 'Package not found.',
        });
      }
  
      res.status(200).json({
        success: true,
        message: 'Package retrieved successfully.',
        data: package,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch the package.',
      });
    }
  };
  
  const getPackageBySearch = async (req, res) => {
    const destination = req.query.destination; // Extract the destination query parameter

    try {
        const packages = await Package.find({ 'destinations.name': destination }).populate('reviews'); // Use the destination in the query
        res.status(200).json({
            success: true,
            message: 'Packages retrieved successfully.',
            data: packages,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch packages.',
        });
    }
};


const getFeaturedPackages = async (req, res) => {
    try {
      // Use Mongoose to find packages where the 'featured' field is set to true
      const featuredPackages = await Package.find({ featured: true }).populate('reviews').limit(4);
  
      res.status(200).json({
        success: true,
        message: 'Featured packages retrieved successfully.',
        data: featuredPackages,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch featured packages.',
      });
    }
  };

  
  
  // ... other controller functions
  module.exports = {
    createPackage,
    getAllPackages,
    deletePackage,
    updatePackage,
    getPackageById,
    getPackageBySearch,
    getFeaturedPackages,
  };