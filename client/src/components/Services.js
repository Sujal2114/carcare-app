import React from 'react';
import '../styles/Services.css';

const Services = () => {
    return (
        <div className="services">
            <h2>Our Services</h2>
            <div className="services-list">
                <div className="service-item">
                    <h3>Routine Maintenance</h3>
                    <p>Essential services like oil changes, filter replacements, and fluid top-ups to keep your vehicle running smoothly.</p>
                </div>
                <div className="service-item">
                    <h3>Detailing Services</h3>
                    <p>Professional car cleaning, including interior vacuuming, exterior washing, and waxing to enhance your vehicle’s appearance.</p>
                </div>
                <div className="service-item">
                    <h3>Diagnostics & Minor Repairs</h3>
                    <p>On-the-spot diagnostics for common issues and minor repairs without needing a service center visit.</p>
                </div>
                <div className="service-item">
                    <h3>Seasonal Check-ups</h3>
                    <p>Comprehensive inspections and maintenance to prepare your vehicle for seasonal changes.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;