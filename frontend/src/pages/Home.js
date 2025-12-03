import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedJobs from '../components/FeaturedJobs';
import HowItWorks from '../components/HowItWorks';
import TopCompanies from '../components/TopCompanies';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  const role = localStorage.getItem("role"); // Get role from local storage

  return (
    <div>
      <Navbar />
      <HeroSection />

      {/* Candidate Dashboard Section */}
      {role === "candidate" && (
        <div className="dashboard-section">
          <h2>Candidate Dashboard</h2>
          <p>Welcome Candidate! You can search and apply for your dream jobs here.</p>
          <button 
            className="dashboard-btn"
            onClick={() => window.location.href = "/jobsearch"}
          >
            Search Jobs
          </button>
        </div>
      )}

      {/* Recruiter Dashboard Section */}
      {role === "recruiter" && (
        <div className="dashboard-section">
          <h2>Recruiter Dashboard</h2>
          <p>Welcome Recruiter! You can post jobs and view applicants here.</p>
          <button 
            className="dashboard-btn"
            onClick={() => window.location.href = "/jobsearch"}
          >
            View Applicants
          </button>
        </div>
      )}

      {/* Common Sections */}
      <FeaturedJobs />
      <HowItWorks />
      <TopCompanies />
      <Footer />
    </div>
  );
}

export default Home;
