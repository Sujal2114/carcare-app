import React, { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in', credentials);
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input type="email" name="email" value={credentials.email} onChange={handleInputChange} required />

                <label>Password:</label>
                <input type="password" name="password" value={credentials.password} onChange={handleInputChange} required />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;