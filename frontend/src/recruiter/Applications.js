import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Applications.css";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/applications");
        setApplications(res.data);
      } catch (err) {
        console.error("Error fetching applications:", err);
      }
    };
    fetchApplications();
  }, []);

  return (
    <div className="applications">
      <h2>All Job Applications</h2>
      <table>
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>Email</th>
            <th>Job Title</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app._id}>
              <td>{app.candidateName}</td>
              <td>{app.candidateEmail}</td>
              <td>{app.jobTitle}</td>
              <td>
                <a href={app.resumeLink} target="_blank" rel="noreferrer">
                  View Resume
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Applications;
