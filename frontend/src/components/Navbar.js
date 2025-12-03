import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          JobPortal
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobsearch">Job Search</Link></li>

        {/* Before login */}
        {!role && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}

        {/* Candidate after login */}
        {role === "candidate" && (
          <>
            <li><Link to="/candidate/ApplyJob">Candidate Dashboard</Link></li>
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          </>
        )}

        {/* Recruiter after login */}
        {role === "recruiter" && (
          <>
            <li><Link to="/recruiter/Applications">Recruiter Dashboard</Link></li>
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
