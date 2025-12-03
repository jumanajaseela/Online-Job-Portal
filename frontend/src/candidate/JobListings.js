import React from "react";

function JobListings() {
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "TechCorp", location: "Chennai" },
    { id: 2, title: "Backend Developer", company: "CodeLabs", location: "Bangalore" },
  ];

  return (
    <div className="card">
      <h3>Available Jobs</h3>
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h4>{job.title}</h4>
          <p>{job.company} - {job.location}</p>
          <button>Apply</button>
        </div>
      ))}
    </div>
  );
}

export default JobListings;
