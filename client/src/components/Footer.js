import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 CarCare - All rights reserved.</p>
            <ul className="footer-links">
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
            </ul>
        </footer>
    );
}

export default Footer;