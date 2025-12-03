import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './JobSearch.css';

function JobSearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const [jobs] = useState([
    { id: 1, title: 'Frontend Developer', company: 'TechNova', location: 'Chennai', type: 'Full-Time' },
    { id: 2, title: 'Backend Developer', company: 'CodeWave', location: 'Bangalore', type: 'Part-Time' },
    { id: 3, title: 'UI/UX Designer', company: 'DesignPro', location: 'Remote', type: 'Full-Time' },
    { id: 4, title: 'Data Analyst', company: 'InfoVista', location: 'Pune', type: 'Full-Time' },
    { id: 5, title: 'Software Tester', company: 'TestXpert', location: 'Hyderabad', type: 'Contract' },
    { id: 6, title: 'Machine Learning Engineer', company: 'AIWorks', location: 'Bangalore', type: 'Full-Time' },
    { id: 7, title: 'React Developer', company: 'WebGen', location: 'Remote', type: 'Internship' },
    { id: 8, title: 'Project Manager', company: 'NextStep', location: 'Chennai', type: 'Full-Time' },
    { id: 9, title: 'DevOps Engineer', company: 'Cloudify', location: 'Noida', type: 'Full-Time' },
    { id: 10, title: 'Digital Marketing Executive', company: 'MarketGuru', location: 'Mumbai', type: 'Full-Time' },
    { id: 11, title: 'Content Writer', company: 'WordFlow', location: 'Remote', type: 'Part-Time' },
    { id: 12, title: 'Cybersecurity Analyst', company: 'SecureIT', location: 'Hyderabad', type: 'Full-Time' },
    { id: 13, title: 'Python Developer', company: 'CodeVerse', location: 'Bangalore', type: 'Full-Time' },
    { id: 14, title: 'Mobile App Developer', company: 'AppCrafters', location: 'Chennai', type: 'Full-Time' },
    { id: 15, title: 'AI Research Intern', company: 'NeuroTech', location: 'Remote', type: 'Internship' },
  ]);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ Function to redirect user to Signup page
  const handleApplyClick = () => {
    navigate('/signup');
  };

  return (
    <div>
      <Navbar />
      <div className="job-search-container">
        <h1>Search for Jobs</h1>
        <input
          type="text"
          placeholder="Search by title, company, or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="job-results">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <h3>{job.title}</h3>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Type:</strong> {job.type}</p>
                <button className="apply-btn" onClick={handleApplyClick}>
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <p className="no-results">No jobs found for "{searchTerm}".</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobSearch;
