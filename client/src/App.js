import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Booking from './components/Booking';
import TrackBooking from './components/TrackBooking';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';
import Profile from './components/Profile';
import AdminDashboard from './components/AdminDashboard';
import TechnicianDashboard from './components/TechnicianDashboard';
import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/track-booking" element={<TrackBooking />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/technician" element={<TechnicianDashboard />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;