import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
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
        console.log('Message submitted', formData);
    };

    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

                <label>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;