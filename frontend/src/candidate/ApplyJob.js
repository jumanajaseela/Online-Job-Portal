import React, { useState } from "react";
import axios from "axios";
import "./ApplyJob.css";

function ApplyJob() {
  const [formData, setFormData] = useState({
    candidateName: "",
    candidateEmail: "",
    jobTitle: "",
    resumeLink: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/applications", formData);
      alert(res.data.message);
      setFormData({ candidateName: "", candidateEmail: "", jobTitle: "", resumeLink: "" });
    } catch (err) {
      alert("Error submitting application!");
      console.error(err);
    }
  };

  return (
    <div className="apply-job">
      <h2>Apply for Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="candidateName"
          placeholder="Your Name"
          value={formData.candidateName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="candidateEmail"
          placeholder="Your Email"
          value={formData.candidateEmail}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="resumeLink"
          placeholder="Resume Link"
          value={formData.resumeLink}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default ApplyJob;
