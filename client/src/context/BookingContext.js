import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [bookings, setBookings] = useState([]);

    const addBooking = (booking) => {
        setBookings((prevBookings) => [...prevBookings, booking]);
    };

    const removeBooking = (id) => {
        setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
    };

    return (
        <BookingContext.Provider value={{ bookings, addBooking, removeBooking }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    return useContext(BookingContext);
};