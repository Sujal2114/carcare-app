const User = require('../models/User'); // Assuming you have a User model

// Get user profile
exports.getUserProfile = async (req, res) => {
    const userId = req.user.id; // Assuming user ID is set in request after authentication
    try {
        const user = await User.findById(userId);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user profile' });
    }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
    const userId = req.user.id; // Assuming user ID is set in request after authentication
    const updates = req.body;
    try {
        const user = await User.findByIdAndUpdate(userId, updates, { new: true });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Profile update failed' });
    }
};