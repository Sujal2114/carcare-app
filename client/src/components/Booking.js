import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import '../styles/Booking.css';

const Booking = () => {
    const [formData, setFormData] = useState({
        customerName: '',
        email: '',
        carModel: '',
        serviceType: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('https://localhost:5000/api/bookings', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Booking created', response.data);
            // Reset form or handle success message as needed
            setFormData({
                customerName: '',
                email: '',
                carModel: '',
                serviceType: ''
            });
        } catch (error) {
            console.error('Error creating booking:', error.response?.data || error.message);
            // Optionally handle the error (e.g., display a message to the user)
        }
    };

    return (
        <div className="booking">
            <h2>Book a Service</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="customerName" value={formData.customerName} onChange={handleInputChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

                <label>Car Model:</label>
                <input type="text" name="carModel" value={formData.carModel} onChange={handleInputChange} required />

                <label>Service Type:</label>
                <select name="serviceType" value={formData.serviceType} onChange={handleInputChange} required>
                    <option value="">Select Service</option>
                    <option value="routine-maintenance">Routine Maintenance</option>
                    <option value="detailing">Detailing Services</option>
                    <option value="diagnostics">Diagnostics & Minor Repairs</option>
                    <option value="seasonal-checkup">Seasonal Check-ups</option>
                </select>

                <button type="submit">Submit Booking</button>
            </form>
        </div>
    );
}

export default Booking;
