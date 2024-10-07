const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const BookingRouter = require("./routes/bookingRoutes.js");

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
   .then(() => console.log("MongoDB connected"))
   .catch((err) => console.error(err));

// Basic route
app.get('/', (req, res) => {
   res.send('Server is running');
});

app.use('/api/bookings', BookingRouter);

// Listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});