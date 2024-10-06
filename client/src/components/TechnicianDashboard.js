import React, { useState } from 'react';
import '../styles/TechnicianDashboard.css';

const TechnicianDashboard = () => {
    const [tasks, setTasks] = useState([
        { id: 1, service: 'Routine Maintenance', customer: 'John Doe', status: 'In Progress' },
        { id: 2, service: 'Car Detailing', customer: 'Jane Smith', status: 'Pending' }
    ]);

    return (
        <div className="technician-dashboard">
            <h2>Technician Dashboard</h2>
            <div className="dashboard-section">
                <h3>Assigned Tasks</h3>
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>
                            {task.service} - {task.customer} - {task.status}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TechnicianDashboard;