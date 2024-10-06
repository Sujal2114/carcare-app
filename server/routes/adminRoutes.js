const express = require('express');
const {
    manageUsers,
    manageBookings,
    manageServices,
} = require('../controllers/adminController');

const router = express.Router();

// GET /api/admin/users
router.get('/users', manageUsers);

// GET /api/admin/bookings
router.get('/bookings', manageBookings);

// GET /api/admin/services
router.get('/services', manageServices);

module.exports = router;