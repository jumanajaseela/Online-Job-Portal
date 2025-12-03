import React from "react";
import JobListings from "../candidate/JobListings";
import MyApplications from "../candidate/MyApplications";
import Profile from "../candidate/Profile";
import Notifications from "../candidate/Notifications";

function CandidateDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Candidate Dashboard</h2>
      <Profile />
      <JobListings />
      <MyApplications />
      <Notifications />
    </div>
  );
}

export default CandidateDashboard;
