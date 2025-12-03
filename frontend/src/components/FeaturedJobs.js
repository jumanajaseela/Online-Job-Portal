import React from 'react';
import './FeaturedJobs.css';

const featuredJobs = [
  { title: 'Frontend Developer', company: 'Google', location: 'Bangalore' },
  { title: 'Data Analyst', company: 'Amazon', location: 'Chennai' },
  { title: 'Software Engineer', company: 'TCS', location: 'Hyderabad' },
];

function FeaturedJobs() {
  return (
    <section className="featured-jobs">
      <h2>Featured Jobs</h2>
      <div className="job-grid">
        {featuredJobs.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedJobs;
