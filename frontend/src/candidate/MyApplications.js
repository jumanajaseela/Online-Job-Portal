import React from "react";

function MyApplications() {
  const apps = [
    { jobTitle: "Frontend Developer", status: "Under Review" },
    { jobTitle: "Backend Developer", status: "Shortlisted" },
  ];

  return (
    <div className="card">
      <h3>My Applications</h3>
      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {apps.map((app, index) => (
            <tr key={index}>
              <td>{app.jobTitle}</td>
              <td>{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyApplications;
