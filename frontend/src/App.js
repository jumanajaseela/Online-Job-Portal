import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CandidateDashboard from "./pages/CandidateDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import JobSearch from "./pages/JobSearch";

import ApplyJob from "./candidate/ApplyJob";
import Applications from "./recruiter/Applications";


function App() {
  const role = localStorage.getItem("role"); // recruiter or candidate

  return (
    <Router>
      
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Auth Pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Job Search Page */}
        <Route path="/jobsearch" element={<JobSearch />} />

        {/* Candidate Dashboard → Apply Job */}
        <Route
          path="/candidate/dashboard"
          element={role === "candidate" ? <ApplyJob /> : <Navigate to="/login" />}
        />

        {/* Recruiter Dashboard → View Applications */}
        <Route
  path="/recruiter/dashboard"
  element={role === "recruiter" ? <RecruiterDashboard /> : <Navigate to="/login" />}
/>


        {/* Optional Direct Routes */}
        <Route path="/candidate/ApplyJob" element={<ApplyJob />} />
        <Route path="/recruiter/Applications" element={<Applications />} />
      </Routes>
    </Router>
  );
}

export default App;
