import React, { useState } from 'react';
import '../styles/Booking.css';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking submitted', formData);
    };

    return (
        <div className="booking">
            <h2>Book a Service</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

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