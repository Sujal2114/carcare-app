const Booking = require('../models/Booking'); // Assuming you have a Booking model

// Create a new booking
exports.createBooking = async (req, res) => {
    const bookingData = req.body;
    try {
        const booking = new Booking(bookingData);
        await booking.save();
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ error: 'Booking creation failed' });
    }
};

// Track a booking by ID
exports.trackBooking = async (req, res) => {
    const { id } = req.params;
    try {
        const booking = await Booking.findById(id);
        if (!booking) return res.status(404).json({ error: 'Booking not found' });
        res.json(booking);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching booking' });
    }
};

// Update a booking
exports.updateBooking = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const booking = await Booking.findByIdAndUpdate(id, updates, { new: true });
        if (!booking) return res.status(404).json({ error: 'Booking not found' });
        res.json(booking);
    } catch (error) {
        res.status(500).json({ error: 'Booking update failed' });
    }
};

// Get all bookings
exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching bookings' });
    }
};