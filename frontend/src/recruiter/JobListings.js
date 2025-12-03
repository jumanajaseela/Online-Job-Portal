import React, { useState } from "react";

function JobListings() {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", applicants: 5 },
    { id: 2, title: "Backend Developer", applicants: 3 },
  ]);

  return (
    <div className="card">
      <h3>Job Listings</h3>
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h4>{job.title}</h4>
          <p>Applicants: {job.applicants}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
      <button>Add New Job</button>
    </div>
  );
}

export default JobListings;
