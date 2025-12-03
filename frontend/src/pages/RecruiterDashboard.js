import React from "react";
import JobListings from "../recruiter/JobListings";
import Applications from "../recruiter/Applications";
import RecruiterProfile from "../recruiter/RecruiterProfile";
import Notifications from "../recruiter/Notifications";

function RecruiterDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Recruiter Dashboard</h2>
      <RecruiterProfile />
      <JobListings />
      <Applications />
      <Notifications />
    </div>
  );
}

export default RecruiterDashboard;
