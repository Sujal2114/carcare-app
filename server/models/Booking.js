const mongoose = require('mongoose');

// Booking schema
const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true,
    },
    technicianId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referring to User model for technicians
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'canceled'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Export the Booking model
module.exports = mongoose.model('Booking', bookingSchema);