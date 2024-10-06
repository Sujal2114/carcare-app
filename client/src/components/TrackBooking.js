import React, { useState } from 'react';
import '../styles/TrackBooking.css';

const TrackBooking = () => {
    const [bookingId, setBookingId] = useState('');
    const [bookingStatus, setBookingStatus] = useState(null);

    const handleTrack = () => {
        // Mock status response for demo
        setBookingStatus({
            id: bookingId,
            status: 'In Progress',
            technician: 'John Doe'
        });
    };

    return (
        <div className="track-booking">
            <h2>Track Your Booking</h2>
            <input 
                type="text" 
                placeholder="Enter Booking ID" 
                value={bookingId} 
                onChange={(e) => setBookingId(e.target.value)} 
            />
            <button onClick={handleTrack}>Track</button>

            {bookingStatus && (
                <div className="booking-status">
                    <h3>Status for Booking ID: {bookingStatus.id}</h3>
                    <p>Status: {bookingStatus.status}</p>
                    <p>Technician: {bookingStatus.technician}</p>
                </div>
            )}
        </div>
    );
}

export default TrackBooking;