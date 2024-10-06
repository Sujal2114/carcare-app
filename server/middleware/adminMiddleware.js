// Middleware to check if the user is an admin
exports.isAdmin = (req, res, next) => {
    const userRole = req.user.role; // Assuming user info is attached by auth middleware

    if (userRole !== 'admin') {
        return res.status(403).json({ error: 'Access denied: Admins only' });
    }
    next();
};