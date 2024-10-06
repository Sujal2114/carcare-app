const express = require('express');
const { loginUser, registerUser } = require('../controllers/authController');

const router = express.Router();

// POST /api/login
router.post('/login', loginUser);

// POST /api/register
router.post('/register', registerUser);

module.exports = router;