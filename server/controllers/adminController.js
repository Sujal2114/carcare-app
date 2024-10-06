const User = require('../models/User');
const Booking = require('../models/Booking');
const Service = require('../models/Service');

// Manage users
exports.manageUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
};

// Manage bookings
exports.manageBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching bookings' });
    }
};

// Manage services
exports.manageServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching services' });
    }
};