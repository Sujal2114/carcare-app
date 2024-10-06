const API_URL = 'http://localhost:5000/api'; // Adjust this as per your server configuration

export const loginUser = async (credentials) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const data = await response.json();
    return data;
};

export const registerUser = async (userData) => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        throw new Error('Registration failed');
    }

    const data = await response.json();
    return data;
};

export const createBooking = async (bookingData) => {
    const response = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
        throw new Error('Booking failed');
    }

    const data = await response.json();
    return data;
};

export const getBookings = async () => {
    const response = await fetch(`${API_URL}/bookings`);
    if (!response.ok) {
        throw new Error('Failed to fetch bookings');
    }
    return response.json();
};