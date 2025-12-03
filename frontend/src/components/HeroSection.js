import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup'); // redirects to Signup page
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Dream Job or the Perfect Candidate</h1>
        <p>Join our job portal today and connect with top companies or skilled candidates.</p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
