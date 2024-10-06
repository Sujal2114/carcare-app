const express = require('express');
const {
    createBooking,
    trackBooking,
    updateBooking,
    getBookings,
} = require('../controllers/bookingController');

const router = express.Router();

// POST /api/bookings
router.post('/', createBooking);

// GET /api/bookings/:id
router.get('/:id', trackBooking);

// PATCH /api/bookings/:id
router.patch('/:id', updateBooking);

// GET /api/bookings
router.get('/', getBookings);

module.exports = router;