const express = require('express');
const { updateUserProfile, getUserProfile } = require('../controllers/userController');

const router = express.Router();

// GET /api/users/profile
router.get('/profile', getUserProfile);

// PATCH /api/users/profile
router.patch('/profile', updateUserProfile);

module.exports = router;