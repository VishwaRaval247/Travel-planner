const Destination = require('../models/Destination');

// Create a new destination
const createDestination = async (req, res) => {
  try {
    const newDestination = new Destination({
      name: req.body.name,
      description: req.body.description,
      // Add other destination properties here
    });
    
    await newDestination.save();
    
    res.status(201).json({
      success: true,
      message: 'New destination created successfully.',
      data: newDestination,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to create a new destination.',
    });
  }
};

// Get all destinations
const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    
    res.status(200).json({
      success: true,
      data: destinations,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

// Delete a destination by ID
const deleteDestinationById = async (req, res) => {
  try {
    const destinationId = req.params.id;

    // Check if the destination exists
    const destination = await Destination.findById(destinationId);
    if (!destination) {
      return res.status(404).json({
        success: false,
        message: 'Destination not found.',
      });
    }

    // Delete the destination
    await Destination.findByIdAndRemove(destinationId);

    res.status(200).json({
      success: true,
      message: 'Destination deleted successfully.',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete the destination.',
    });
  }
};

// Update a destination by ID
const updateDestinationById = async (req, res) => {
  try {
    const destinationId = req.params.id;
    const updateData = req.body;

    // Check if the destination exists
    const destination = await Destination.findById(destinationId);
    if (!destination) {
      return res.status(404).json({
        success: false,
        message: 'Destination not found.',
      });
    }

    // Update the destination
    const updatedDestination = await Destination.findByIdAndUpdate(destinationId, updateData, {
      new: true, // Return the updated destination
    });

    res.status(200).json({
      success: true,
      message: 'Destination updated successfully.',
      data: updatedDestination,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to update the destination.',
    });
  }
};

// Get a single destination by ID
const getDestinationById = async (req, res) => {
  try {
    const destinationId = req.params.id;

    // Find the destination by ID
    const destination = await Destination.findById(destinationId);

    if (!destination) {
      return res.status(404).json({
        success: false,
        message: 'Destination not found.',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Destination retrieved successfully.',
      data: destination,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch the destination.',
    });
  }
};

module.exports = {
  createDestination,
  getAllDestinations,
  deleteDestinationById,
  updateDestinationById,
  getDestinationById,
};
