const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const authenticate = require('../utils/authenticateJWT')
// Get all users
router.get('/', authenticate.authenticateAdmin,UserController.getAllUsers);

// Get a single user by ID
router.get('/get/:id',authenticate.authenticateUser ,UserController.getUserById);

// Update a user by ID
router.put('/update/:id', authenticate.authenticateUser,UserController.updateUserById);

// Delete a user by ID
router.delete('/delete/:id', authenticate.authenticateUser,UserController.deleteUserById);

module.exports = router;

