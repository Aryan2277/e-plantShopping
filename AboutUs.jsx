import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">About Us</h1>
      <p className="about-us-description">
        Welcome to Paradise Nursery, your number one source for all green houseplants. 
        We are dedicated to giving you the very best plants, with a focus on quality, 
        sustainability, and customer service.
      </p>
      <p className="about-us-content">
        Founded in 2024, Paradise Nursery has come a long way from its beginnings. 
        Whether you are a seasoned plant parent or looking for your first indoor plant, 
        our curated collection brings nature closer to your living space.
      </p>
    </div>
  );
}

export default AboutUs;
.background-image {
  background-image: url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
}
