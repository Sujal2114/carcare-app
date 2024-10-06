const Booking = require('../models/Booking'); // Assuming you have a Booking model

// Get tasks for technicians
exports.getTasks = async (req, res) => {
    const technicianId = req.user.id; // Assuming technician ID is set in request after authentication
    try {
        const tasks = await Booking.find({ technicianId });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tasks' });
    }
};

// Update task completion
exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const task = await Booking.findByIdAndUpdate(id, updates, { new: true });
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Error updating task' });
    }
};