import React, { useState, useEffect } from 'react';
import '../styles/Profile.css';

const Profile = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        bookings: []
    });

    useEffect(() => {
        // Fetch user's booking history
        const fetchedBookings = [
            { id: 1, service: 'Routine Maintenance', date: '2024-01-15' },
            { id: 2, service: 'Car Detailing', date: '2024-02-02' }
        ];
        setUserInfo(prevState => ({
            ...prevState,
            bookings: fetchedBookings
        }));
    }, []);

    return (
        <div className="profile">
            <h2>{userInfo.name}'s Profile</h2>
            <p>Email: {userInfo.email}</p>
            <h3>Your Bookings</h3>
            <ul>
                {userInfo.bookings.map(booking => (
                    <li key={booking.id}>
                        {booking.service} - {booking.date}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Profile;