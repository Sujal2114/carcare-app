const mongoose = require('mongoose');
const Service = require('./models/Service'); // Adjust the path based on your structure

const services = [
    { name: 'Oil Change', description: 'Change engine oil and filter.', price: 30, duration: '30 mins' },
    { name: 'Car Wash', description: 'Exterior and interior car cleaning.', price: 20, duration: '1 hour' },
    { name: 'Tire Rotation', description: 'Rotate tires for even wear.', price: 25, duration: '30 mins' },
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');

        await Service.deleteMany(); // Clear existing data
        await Service.insertMany(services); // Insert initial data

        console.log('Initial data seeded successfully');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};

seedDB();