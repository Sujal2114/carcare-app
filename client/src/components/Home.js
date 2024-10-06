import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="home-banner">
                <h1>CarCare: Drive More, Worry Less</h1>
                <p>Your convenient doorstep car service</p>
                <Link to="/services" className="btn-primary">Explore Services</Link>
            </div>
        </div>
    );
}

export default Home;