const mongoose = require('mongoose');

// Service schema
const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: String,
        required: true, // e.g., '1 hour', '30 mins'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Export the Service model
module.exports = mongoose.model('Service', serviceSchema);