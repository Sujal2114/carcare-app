const Service = require('../models/Service'); // Assuming you have a Service model

// Fetch available services
exports.getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching services' });
    }
};