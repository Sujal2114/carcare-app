import React, { useState } from 'react';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]);

    const [bookings, setBookings] = useState([
        { id: 1, service: 'Routine Maintenance', user: 'John Doe', status: 'Completed' },
        { id: 2, service: 'Car Detailing', user: 'Jane Smith', status: 'In Progress' }
    ]);

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <div className="dashboard-section">
                <h3>Users</h3>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name} - {user.email}</li>
                    ))}
                </ul>
            </div>

            <div className="dashboard-section">
                <h3>Bookings</h3>
                <ul>
                    {bookings.map(booking => (
                        <li key={booking.id}>
                            {booking.service} - {booking.user} - {booking.status}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AdminDashboard;