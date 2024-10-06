const jwt = require('jsonwebtoken');

// Middleware to check if the user is authenticated
exports.isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer token format

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized access' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Store user info in request object
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Invalid token' });
    }
};