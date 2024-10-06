import React, { useState } from 'react';
import '../styles/Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('User registered', formData);
    };

    return (
        <div className="register">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;